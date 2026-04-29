'use client';

/**
 * GAME BOARD
 *
 * Visual tree rendering with connecting lines, folder nodes, and player overlay.
 * Uses recursive rendering with CSS-based tree connectors.
 */

import { useRef } from 'react';
import type { TreeNode } from '@/types';
import { getAllPaths } from '@/lib/pathParser';
import FolderNode from './FolderNode';
import Player from './Player';
import styles from './GameBoard.module.css';

interface GameBoardProps {
  tree: TreeNode;
  currentPath: string;
  targetPath: string;
  displayPath: string;
  visitedPaths: string[];
  hiddenMode: boolean;
  visiblePaths: Set<string>;
  celebrating: boolean;
}

export default function GameBoard({
  tree,
  currentPath,
  targetPath,
  displayPath,
  visitedPaths,
  hiddenMode,
  visiblePaths,
  celebrating,
}: GameBoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);

  /** Check if a path should be hidden in fog-of-war mode */
  function isNodeHidden(path: string): boolean {
    if (!hiddenMode) return false;
    /* Always show the target (but maybe not its exact location) */
    if (path === targetPath) return false;
    return !visiblePaths.has(path);
  }

  /** Recursively render a subtree */
  function renderSubtree(node: TreeNode, parentPath: string) {
    const nodePath = parentPath ? `${parentPath}/${node.name}` : `/${node.name}`;
    const hidden = isNodeHidden(nodePath);

    return (
      <div className={styles.subtree} key={nodePath}>
        <FolderNode
          name={node.name}
          path={nodePath}
          isCurrent={displayPath === nodePath}
          isTarget={targetPath === nodePath}
          isVisited={visitedPaths.includes(nodePath)}
          isHidden={hidden}
          isOnGhostPath={false}
        />

        {node.children.length > 0 && (
          <div className={styles.childrenContainer}>
            {/* Vertical line from parent to horizontal connector */}
            <div className={styles.verticalLine} />

            <div className={styles.childrenRow}>
              {node.children.map((child, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === node.children.length - 1;
                const isOnly = node.children.length === 1;

                return (
                  <div
                    className={`${styles.childWrapper} ${
                      isOnly ? styles.childOnly : isFirst ? styles.childFirst : isLast ? styles.childLast : styles.childMiddle
                    }`}
                    key={child.name}
                  >
                    {/* Vertical connector from horizontal line to child */}
                    <div className={styles.childConnector} />
                    {renderSubtree(child, nodePath)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.board} ref={boardRef}>
      <div className={styles.treeContainer}>
        {tree.name && renderSubtree(tree, '')}
      </div>
      <Player
        targetPath={displayPath}
        boardRef={boardRef}
        celebrating={celebrating}
      />
    </div>
  );
}
