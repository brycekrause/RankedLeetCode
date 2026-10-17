import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand.jsx';
import Icon from './Icons.jsx';

export default function Footer() {
  return <footer className="site-footer"><div className="wrap footer-inner"><Brand/><div className="footer-caption">BUILT TO MAKE CODING A COMPETITION.<br/>DESIGNED TO MAKE LEARNING STICK.</div><Link to="/" className="footer-return">BACK TO TOP <Icon name="arrowUp" size={14}/></Link><span className="footer-year">HACKGB • 2026</span></div></footer>;
}
