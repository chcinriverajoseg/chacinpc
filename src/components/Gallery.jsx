import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const ITEMS = [
  { type: 'img', src: '/trabajos/trabajo1.jpg', label: 'Desmontaje y diagnóstico' },
  { type: 'img', src: '/trabajos/trabajo2.jpg', label: 'Limpieza de ventilador' },
  { type: 'img', src: '/trabajos/trabajo3.jpg', label: 'Limpieza de ventilador' },
  { type: 'img', src: '/trabajos/trabajo4.jpg', label: 'Placa madre Dell — diagnóstico' },
  { type: 'img', src: '/trabajos/trabajo5.jpg', label: 'Reparación Dell Latitude' },
  { type: 'img', src: '/trabajos/trabajo6.jpg', label: 'Placa PS4 — revisión' },
  { type: 'img', src: '/trabajos/trabajo7.jpg', label: 'CPU — extracción' },
  { type: 'img', src: '/trabajos/trabajo8.jpg', label: 'Dell SupportAssist — diagnóstico RAM' },
  { type: 'img', src: '/trabajos/trabajo9.jpg', label: 'Cambio de pasta térmica' },
  { type: 'img', src: '/trabajos/trabajo10.jpg', label: 'Conector de fan — reparación' },
  { type: 'img', src: '/trabajos/trabajo11.jpg', label: 'Reconexión de cables' },
  { type: 'img', src: '/trabajos/trabajo12.jpg', label: 'Laptop abierta — mantención' },
 
  { type: 'video', src: '/trabajos/video1.mp4', label: 'Proceso de reparación' },
  { type: 'video', src: '/trabajos/video2.mp4', label: 'Resultado final' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  return (
    <section id="galeria" className="gallery">
      <div className="gallery__separator" />
      <div className="container">
        <span className="section-eyebrow">// trabajos reales</span>
        <h2 className="section-title">Galería de reparaciones</h2>
        <p className="section-subtitle" style={{ marginBottom: '40px', maxWidth: '540px' }}>
          Equipos reales intervenidos. Dell, Huawei, Asus, PS4 y más — diagnóstico,
          limpieza, cambio de pasta térmica y reparación de hardware.
        </p>

        <div className="gallery__grid">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="gallery__item"
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              aria-label={item.label}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="gallery__media"
                  onMouseEnter={e => e.target.play()}
                  onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
                />
              ) : (
                <img src={item.src} alt={item.label} className="gallery__media" loading="lazy" />
              )}
              <div className="gallery__overlay">
                <ZoomIn size={22} />
                <span>{item.label}</span>
              </div>
              {item.type === 'video' && <span className="gallery__video-badge">▶ video</span>}
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Cerrar">
            <X size={24} />
          </button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            {lightbox.type === 'video' ? (
              <video
                src={lightbox.src}
                muted
                autoPlay
                loop
                playsInline
                controls
                className="lightbox__media"
              />
            ) : (
              <img src={lightbox.src} alt={lightbox.label} className="lightbox__media" />
            )}
            <p className="lightbox__label">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}