'use client';

/**
 * LEVEL SELECTOR
 *
 * Card-based level selection with difficulty indicators and custom level upload.
 */

import { motion } from 'framer-motion';
import { Play, Lock, Unlock, Gauge, Eye, Shuffle, Upload } from 'lucide-react';
import type { LevelConfig } from '@/types';
import styles from './LevelSelector.module.css';

interface LevelSelectorProps {
  levels: LevelConfig[];
  onSelect: (level: LevelConfig) => void;
  onCustom: () => void;
  onGenerate: () => void;
}

const DIFFICULTY_COLORS: Record<number, string> = {
  1: 'var(--color-success)',
  2: 'var(--color-info)',
  3: 'var(--color-warning)',
  4: 'var(--color-accent)',
  5: 'var(--color-error)',
};

export default function LevelSelector({ levels, onSelect, onCustom, onGenerate }: LevelSelectorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Select a Mission</h2>
        <p className={styles.subtitle}>Navigate the file tree to reach the target folder</p>
      </div>

      <div className={styles.grid}>
        {levels.map((level, idx) => (
          <motion.button
            key={level.id}
            className={styles.card}
            onClick={() => onSelect(level)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, type: 'spring', stiffness: 300, damping: 25 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{ '--card-accent': DIFFICULTY_COLORS[level.id] || 'var(--color-primary)' } as React.CSSProperties}
          >
            <div className={styles.cardHeader}>
              <span className={styles.levelNum}>Level {level.id}</span>
              <div className={styles.difficultyDots}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.dot} ${i < level.id ? styles.dotActive : ''}`}
                  />
                ))}
              </div>
            </div>

            <h3 className={styles.cardTitle}>{level.name}</h3>
            <p className={styles.cardDesc}>{level.description}</p>

            <div className={styles.cardTags}>
              {!level.allowAbsolute && (
                <span className={styles.tag}>
                  <Lock size={10} /> Relative Only
                </span>
              )}
              {level.hiddenMode && (
                <span className={styles.tag}>
                  <Eye size={10} /> Hidden
                </span>
              )}
              {level.maxMoves !== null && (
                <span className={styles.tag}>
                  <Gauge size={10} /> {level.maxMoves} moves
                </span>
              )}
            </div>

            <div className={styles.playIcon}>
              <Play size={16} />
            </div>
          </motion.button>
        ))}

        {/* Custom level card */}
        <motion.button
          className={`${styles.card} ${styles.cardSpecial}`}
          onClick={onCustom}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: levels.length * 0.08, type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <Upload size={24} className={styles.specialIcon} />
          <h3 className={styles.cardTitle}>Upload Custom</h3>
          <p className={styles.cardDesc}>Import your own folder structure as JSON</p>
        </motion.button>

        {/* Random level card */}
        <motion.button
          className={`${styles.card} ${styles.cardSpecial}`}
          onClick={onGenerate}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (levels.length + 1) * 0.08, type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <Shuffle size={24} className={styles.specialIcon} />
          <h3 className={styles.cardTitle}>Random Challenge</h3>
          <p className={styles.cardDesc}>Generate a randomized tree to test your skills</p>
        </motion.button>
      </div>
    </div>
  );
}
