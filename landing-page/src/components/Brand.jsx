import React from 'react';
import { Link } from 'react-router-dom';

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="404 The Learning Protocol, home">
      <span className="brand-emblem">4<span>0</span>4<span className="brand-period">.</span></span>
      <span className="brand-sub">THE LEARNING<br/>PROTOCOL</span>
    </Link>
  );
}
