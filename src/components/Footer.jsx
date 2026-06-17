import './Footer.css';
import { CONTACT } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo.jpg" alt="ChacinPC" className="footer__logo" />
          <div>
            <span className="footer__name">ChacinPC</span>
            <span className="footer__tagline">Reparación PC · Desarrollo Web · {CONTACT.location.replace('Santiago', 'Valparaíso — Concón')}</span>
          </div>
        </div>
        <span className="footer__copy">© {year} ChacinPC — José Chacín</span>
      </div>
    </footer>
  );
}
