import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icons.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Brand />
        <nav id="primary-navigation" className={`primary-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          <Link to="/">HOME</Link>
          <Link to="/#modes" onClick={event => { if (location.pathname === '/') { event.preventDefault(); document.getElementById('modes')?.scrollIntoView({ behavior: 'smooth' }); } }}>GAME MODES</Link>
          <Link to="/#how-it-works" onClick={event => { if (location.pathname === '/') { event.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); } }}>HOW IT WORKS</Link>
        </nav>
        <div className="header-actions">
          <span className="header-system"><span className="live-light"/> BUILD_001 // ONLINE</span>
          <Link className="button button-outline header-cta" to="/problems">PLAY NOW <Icon name="arrowUp" size={15}/></Link>
        </div>
        <button className="mobile-nav-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>
          <Icon name={open ? 'x' : 'menu'} size={25}/>
        </button>
      </div>
    </header>
  );
}
