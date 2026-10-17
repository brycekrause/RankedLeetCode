import React, { useState } from 'react';
import Icon from './Icons.jsx';

const previews = {
  pvp: {
    file: 'duel_001.py',
    badge: 'LIVE DUEL PREVIEW',
    head: 'FIRST TO SOLVE WINS',
    task: 'Two Sum',
    difficulty: 'EASY',
    editor: [
      { n: '01', code: <><span className="syntax-pink">def</span> <span className="syntax-yellow">two_sum</span>(nums, target):</> },
      { n: '02', code: <>&nbsp;&nbsp;seen = {'{}'}</> },
      { n: '03', code: <>&nbsp;&nbsp;<span className="syntax-pink">for</span> i, num <span className="syntax-pink">in</span> <span className="syntax-yellow">enumerate</span>(nums):</> },
      { n: '04', code: <>&nbsp;&nbsp;&nbsp;&nbsp;need = target - num</> },
      { n: '05', code: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-pink">if</span> need <span className="syntax-pink">in</span> seen:</> },
      { n: '06', code: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-pink">return</span> [seen[need], i]</> },
      { n: '07', code: <>&nbsp;&nbsp;&nbsp;&nbsp;seen[num] = i</> },
    ],
    outcome: 'SAMPLE TESTS: 3 / 3 PASSED',
  },
  solo: {
    file: 'gemini_challenge.py',
    badge: 'GEMINI CHALLENGE PREVIEW',
    head: 'ONE STEP HARDER EVERY DAY',
    task: 'Palindrome Check',
    difficulty: 'EASY',
    editor: [
      { n: '01', code: <><span className="syntax-pink">def</span> <span className="syntax-yellow">is_palindrome</span>(text):</> },
      { n: '02', code: <>&nbsp;&nbsp;cleaned = text.lower()</> },
      { n: '03', code: <>&nbsp;&nbsp;cleaned = <span className="syntax-yellow">filter</span>(cleaned)</> },
      { n: '04', code: <>&nbsp;&nbsp;<span className="syntax-pink">return</span> cleaned == cleaned[::-1]</> },
      { n: '05', code: <>&nbsp;</> },
      { n: '06', code: <><span className="syntax-comment"># BYTE: Think about text normalization.</span></> },
      { n: '07', code: <><span className="syntax-comment"># Keep going — you've got this.</span></> },
    ],
    outcome: 'BYTE: HINT READY WHEN YOU NEED IT',
  },
};

export default function HeroVisual() {
  const [mode, setMode] = useState('pvp');
  const data = previews[mode];
  return (
    <div className="hero-visual" aria-label="Interactive mock preview of coding game modes">
      <div className="hero-visual-glow"/>
      <div className="editor-shell">
        <div className="editor-topline">
          <div className="window-controls"><i/><i/><i/></div>
          <div className="editor-path">~/archive/<span>{data.file}</span></div>
          <Icon name="terminal" size={17}/>
        </div>
        <div className="preview-tabs" role="tablist" aria-label="Preview game mode">
          <button type="button" role="tab" aria-selected={mode === 'pvp'} className={mode === 'pvp' ? 'preview-active' : ''} onClick={() => setMode('pvp')}><Icon name="swords" size={15}/> PvP DUEL</button>
          <button type="button" role="tab" aria-selected={mode === 'solo'} className={mode === 'solo' ? 'preview-active' : ''} onClick={() => setMode('solo')}><Icon name="brain" size={15}/> AI TRAINING</button>
        </div>
        <div className="editor-content" role="tabpanel">
          <div className="preview-topmeta"><span className="preview-live"><span className="live-light"/>{data.badge}</span><span>PYTHON 3</span></div>
          <div className="preview-title-wrap"><span className="preview-overline">CHALLENGE_001 //</span><h3>{data.task}</h3><span className="preview-difficulty">{data.difficulty}</span></div>
          <p className="preview-taskline">{data.head}</p>
          <div className="fake-editor">
            <div className="fake-editor-file"><Icon name="code" size={15}/><span>{data.file}</span><span className="file-changed">●</span></div>
            <div className="code-lines">
              {data.editor.map(line => <div className="code-line" key={line.n}><span className="line-number">{line.n}</span><code>{line.code}</code></div>)}
            </div>
          </div>
          <div className="editor-status-bar"><span><span className="status-ok"><Icon name="check" size={13}/></span>{data.outcome}</span><span>● READY</span></div>
        </div>
      </div>
      <div className={`floating-rival ${mode === 'solo' ? 'solo-float' : ''}`}>
        <span className="rival-circle"><Icon name={mode === 'pvp' ? 'users' : 'sparkle'} size={21}/></span>
        <div><span>{mode === 'pvp' ? 'OPPONENT CONNECTED' : 'BYTE AI ASSISTANT'}</span><strong>{mode === 'pvp' ? 'PLAYER_02' : 'GEMINI ONLINE'}</strong></div>
        <span className="online-signal"><span/></span>
      </div>
      <div className="floating-gain"><Icon name="bolt" size={16}/> <strong>LEVEL UP YOUR LOGIC</strong></div>
      <div className="visual-marker marker-one">+</div><div className="visual-marker marker-two">+</div>
    </div>
  );
}
