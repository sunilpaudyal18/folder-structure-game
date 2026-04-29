'use client';

/**
 * USE TOAST
 *
 * Lightweight toast notification system using React hooks.
 * Manages a stack of toasts with auto-dismiss.
 */

import { useState, useCallback, useRef } from 'react';
import type { ToastItem, ToastType } from '@/types';

let toastIdCounter = 0;

/** Default durations by toast type (ms) */
const DEFAULT_DURATIONS: Record<ToastType, number> = {
  success: 3000,
  error: 4000,
  info: 3000,
  warning: 3500,
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const removeToast = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (type: ToastType, message: string, duration?: number) => {
      const id = `toast-${++toastIdCounter}`;
      const finalDuration = duration ?? DEFAULT_DURATIONS[type];

      const toast: ToastItem = { id, type, message, duration: finalDuration };
      setToasts((prev) => [...prev, toast]);

      const timer = setTimeout(() => {
        removeToast(id);
      }, finalDuration);
      timersRef.current.set(id, timer);

      return id;
    },
    [removeToast]
  );

  const success = useCallback(
    (message: string, duration?: number) => addToast('success', message, duration),
    [addToast]
  );

  const error = useCallback(
    (message: string, duration?: number) => addToast('error', message, duration),
    [addToast]
  );

  const info = useCallback(
    (message: string, duration?: number) => addToast('info', message, duration),
    [addToast]
  );

  const warning = useCallback(
    (message: string, duration?: number) => addToast('warning', message, duration),
    [addToast]
  );

  const clearAll = useCallback(() => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current.clear();
    setToasts([]);
  }, []);

  return { toasts, addToast, removeToast, success, error, info, warning, clearAll };
}
