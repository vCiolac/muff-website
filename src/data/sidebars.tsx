export const buttonOptions = [
  { id: 'inventory', label: 'Inventory' },
  { id: 'skills', label: 'Skills' },
  { id: 'settings', label: 'Settings' },
] as const;

export const contentData = {
  inventory: <div>Texto para botão 1, no caso - Inventory</div>,
  skills: <div>Texto ou Imagem para botão 2, no caso - para Skills</div>,
  settings: <div>Texto ou video para botão 3, no caso -  Settings</div>,
} as const;