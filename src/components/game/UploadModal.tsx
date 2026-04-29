'use client';

/**
 * UPLOAD MODAL
 *
 * Modal for uploading custom JSON folder structures.
 * Includes format guide, textarea input, and validation feedback.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, FileJson, AlertCircle, CheckCircle } from 'lucide-react';
import { parseTreeJSON } from '@/lib/validator';
import type { TreeNode } from '@/types';
import styles from './UploadModal.module.css';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoad: (tree: TreeNode) => void;
}

const EXAMPLE_JSON = `{
  "name": "root",
  "children": [
    {
      "name": "src",
      "children": [
        { "name": "components", "children": [] },
        { "name": "utils", "children": [] }
      ]
    },
    {
      "name": "docs",
      "children": []
    }
  ]
}`;

export default function UploadModal({ isOpen, onClose, onLoad }: UploadModalProps) {
  const [jsonInput, setJsonInput] = useState(EXAMPLE_JSON);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleValidate() {
    setError(null);
    setSuccess(false);

    const result = parseTreeJSON(jsonInput);
    if (!result.valid || !result.tree) {
      setError(result.error || 'Invalid structure');
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      onLoad(result.tree!);
      onClose();
      setSuccess(false);
      setJsonInput(EXAMPLE_JSON);
    }, 600);
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result;
      if (typeof text === 'string') {
        setJsonInput(text);
        setError(null);
        setSuccess(false);
      }
    };
    reader.readAsText(file);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerTitle}>
                <FileJson size={20} className={styles.headerIcon} />
                <h2>Upload Custom Tree</h2>
              </div>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                <X size={18} />
              </button>
            </div>

            {/* Format guide */}
            <div className={styles.guide}>
              <p className={styles.guideText}>
                Paste a JSON structure with <code>name</code> and <code>children</code> fields.
                Each node must have a string name and an array of children.
              </p>
            </div>

            {/* File upload option */}
            <label className={styles.fileLabel}>
              <Upload size={14} />
              <span>Upload .json file</span>
              <input
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className={styles.fileInput}
              />
            </label>

            {/* JSON textarea */}
            <textarea
              className={styles.textarea}
              value={jsonInput}
              onChange={(e) => {
                setJsonInput(e.target.value);
                setError(null);
                setSuccess(false);
              }}
              spellCheck={false}
              rows={12}
              aria-label="JSON input"
            />

            {/* Validation feedback */}
            {error && (
              <motion.div
                className={styles.feedback + ' ' + styles.feedbackError}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={14} />
                <span>{error}</span>
              </motion.div>
            )}

            {success && (
              <motion.div
                className={styles.feedback + ' ' + styles.feedbackSuccess}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={14} />
                <span>Valid structure! Loading level...</span>
              </motion.div>
            )}

            {/* Actions */}
            <div className={styles.actions}>
              <button className={styles.cancelBtn} onClick={onClose}>
                Cancel
              </button>
              <button className={styles.loadBtn} onClick={handleValidate}>
                Validate & Load
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
