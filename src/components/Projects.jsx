import { ExternalLink } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    name: 'CINE-JOSEITO',
    desc: 'Plataforma de streaming estilo Netflix con autenticación JWT, API de TMDB, reproductor integrado y sistema de favoritos.',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    url: 'https://cine-joseito.vercel.app',
    color: '#e50914',
  },
  {
    name: 'App Joseito',
    desc: 'App social estilo Tinder con chat en tiempo real vía Socket.io, detección de matches mutuos y sistema de autenticación completo.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    url: 'https://app-joseito.vercel.app',
    color: '#ff4b7d',
  },
  {
    name: 'La Sabrosa',
    desc: 'Plataforma de delivery con mapa Leaflet en tiempo real, chat con el repartidor, soporte PWA y backend en Railway.',
    tags: ['React', 'Node.js', 'Socket.io', 'Leaflet'],
    url: 'https://la-sabrosa.vercel.app',
    color: '#f59e0b',
  },
  {
    name: 'Callejeros Burger',
    desc: 'Landing page de restaurante con animaciones Framer Motion, menú interactivo y diseño 100% responsive.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    url: 'https://callejeros-burger.vercel.app',
    color: '#f97316',
  },
  {
    name: 'TuTV',
    desc: 'App móvil universal para explorar películas y series con React Native + Expo, integrada con la API de TMDB.',
    tags: ['React Native', 'Expo', 'TMDB API'],
    url: 'https://tutv.vercel.app',
    color: '#0095ff',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="projects__separator" />
      <div className="container">
        <span className="section-eyebrow">// proyectos</span>
        <h2 className="section-title">Lo que he construido</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px', maxWidth: '560px' }}>
          Aplicaciones reales, desplegadas y funcionando. Todo desarrollado de forma autodidacta.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ '--card-color': p.color }}
            >
              <div className="project-card__glow" />
              <div className="project-card__top">
                <span className="project-card__name">{p.name}</span>
                <ExternalLink size={15} className="project-card__ext" />
              </div>
              <p className="project-card__desc">{p.desc}</p>
              <div className="project-card__tags">
                {p.tags.map(t => <span key={t} className="project-card__tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
