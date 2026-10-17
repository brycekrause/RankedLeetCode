import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icons.jsx';

export default function ModeCard({ mode }) {
  return (
    <Link className={`mode-card mode-${mode.theme}`} to={mode.path} aria-label={`${mode.name}: ${mode.label}`}>
      <div className="mode-card-header"><span className="mono mode-id">{mode.tag}</span><Icon name="arrowUp" size={22}/></div>
      <div className="mode-symbol"><Icon name={mode.icon} size={35} strokeWidth={1.55}/><div className="symbol-halo"/></div>
      <span className="mode-label mono">{mode.label}</span>
      <h3>{mode.name}</h3>
      <p>{mode.description}</p>
      <div className="mode-features">{mode.features.map(item => <span key={item}><Icon name="check" size={14}/>{item}</span>)}</div>
      <div className="mode-link">{mode.button} <Icon name="arrow" size={18}/></div>
    </Link>
  );
}
