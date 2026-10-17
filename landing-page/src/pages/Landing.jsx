import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icons.jsx';
import HeroVisual from '../components/HeroVisual.jsx';
import ModeCard from '../components/ModeCard.jsx';
import { GAME_MODES, HOW_IT_WORKS } from '../data/site.js';

export default function Landing() {
  return <>
    <main>
      <section className="hero-section" id="top">
        <div className="hero-hatch" aria-hidden="true"/>
        <div className="wrap hero-container">
          <div className="hero-copy">
            <div className="hero-label"><span className="live-light"/> THE NEXT LEVEL OF LEARNING <span className="label-counter">[ BUILD 001 ]</span></div>
            <h1>CODE.<br/><span>COMPETE.</span><br/><em>EVOLVE.</em></h1>
            <p className="hero-intro">A new kind of coding arena. Face off against real players or train solo with AI-generated challenges that grow with you.</p>
            <div className="hero-ctas">
              <Link to="/problems" className="button button-primary button-large">CHALLENGE A PLAYER <Icon name="arrowUp" size={19}/></Link>
              <Link to="/ai-challenge" className="button button-secondary button-large">TRAIN WITH AI <Icon name="arrow" size={19}/></Link>
            </div>
            <div className="hero-bottom-meta"><span><Icon name="check" size={15}/> BROWSER-BASED</span><span><Icon name="check" size={15}/> REAL CODE</span><span><Icon name="check" size={15}/> GEMINI POWERED</span></div>
          </div>
          <HeroVisual/>
        </div>
        <div className="wrap hero-bottom-border"><span>404 // THE LEARNING PROTOCOL</span><span>SCROLL TO EXPLORE <span className="scroll-arrow">↓</span></span></div>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track"><span>WRITE CODE</span>✳<span>THINK FAST</span>✳<span>BREAK LIMITS</span>✳<span>LEARN MORE</span>✳<span>REPEAT</span>✳<span>WRITE CODE</span>✳<span>THINK FAST</span>✳<span>BREAK LIMITS</span>✳<span>LEARN MORE</span>✳<span>REPEAT</span>✳</div></div>

      <section className="section modes-section" id="modes">
        <div className="wrap">
          <div className="section-toprow"><span className="section-index">// 01 — GAME MODES</span><span className="section-line"/><span className="section-meta">CHOOSE YOUR PLAYSTYLE</span></div>
          <div className="section-heading"><div><span className="section-eyebrow"><span className="eyebrow-square"/> THE EXPERIENCE</span><h2>TWO WAYS<br/>TO <span className="heading-accent">LEVEL UP.</span></h2></div><p>Go head-to-head in a real-time coding duel, or build your skills one Gemini challenge at a time. Your call.</p></div>
          <div className="modes-grid">{GAME_MODES.map(mode => <ModeCard mode={mode} key={mode.id}/>)}</div>
        </div>
      </section>

      <section className="section process-section" id="how-it-works"><div className="wrap">
        <div className="section-toprow"><span className="section-index">// 02 — HOW IT WORKS</span><span className="section-line"/><span className="section-meta">THE LOOP</span></div>
        <div className="section-heading process-heading"><div><span className="section-eyebrow"><span className="eyebrow-square"/> HOW YOU PLAY</span><h2>SIMPLE LOOP.<br/><span className="heading-accent">REAL GROWTH.</span></h2></div></div>
        <div className="steps-grid">{HOW_IT_WORKS.map(step => <div className="step" key={step.number}><div className="step-top"><span>{step.number}</span><Icon name={step.icon} size={25}/></div><h3>{step.title}</h3><p>{step.body}</p></div>)}</div>
      </div></section>

      <section className="section adapt-section" id="adaptive"><div className="wrap adaptive-grid"><div className="adaptive-copy"><span className="section-eyebrow"><span className="eyebrow-square"/> THE SECRET SAUCE</span><h2>WHAT IF HARD<br/><span className="heading-accent">MEANT HARD</span><br/>TO YOU?</h2><p>Gemini generates the questions. Our team defines the difficulty. Players show us how hard each problem really is. Your next challenge gets smarter as you improve.</p><div className="accuracy-note"><Icon name="shield" size={19}/><span>Human-calibrated difficulty, not automatic model retraining.</span></div></div><div className="difficulty-diagram"><div className="diagram-heading"><Icon name="sliders" size={18}/> ADAPTIVE DIFFICULTY ENGINE <span>v0.1</span></div><div className="diagram-rows"><div className="diagram-row"><span className="diagram-step">01</span><div><strong>GEMINI GENERATES</strong><small>New practice problems</small></div><span className="diagram-tag">AI</span></div><div className="diagram-connector">↓</div><div className="diagram-row"><span className="diagram-step">02</span><div><strong>HUMANS CALIBRATE</strong><small>Easy / Medium / Hard</small></div><span className="diagram-tag orange-tag">TEAM</span></div><div className="diagram-connector">↓</div><div className="diagram-row"><span className="diagram-step">03</span><div><strong>PLAYERS IMPROVE</strong><small>Practice + feedback</small></div><span className="diagram-tag">DATA</span></div></div><div className="diagram-end"><span className="live-light"/> NEXT CHALLENGE ADAPTS TO YOU</div></div></div></section>

      <section className="bottom-cta-section"><div className="wrap"><div className="bottom-cta"><div className="cta-static">404<span>_</span></div><div className="cta-content"><span className="section-eyebrow"><span className="eyebrow-square"/> THE PROTOCOL IS READY</span><h2>READY TO<br/><span>BREAK THE LOOP?</span></h2><p>Choose your mode. Write your code. Find out what you're capable of.</p><div className="cta-actions"><Link to="/problems" className="button button-primary">ENTER PvP ARENA <Icon name="arrowUp" size={17}/></Link><Link to="/ai-challenge" className="button button-outline">SOLO AI TRAINING <Icon name="arrow" size={17}/></Link></div></div></div></div></section>
    </main>
  </>;
}
