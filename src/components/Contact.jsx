import { MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './BrandIcons';
import { CONTACT, whatsappLink } from '../config';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__separator" />
      <div className="container">
        <div className="contact__header">
          <span className="section-eyebrow">// contacto</span>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="section-subtitle">
            Cuéntame qué pasa con tu equipo o qué necesitas para tu página
            y te respondo a la brevedad.
          </p>
        </div>

        <div className="contact__grid">
          <a
            href={whatsappLink('Hola, vengo desde la página de ChacinPC y quiero más información')}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card contact__card--main"
          >
            <div className="contact__card-icon contact__card-icon--green">
              <MessageCircle size={28} />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-title">WhatsApp</span>
              <span className="contact__card-sub">Respuesta más rápida — escríbeme ahora</span>
            </div>
            <ArrowRight size={20} className="contact__card-arrow" />
          </a>

          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="contact__card">
            <div className="contact__card-icon">
              <InstagramIcon />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-title">Instagram</span>
              <span className="contact__card-sub">@chacinpc</span>
            </div>
          </a>

          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="contact__card">
            <div className="contact__card-icon">
              <FacebookIcon />
            </div>
            <div className="contact__card-body">
              <span className="contact__card-title">Facebook</span>
              <span className="contact__card-sub">ChacinPC</span>
            </div>
          </a>

          <div className="contact__info">
            <MapPin size={16} />
            <div>
              <strong>Valparaíso — Concón, Chile</strong>
              <span>Atención presencial y remota</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
