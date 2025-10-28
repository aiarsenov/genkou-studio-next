'use client';

import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';

const projects = [
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    title: 'Cover 1',
    videoId: '1112958908', // https://vimeo.com/1112958908
  },
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Cover 2',
    videoId: '1121849301', // https://vimeo.com/1121849301
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Cover 3',
    videoId: null, // Нет видео
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Cover 4',
    videoId: '1128429506', // https://vimeo.com/1128429506
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Cover 5',
    videoId: '1128430079', // https://vimeo.com/1128430079
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Cover 6',
    videoId: '1112959812', // https://vimeo.com/1112959812
  },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const handleCardClick = (videoId: string | null) => {
    if (videoId) {
      setSelectedVideoId(videoId);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <h2>Портфолио</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`card portfolio-card ${project.videoId ? 'cursor-pointer' : ''}`}
              onClick={() => handleCardClick(project.videoId)}
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
              {project.videoId && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(project.videoId);
                  }}
                >
                  ▶
                </button>
              )}
            </div>
          ))}
        </div>
        <button className="load-more">
          Загрузить ещё <Image src="/images/gekon 2.png" alt="Gecko" width={24} height={24} />
        </button>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        videoId={selectedVideoId}
        onClose={handleCloseModal}
      />
    </>
  );
}
