import { useState, useRef, useCallback } from 'react';
import './BeforeAfter.css';

export default function BeforeAfter({ antes, despues, label }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const calcPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseMove = (e) => { if (dragging.current) calcPos(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };

  const onTouchMove = (e) => { calcPos(e.touches[0].clientX); };

  return (
    <div
      className="ba"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      {/* Foto DESPUÉS (fondo completo) */}
      <img src={despues} alt="Después" className="ba__img ba__img--after" draggable={false} />

      {/* Foto ANTES (recortada) */}
      <div className="ba__before" style={{ width: `${pos}%` }}>
        <img src={antes} alt="Antes" className="ba__img ba__img--before" draggable={false} />
      </div>

      {/* Divisor */}
      <div className="ba__divider" style={{ left: `${pos}%` }}>
        <div className="ba__handle">
          <span>◀</span>
          <span>▶</span>
        </div>
      </div>

      {/* Etiquetas */}
      <span className="ba__tag ba__tag--before">ANTES</span>
      <span className="ba__tag ba__tag--after">DESPUÉS</span>

      {label && <p className="ba__label">{label}</p>}
    </div>
  );
}