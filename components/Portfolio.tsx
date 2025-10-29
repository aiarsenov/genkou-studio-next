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
    isVertical: true, // Вертикальная модалка (9:16)
  },
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Cover 2',
    videoId: '1121849301', // https://vimeo.com/1121849301
    isVertical: false, // Горизонтальная модалка (16:9)
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Cover 3',
    videoId: '1112959812', // https://vimeo.com/1112959812
    isVertical: false, // Горизонтальная модалка (16:9)
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Cover 4',
    videoId: '1128429506', // https://vimeo.com/1128429506
    isVertical: false, // Горизонтальная модалка (16:9)
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Cover 5',
    videoId: '1128430079', // https://vimeo.com/1128430079
    isVertical: false, // Горизонтальная модалка (16:9)
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Cover 6',
    videoId: '1131371883', // https://vimeo.com/1131371883
    isVertical: true, // Вертикальная модалка (9:16)
  },
];

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isVertical, setIsVertical] = useState(false);

  const handleCardClick = (videoId: string | null, vertical: boolean = false) => {
    if (videoId) {
      setSelectedVideoId(videoId);
      setIsVertical(vertical);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
    setIsVertical(false);
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
              onClick={() => handleCardClick(project.videoId, project.isVertical)}
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
                    handleCardClick(project.videoId, project.isVertical);
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
        isVertical={isVertical}
        onClose={handleCloseModal}
      />
    </>
  );
}
