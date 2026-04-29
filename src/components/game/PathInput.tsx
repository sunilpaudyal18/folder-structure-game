'use client';

/**
 * PATH INPUT
 *
 * Terminal-style input for entering path commands.
 * Features shake animation on error and keyboard submit.
 */

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, CornerDownLeft } from 'lucide-react';
import styles from './PathInput.module.css';

interface PathInputProps {
  currentPath: string;
  onSubmit: (path: string) => void;
  disabled: boolean;
  hasError: boolean;
}

export default function PathInput({ currentPath, onSubmit, disabled, hasError }: PathInputProps) {
  const [value, setValue] = useState('');
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Trigger shake when hasError changes to true */
  useEffect(() => {
    if (hasError) {
      setShaking(true);
      const timer = setTimeout(() => setShaking(false), 500);
      return () => clearTimeout(timer);
    }
  }, [hasError]);

  /* Auto-focus input */
  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSubmit(trimmed);
    setValue('');
  }

  return (
    <div className={styles.wrapper}>
      <motion.form
        className={`${styles.form} ${shaking ? 'animate-shake' : ''}`}
        onSubmit={handleSubmit}
        animate={shaking ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Current path display */}
        <div className={styles.prompt}>
          <Terminal size={14} className={styles.promptIcon} />
          <span className={styles.promptPath}>{currentPath}</span>
          <ArrowRight size={12} className={styles.promptArrow} />
        </div>

        {/* Input field */}
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter path (e.g. ../docs or /root/src)"
          disabled={disabled}
          autoComplete="off"
          spellCheck={false}
          aria-label="Path input"
          id="path-input"
        />

        {/* Submit button */}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={disabled || !value.trim()}
          aria-label="Execute path"
        >
          <CornerDownLeft size={16} />
        </button>
      </motion.form>

      <div className={styles.hint}>
        Press <kbd className={styles.kbd}>Enter</kbd> to navigate
      </div>
    </div>
  );
}
