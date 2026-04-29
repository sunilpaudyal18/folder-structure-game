'use client';

/**
 * USE GAME ENGINE
 *
 * Central game state manager. Handles path execution, animation stepping,
 * win/loss detection, and move tracking.
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type { GameState, GameStatus, LevelConfig } from '@/types';
import { resolvePath } from '@/lib/pathParser';
import { getVisiblePaths } from '@/lib/treeUtils';

/** Delay between animation steps in ms */
const STEP_DELAY = 350;

interface UseGameEngineReturn {
  state: GameState;
  visiblePaths: Set<string>;
  loadLevel: (level: LevelConfig) => void;
  executeMove: (input: string) => { success: boolean; error?: string };
  resetLevel: () => void;
  isAnimating: boolean;
}

function createInitialState(level: LevelConfig): GameState {
  return {
    level,
    currentPath: level.startPath,
    targetPath: level.targetPath,
    moveCount: 0,
    status: 'playing',
    pathHistory: [],
    visitedPaths: [level.startPath],
    isAnimating: false,
    displayPath: level.startPath,
  };
}

export function useGameEngine(): UseGameEngineReturn {
  const [state, setState] = useState<GameState>(() => {
    /* Placeholder state until a level is loaded */
    return {
      level: {} as LevelConfig,
      currentPath: '',
      targetPath: '',
      moveCount: 0,
      status: 'menu' as GameStatus,
      pathHistory: [],
      visitedPaths: [],
      isAnimating: false,
      displayPath: '',
    };
  });

  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const stepsQueueRef = useRef<string[]>([]);
  const stepIndexRef = useRef(0);

  /* Clean up animation on unmount */
  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  const loadLevel = useCallback((level: LevelConfig) => {
    if (animationRef.current) clearTimeout(animationRef.current);
    setState(createInitialState(level));
  }, []);

  const resetLevel = useCallback(() => {
    if (animationRef.current) clearTimeout(animationRef.current);
    setState((prev) => {
      if (!prev.level.id) return prev;
      return createInitialState(prev.level);
    });
  }, []);

  /**
   * Process the next animation step from the queue.
   */
  const processNextStep = useCallback(() => {
    const steps = stepsQueueRef.current;
    const idx = stepIndexRef.current;

    if (idx >= steps.length) {
      /* Animation complete */
      const finalPath = steps[steps.length - 1];
      setState((prev) => {
        const newStatus: GameStatus =
          finalPath === prev.targetPath
            ? 'won'
            : prev.level.maxMoves !== null && prev.moveCount >= prev.level.maxMoves
              ? 'lost'
              : 'playing';

        return {
          ...prev,
          currentPath: finalPath,
          displayPath: finalPath,
          isAnimating: false,
          status: newStatus,
        };
      });
      return;
    }

    const nextPath = steps[idx];
    stepIndexRef.current = idx + 1;

    setState((prev) => ({
      ...prev,
      displayPath: nextPath,
      visitedPaths: prev.visitedPaths.includes(nextPath)
        ? prev.visitedPaths
        : [...prev.visitedPaths, nextPath],
    }));

    animationRef.current = setTimeout(processNextStep, STEP_DELAY);
  }, []);

  const executeMove = useCallback(
    (input: string): { success: boolean; error?: string } => {
      if (state.status !== 'playing' || state.isAnimating) {
        return { success: false, error: 'Cannot move right now' };
      }

      /* Check absolute path restriction */
      if (!state.level.allowAbsolute && input.trim().startsWith('/')) {
        return { success: false, error: 'Absolute paths are not allowed in this level' };
      }

      /* Check move limit */
      if (state.level.maxMoves !== null && state.moveCount >= state.level.maxMoves) {
        return { success: false, error: 'No moves remaining' };
      }

      const result = resolvePath(state.level.tree, state.currentPath, input);

      if (!result.success) {
        return { success: false, error: result.error };
      }

      /* Don't count moves that stay in place */
      if (result.finalPath === state.currentPath && result.steps.length <= 1) {
        return { success: false, error: 'You are already here' };
      }

      /* Start animation */
      const steps = result.steps.filter((s) => s !== state.currentPath);
      if (steps.length === 0) {
        return { success: false, error: 'No movement occurred' };
      }

      stepsQueueRef.current = steps;
      stepIndexRef.current = 0;

      setState((prev) => ({
        ...prev,
        isAnimating: true,
        moveCount: prev.moveCount + 1,
        pathHistory: [...prev.pathHistory, input],
      }));

      /* Kick off animation */
      animationRef.current = setTimeout(processNextStep, STEP_DELAY);

      return { success: true };
    },
    [state.status, state.isAnimating, state.level, state.moveCount, state.currentPath, processNextStep]
  );

  /* Compute visible paths for hidden mode */
  const visiblePaths: Set<string> = state.level.hiddenMode
    ? getVisiblePaths(state.level.tree, state.displayPath, state.level.visibilityRadius)
    : new Set<string>();

  return { state, visiblePaths, loadLevel, executeMove, resetLevel, isAnimating: state.isAnimating };
}
