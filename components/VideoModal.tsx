'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  videoId: string | null;
  isVertical?: boolean; // true для вертикальной (9:16), false для горизонтальной (16:9)
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoId, isVertical = false, onClose }: VideoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Блокируем скролл при открытом модальном окне
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Останавливаем видео при закрытии, очищая src iframe
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    // Останавливаем видео перед закрытием
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
    onClose();
  }, [onClose]);

  // Закрытие по ESC
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  if (!isOpen || !videoId) return null;

  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&responsive=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`modal-content ${isVertical ? 'modal-vertical' : 'modal-horizontal'}`}
          >
            <button
              className="modal-close"
              onClick={handleClose}
              aria-label="Закрыть видео"
            >
              ×
            </button>
            <iframe
              ref={iframeRef}
              id="video-frame"
              src={vimeoUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

