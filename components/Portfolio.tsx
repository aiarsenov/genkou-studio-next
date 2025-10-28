'use client';

import Image from 'next/image';

const projects = [
  { 
    id: 2, 
    img: '/images/cover2.jpg', 
    title: 'Cover 2',
    type: 'vertical',
  },
  { 
    id: 1, 
    img: '/images/cover1.jpg', 
    title: 'Cover 1',
    type: 'horizontal',
  },
  { 
    id: 3, 
    img: '/images/cover3.jpg', 
    title: 'Cover 3',
    type: 'horizontal',
  },
  { 
    id: 4, 
    img: '/images/cover4.png', 
    title: 'Cover 4',
    type: 'vertical',
  },
  { 
    id: 5, 
    img: '/images/cover5.jpg', 
    title: 'Cover 5',
    type: 'horizontal',
  },
  { 
    id: 6, 
    img: '/images/cover6.png', 
    title: 'Cover 6',
    type: 'vertical',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Портфолио</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className={`card card-${project.type}`}>
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              style={{ objectFit: 'cover' }}
            />
            <button>▶</button>
          </div>
        ))}
      </div>
      <button className="load-more">
        Загрузить ещё <Image src="/images/gekon 2.png" alt="Gecko" width={24} height={24} />
      </button>
    </section>
  );
}
