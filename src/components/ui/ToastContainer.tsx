'use client';

/**
 * TOAST CONTAINER
 *
 * Renders the stack of active toasts in a fixed overlay.
 * Uses AnimatePresence for enter/exit animations.
 */

import { AnimatePresence } from 'framer-motion';
import type { ToastItem } from '@/types';
import Toast from './Toast';
import styles from './ToastContainer.module.css';

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export default function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className={styles.container} aria-label="Notifications">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </AnimatePresence>
    </div>
  );
}
