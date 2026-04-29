'use client';

/**
 * TOAST
 *
 * Single toast notification with icon, message, and close button.
 * Animated with Framer Motion.
 */

import { motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import type { ToastItem } from '@/types';
import styles from './Toast.module.css';

interface ToastProps {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}

const ICONS = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
};

export default function Toast({ toast, onDismiss }: ToastProps) {
  const Icon = ICONS[toast.type];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`${styles.toast} ${styles[toast.type]}`}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.iconWrap}>
        <Icon size={18} />
      </div>
      <p className={styles.message}>{toast.message}</p>
      <button
        className={styles.closeBtn}
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
