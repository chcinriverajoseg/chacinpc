import { ExternalLink, MapPin, Code2, Wrench } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONTACT } from '../config';
import './About.css';

const STACK = ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Vite', 'Socket.io', 'React Native', 'Git', 'REST APIs'];

export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="about__separator" />
      <div className="container about__inner">
        <div className="about__photo-col">
          <div className="about__logo-wrap">
            <img src="/logo.jpg" alt="ChacinPC" className="about__logo" />
          </div>
          <div className="about__badges">
            <span className="about__badge"><Wrench size={13} /> Técnico en PC</span>
            <span className="about__badge about__badge--blue"><Code2 size={13} /> Fullstack Developer</span>
          </div>
          <div className="about__location">
            <MapPin size={13} />
            Valparaíso — Concón, Chile
          </div>
        </div>

        <div className="about__content">
          <span className="section-eyebrow">// sobre-mi</span>
          <h2 className="section-title">José Chacín</h2>
          <p className="about__text">
            Desarrollador fullstack autodidacta y técnico en computadores, basado en
            Valparaíso — Concón, Chile. Aprendí a programar construyendo proyectos reales
            desde cero: plataformas de streaming, apps sociales con chat en tiempo real,
            apps móviles y sitios para negocios.
          </p>
          <p className="about__text">
            Vengo del mundo del soporte técnico y hoy combino esa experiencia con el
            desarrollo web: entiendo el hardware que hace funcionar un negocio y el
            software que lo hace crecer.
          </p>

          <div className="about__stack">
            <span className="about__stack-label">stack</span>
            <div className="about__stack-items">
              {STACK.map(t => <span key={t} className="about__stack-item">{t}</span>)}
            </div>
          </div>

          <div className="about__links">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="about__link">
              <GithubIcon /> GitHub
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="about__link">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={CONTACT.portfolioUrl} target="_blank" rel="noopener noreferrer" className="about__link about__link--accent">
              <ExternalLink size={14} /> Ver portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
