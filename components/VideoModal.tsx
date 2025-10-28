'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  videoId: string | null;
  onClose: () => void;
}

export default function VideoModal({ isOpen, videoId, onClose }: VideoModalProps) {
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

  const handleClose = () => {
    // Останавливаем видео перед закрытием
    if (iframeRef.current) {
      iframeRef.current.src = '';
    }
    onClose();
  };

  if (!isOpen || !videoId) return null;

  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="modal-content"
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
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

