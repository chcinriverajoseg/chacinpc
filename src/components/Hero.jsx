import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Code2, Wrench } from 'lucide-react';
import { whatsappLink } from '../config';
import './Hero.css';

const LINES = [
  { label: 'ubicacion', value: 'Valparaíso — Concón, Chile', ok: true },
  { label: 'especialidad', value: 'fullstack developer + soporte técnico', ok: true },
  { label: 'hardware', value: 'diagnóstico completado ✓', ok: true },
  { label: 'disponibilidad', value: 'ACTIVA', ok: true },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;
    const t = setTimeout(() => setVisibleLines(v => v + 1), 500);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="top" className="hero">
      <div className="hero__circuit" aria-hidden="true" />
      <div className="hero__glow-top" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <div className="hero__location">
            <MapPin size={13} />
            Valparaíso — Concón, Chile
          </div>

          <h1 className="hero__title">
            Reparación de PC<br />
            <span className="hero__title-accent">+ Desarrollador</span><br />
            Fullstack
          </h1>

          <p className="hero__subtitle">
            Soluciono problemas de hardware y software, y construyo
            páginas web y aplicaciones modernas. Atención directa,
            sin vueltas y sin letras chicas.
          </p>

          <div className="hero__actions">
            <a
              href={whatsappLink('Hola, vengo desde la página de ChacinPC y quiero más información')}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--primary"
            >
              Hablar por WhatsApp <ArrowRight size={16} />
            </a>
            <a href="#servicios" className="hero__btn hero__btn--secondary">
              Ver servicios
            </a>
          </div>

          <div className="hero__tags">
            <span className="hero__tag"><Wrench size={13} /> Reparación &amp; mantención PC</span>
            <span className="hero__tag"><Code2 size={13} /> Desarrollo web fullstack</span>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__logo-wrap">
            <div className="hero__logo-ring hero__logo-ring--outer" />
            <div className="hero__logo-ring hero__logo-ring--inner" />
            <img src="/logo.jpg" alt="ChacinPC" className="hero__logo" />
          </div>

          <div className="hero__terminal">
            <div className="terminal__bar">
              <span className="terminal__dot d--r" />
              <span className="terminal__dot d--y" />
              <span className="terminal__dot d--g" />
              <span className="terminal__title">chacinpc — sistema.sh</span>
            </div>
            <div className="terminal__body">
              <p className="terminal__line">
                <span className="t--sym">$</span> ./estado --sistema
              </p>
              {LINES.slice(0, visibleLines).map(line => (
                <p key={line.label} className="terminal__line">
                  <span className="t--key">{line.label}</span>
                  <span className="t--sep"> : </span>
                  <span className="t--val">{line.value}</span>
                </p>
              ))}
              {visibleLines >= LINES.length && (
                <p className="terminal__line">
                  <span className="t--sym">$</span>
                  <span className="t--cursor" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
