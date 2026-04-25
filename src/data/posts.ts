export type Tool = {
  id: string;
  name: string;
  icon: string;
};

export type User = {
  handle: string;
  name: string;
  bio: string;
  initials: string;
};

export type Try = {
  author: string;
  text: string;
  result: string | null;
  date: string;
};

export type Post = {
  id: number;
  author: string;
  tools: string[];
  tag: string;
  title: string;
  excerpt: string;
  content: string;
  tries: Try[];
  date: string;
};

export const tools: Record<string, Tool> = {
  claude: { id: 'claude', name: 'Claude', icon: '🤖' },
  gpt: { id: 'gpt', name: 'GPT-4', icon: '💬' },
  gemini: { id: 'gemini', name: 'Gemini', icon: '✨' },
  midjourney: { id: 'midjourney', name: 'Midjourney', icon: '🎨' },
  elevenlabs: { id: 'elevenlabs', name: 'ElevenLabs', icon: '🗣️' },
  suno: { id: 'suno', name: 'Suno', icon: '🎵' },
  notebooklm: { id: 'notebooklm', name: 'NotebookLM', icon: '📚' },
  whisper: { id: 'whisper', name: 'Whisper', icon: '🎙️' },
  cursor: { id: 'cursor', name: 'Cursor', icon: '⚡' },
  runway: { id: 'runway', name: 'Runway', icon: '🎬' },
};

export const users: Record<string, User> = {
  mariana: { handle: '@mariana', name: 'Mariana Silva', bio: 'designer experimentando com fluxos de IA generativa.', initials: 'MS' },
  pedro: { handle: '@pedro', name: 'Pedro Castro', bio: 'dev backend, hobby de prompt engineering.', initials: 'PC' },
  lia: { handle: '@lia', name: 'Lia Tanaka', bio: 'jornalista virando product. testando todas as ferramentas.', initials: 'LT' },
  rafa: { handle: '@rafa', name: 'Rafael Mendes', bio: 'músico, brincando com áudio generativo e clonagem de voz.', initials: 'RM' },
  bia: { handle: '@bia', name: 'Bia Costa', bio: 'estudante de letras. uso IA pra organizar leituras.', initials: 'BC' },
};

export const posts: Post[] = [
  {
    id: 1,
    author: 'mariana',
    tools: ['whisper', 'claude'],
    tag: 'Workflow',
    title: 'Montei um pipeline que transcreve minhas reuniões e já gera o follow-up',
    excerpt: 'Combinação de Whisper + Claude num script Python. Toda terça eu tenho 3h livres que antes eram pra resumir reuniões.',
    content: 'Pipeline com Whisper + Claude...',
    tries: [
      { author: 'pedro', text: 'Adaptei pra Gemini, mesmo prompt. Funciona idêntico, custa quase zero.', result: 'Salvou ~2h/semana em standup notes', date: 'há 2h' },
      { author: 'lia', text: 'Usei pra entrevistas de jornalismo. Adicionei "separe falas dos entrevistados" no prompt.', result: 'Transcrição já vem etiquetada por pessoa', date: 'há 1h' },
      { author: 'rafa', text: 'Tentei mas falhou no áudio com música ao fundo. Whisper se perde.', result: null, date: 'há 30min' },
    ],
    date: 'há 4h',
  },
  {
    id: 2,
    author: 'rafa',
    tools: ['elevenlabs'],
    tag: 'Áudio',
    title: 'Cloneei a voz da minha avó pra ela narrar livros pros meus filhos',
    excerpt: 'Ela mora em outro estado e quase não vê os netos. Com 5 minutos de áudio e ElevenLabs, ela "lê" um livro novo toda semana.',
    content: 'Voz clonada da avó...',
    tries: [
      { author: 'bia', text: 'Fiz com gravação antiga do meu avô que faleceu. Pedi pra "ele" narrar memórias que minha avó escreveu.', result: 'Áudio de 12min que virou presente de aniversário da vó', date: 'há 3h' },
      { author: 'mariana', text: 'Tentei com minha mãe pra mensagens animadas em aniversário.', result: null, date: 'há 2h' },
    ],
    date: 'há 8h',
  },
  {
    id: 3,
    author: 'pedro',
    tools: ['claude'],
    tag: 'Prompt',
    title: 'O prompt que finalmente fez o Claude parar de me bajular',
    excerpt: 'Cansei de "ótima pergunta!" e respostas que concordam com tudo. Esse system prompt resolve.',
    content: 'Prompt anti-bajulação...',
    tries: [
      { author: 'mariana', text: 'Salvei como system prompt padrão. Diferença é absurda em revisão de copy.', result: null, date: 'há 5h' },
      { author: 'rafa', text: 'Adicionei "me trate como par técnico, não como cliente". Funcionou ainda melhor.', result: 'Versão minha: pastebin.com/xyz', date: 'há 3h' },
      { author: 'lia', text: 'Testei em GPT-4 também. Funciona igual.', result: null, date: 'há 1h' },
    ],
    date: 'há 1 dia',
  },
  {
    id: 4,
    author: 'lia',
    tools: ['claude'],
    tag: 'Workflow',
    title: 'Como uso IA pra ler 30 papers por semana sem ler 30 papers',
    excerpt: 'Sou jornalista de tech e preciso acompanhar pesquisa. Montei um workflow com Zotero + Claude que filtra e me entrega só o que interessa.',
    content: 'Workflow de papers...',
    tries: [
      { author: 'pedro', text: 'Inveja. Adaptei pra issues do GitHub no meu repo. Mesma técnica de few-shot funcionou.', result: '~150 issues filtradas/semana, leio 10', date: 'há 6h' },
      { author: 'bia', text: 'Tô usando pra TCC, classifica leituras de teoria literária. Vocabulário acadêmico confunde.', result: null, date: 'há 4h' },
    ],
    date: 'há 1 dia',
  },
  {
    id: 5,
    author: 'bia',
    tools: ['notebooklm'],
    tag: 'Estudo',
    title: 'Transformei meu sebo de PDFs num "professor particular" que me responde no celular',
    excerpt: 'Tinha 400 PDFs de matérias da faculdade que nunca ia ler. Joguei tudo num RAG simples e agora pergunto qualquer coisa.',
    content: 'NotebookLM com PDFs...',
    tries: [
      { author: 'lia', text: 'Fiz com PDFs de pesquisa pra reportagem. Virou meu super poder em entrevistas.', result: 'Acelerei pesquisa em ~70%', date: 'há 1 dia' },
      { author: 'mariana', text: 'Subi briefings antigos de cliente. Funciona muito.', result: null, date: 'há 12h' },
    ],
    date: 'há 2 dias',
  },
];
