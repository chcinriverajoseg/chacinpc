import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <img src="/logo.jpg" alt="ChacinPC Logo" className="header__logo" />
          <span className="header__brand-name">Chacín<span>PC</span></span>
        </a>
        <nav className="header__nav header__nav--desktop">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">{link.label}</a>
          ))}
          <a href="#contacto" className="header__cta">Pedir diagnóstico</a>
        </nav>
        <button
          className="header__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="header__nav header__nav--mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="header__cta" onClick={() => setOpen(false)}>Pedir diagnóstico</a>
        </nav>
      )}
    </header>
  );
}
