export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
  type?: 'text' | 'code' | 'error' | 'success'
}

export interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
  status: 'active' | 'completed' | 'error'
}

export interface ApiConfig {
  APP_MODE: string
  GITHUB_CLIENT_ID: string
  POSTHOG_CLIENT_KEY: string
  FEATURE_FLAGS: {
    ENABLE_BILLING: boolean
    HIDE_LLM_SETTINGS: boolean
  }
}

export interface CreateConversationRequest {
  initial_user_msg: string
}

export interface CreateConversationResponse {
  conversation_id: string
  status: string
  message: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface AgentStatus {
  status: 'idle' | 'thinking' | 'executing' | 'error'
  currentTask?: string
  progress?: number
}