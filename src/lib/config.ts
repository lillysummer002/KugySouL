export const config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://minatoz997-backend66.hf.space',
  wsUrl: process.env.NEXT_PUBLIC_WS_URL || 'wss://minatoz997-backend66.hf.space',
  appName: 'OpenHands AI',
  appDescription: 'Powerful AI agent that can execute code, browse the web, and interact with various tools',
  maxMessageLength: 4000,
  maxConversations: 50,
  features: {
    codeExecution: true,
    webBrowsing: true,
    fileManagement: true,
    multipleAgents: true,
    realTimeChat: true,
  }
} as const

export const endpoints = {
  health: '/health',
  config: '/api/options/config',
  conversations: '/api/conversations',
  messages: '/api/messages',
} as const