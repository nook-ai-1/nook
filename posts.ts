export type Tool = {
  id: string;
  name: string;
  icon: string;
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

export type Profile = {
  id: string;
  username: string | null;
  display_name: string;
};

export type Try = {
  id: string;
  post_id: string;
  author_id: string;
  text: string;
  result: string | null;
  created_at: string;
};

export type Post = {
  id: string;
  author_id: string;
  title: string;
  excerpt: string | null;
  content: string;
  tools: string[];
  tag: string | null;
  created_at: string;
  author: Profile;
  tries_count: number;
};
