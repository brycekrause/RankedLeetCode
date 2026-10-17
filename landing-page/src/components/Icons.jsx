import React from 'react';

const paths = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  arrowUp: <><path d="M7 17 17 7M7 7h10v10"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  bolt: <path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>,
  terminal: <><rect width="19" height="15" x="2.5" y="4.5" rx="3"/><path d="m7 10 3 2.5-3 2.5m6.5 0h3.5"/></>,
  swords: <><path d="M14.5 17.5 4 7V3H2v4l10.5 10.5"/><path d="m2 21 6-6m-4 0 5 5M9.5 6.5 13 3h7v7l-6.5 6.5M19 21l-6-6"/></>,
  brain: <><path d="M12 18V5a3 3 0 0 0-6 0 4 4 0 0 0-2 7 4 4 0 0 0 1 7 3 3 0 0 0 6 0"/><path d="M12 18V5a3 3 0 0 1 6 0 4 4 0 0 1 2 7 4 4 0 0 1-1 7 3 3 0 0 1-6 0M7 10c1 0 3 0 3-3M17 10c-1 0-3 0-3-3M7 16c1-1 2-1 3-1m7 1c-1-1-2-1-3-1"/></>,
  sliders: <><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="currentColor" stroke="none"/><circle cx="16" cy="17" r="2" fill="currentColor" stroke="none"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  play: <path d="m8 5 11 7-11 7V5Z"/>,
  trophy: <><path d="M8 21h8M12 17v4M7 3h10v6a5 5 0 0 1-10 0V3ZM7 5H4v4a4 4 0 0 0 4 4m9-8h3v4a4 4 0 0 1-4 4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  code: <><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 22"/></>,
  sparkle: <><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"/><path d="m19 18 .6 1.5L21 20l-1.4.5L19 22l-.6-1.5L17 20l1.4-.5L19 18Z"/></>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2"/><path d="M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5v1"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  x: <path d="M5 5l14 14M19 5 5 19"/>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
  shield: <><path d="M12 2 4 5v6c0 5 3 9 8 11 5-2 8-6 8-11V5L12 2Z"/><path d="m9 12 2 2 4-4"/></>,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>
      {paths[name] || paths.code}
    </svg>
  );
}
