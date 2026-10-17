import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icons.jsx';
import { GAME_MODES } from '../data/site.js';

export default function ModePlaceholder({ modeId }) {
  const mode = GAME_MODES.find(item => item.id === modeId);
  return <main className="mode-stub-wrap"><div className={`mode-stub mode-stub-${mode.theme}`}>
    <div className="stub-top mono"><span><span className="live-light"/> SYSTEM_404</span><span>MODULE // IN DEVELOPMENT</span></div>
    <div className="stub-glyph"><Icon name={mode.icon} size={51}/></div>
    <span className="section-eyebrow">{mode.tag}</span><h1>{mode.name}</h1><p>{mode.description}</p>
    <div className="stub-info"><Icon name="terminal" size={18}/><span>This is the landing-page milestone. The {modeId === 'pvp' ? 'PvP rooms, code editor and judge' : 'Gemini challenge generator, code editor and AI tutor'} will be connected in the next development step.</span></div>
    <Link className="button button-primary" to="/">← BACK TO LANDING</Link>
  </div></main>;
}
