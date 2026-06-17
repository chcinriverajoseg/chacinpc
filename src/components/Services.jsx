import { Cpu, HardDrive, Wind, ShieldCheck, LayoutTemplate, ShoppingCart, Smartphone, Gauge } from 'lucide-react';
import './Services.css';

const PC_SERVICES = [
  { icon: Wind, title: 'Limpieza y mantención', desc: 'Limpieza interna, cambio de pasta térmica, optimización para bajar temperaturas y ruido.', price: 'Desde $10.000' },
  { icon: HardDrive, title: 'Upgrade de hardware', desc: 'Instalación de SSD, ampliación de RAM y recomendaciones según tu equipo y presupuesto.', price: 'Según equipo' },
  { icon: Cpu, title: 'Diagnóstico y reparación', desc: 'Detección de fallas, formateo, reinstalación de Windows y configuración completa.', price: 'Desde $15.000' },
  { icon: ShieldCheck, title: 'Optimización y seguridad', desc: 'Eliminación de virus, limpieza de inicio y ajustes para que tu PC rinda como nuevo.', price: 'Desde $8.000' },
];

const WEB_SERVICES = [
  { icon: LayoutTemplate, title: 'Landing page', desc: 'Página profesional para tu negocio o servicio. Diseño moderno, responsive y rápido.', price: 'Desde $80.000' },
  { icon: ShoppingCart, title: 'Sitio para negocios', desc: 'Catálogo, menú digital o tienda con WhatsApp y redes integradas para vender más.', price: 'Desde $120.000' },
  { icon: Smartphone, title: 'App web o móvil', desc: 'Aplicación completa con React o React Native, backend y base de datos a medida.', price: 'Cotizar' },
  { icon: Gauge, title: 'Mejoras y mantención', desc: 'Optimización de velocidad, corrección de errores y actualizaciones de sitios existentes.', price: 'Desde $30.000' },
];

function ServiceCard({ icon: Icon, title, desc, price }) {
  return (
    <div className="service-card">
      <div className="service-card__top">
        <div className="service-card__icon"><Icon size={20} /></div>
        <span className="service-card__price">{price}</span>
      </div>
      <h4 className="service-card__title">{title}</h4>
      <p className="service-card__desc">{desc}</p>
      <div className="service-card__shine" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__separator" />
      <div className="container">
        <div className="services__intro">
          <span className="section-eyebrow">// servicios</span>
          <h2 className="section-title">Dos especialidades,<br />un mismo técnico</h2>
          <p className="section-subtitle">
            Diagnóstico claro antes de cualquier trabajo. Te digo qué se puede hacer,
            en cuánto tiempo y a qué costo — sin sorpresas.
          </p>
        </div>

        <div className="service-block">
          <div className="service-block__label">
            <span className="service-block__tag">hardware &amp; software</span>
            <h3>Reparación y mantención de PC</h3>
            <p>Servicio presencial en Valparaíso, Concón y alrededores.</p>
          </div>
          <div className="service-block__grid">
            {PC_SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>

        <div className="service-block service-block--web">
          <div className="service-block__label">
            <span className="service-block__tag service-block__tag--blue">frontend &amp; fullstack</span>
            <h3>Desarrollo web profesional</h3>
            <p>Sitios modernos con React, Node.js y las mismas tecnologías que usan equipos profesionales.</p>
          </div>
          <div className="service-block__grid">
            {WEB_SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
