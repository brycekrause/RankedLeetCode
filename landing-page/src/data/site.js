export const GAME_MODES = [
  {
    id: 'pvp',
    tag: '01 // MULTIPLAYER',
    name: 'PROBLEMS',
    label: 'PLAYER VS PLAYER',
    description: 'Same problem. Same clock. Two minds. Challenge another player in real time and race for the first accepted solution.',
    features: ['Live 1v1 coding rooms', 'Shared problems + timer', 'Code judged against test cases'],
    path: '/problems',
    theme: 'orange',
    button: 'ENTER THE ARENA',
    icon: 'swords',
  },
  {
    id: 'solo',
    tag: '02 // SOLO MODE',
    name: 'AI CHALLENGE',
    label: 'YOU VS YOUR POTENTIAL',
    description: 'Gemini creates coding problems to match your level. Learn at your own pace with personal hints from BYTE.',
    features: ['Gemini-generated challenges', 'Difficulty calibrated by humans', 'AI hints that teach, not spoil'],
    path: '/ai-challenge',
    theme: 'lime',
    button: 'TRAIN WITH GEMINI',
    icon: 'brain',
  },
];

export const HOW_IT_WORKS = [
  { number: '01', title: 'PICK YOUR PATH', body: 'Compete against a real player or start a solo AI training session.', icon: 'target' },
  { number: '02', title: 'WRITE REAL CODE', body: 'Use an in-browser editor. Run your solution and see exactly what passes.', icon: 'code' },
  { number: '03', title: 'GET SHARPER', body: 'Get feedback, refine your skills, and climb toward harder challenges.', icon: 'bolt' },
];
