'use client';

/**
 * FOLDER NODE
 *
 * Visual representation of a single folder in the tree.
 * Shows folder icon, name, and status indicators.
 */

import { motion } from 'framer-motion';
import { Folder, FolderOpen, MapPin, Flag, Eye, EyeOff } from 'lucide-react';
import styles from './FolderNode.module.css';

interface FolderNodeProps {
  name: string;
  path: string;
  isCurrent: boolean;
  isTarget: boolean;
  isVisited: boolean;
  isHidden: boolean;
  isOnGhostPath: boolean;
}

export default function FolderNode({
  name,
  path,
  isCurrent,
  isTarget,
  isVisited,
  isHidden,
  isOnGhostPath,
}: FolderNodeProps) {
  if (isHidden) {
    return (
      <div className={styles.nodeHidden} data-path={path}>
        <EyeOff size={16} />
        <span className={styles.hiddenLabel}>???</span>
      </div>
    );
  }

  const nodeClass = [
    styles.node,
    isCurrent && styles.current,
    isTarget && styles.target,
    isVisited && !isCurrent && !isTarget && styles.visited,
    isOnGhostPath && styles.ghost,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      className={nodeClass}
      data-path={path}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      layout
      title={path}
    >
      {/* Status indicator icons */}
      {isCurrent && (
        <div className={styles.indicator}>
          <MapPin size={12} />
        </div>
      )}
      {isTarget && !isCurrent && (
        <div className={`${styles.indicator} ${styles.indicatorTarget}`}>
          <Flag size={12} />
        </div>
      )}

      {/* Folder icon */}
      <div className={styles.icon}>
        {isCurrent ? (
          <FolderOpen size={20} />
        ) : isHidden ? (
          <Eye size={20} />
        ) : (
          <Folder size={20} />
        )}
      </div>

      {/* Folder name */}
      <span className={styles.label}>{name}</span>
    </motion.div>
  );
}
