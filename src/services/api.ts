import axios from 'axios'
import { config, endpoints } from '@/lib/config'
import type { 
  ApiConfig, 
  CreateConversationRequest, 
  CreateConversationResponse 
} from '@/types'

const api = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error('❌ API Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`)
    return response
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.response?.data)
    return Promise.reject(error)
  }
)

export const apiService = {
  // Health check
  async checkHealth(): Promise<string> {
    const response = await api.get(endpoints.health)
    return response.data
  },

  // Get configuration
  async getConfig(): Promise<ApiConfig> {
    const response = await api.get(endpoints.config)
    return response.data
  },

  // Create conversation
  async createConversation(data: CreateConversationRequest): Promise<CreateConversationResponse> {
    const response = await api.post(endpoints.conversations, data)
    return response.data
  },

  // Generic GET request
  async get<T>(url: string): Promise<T> {
    const response = await api.get(url)
    return response.data
  },

  // Generic POST request
  async post<T>(url: string, data?: unknown): Promise<T> {
    const response = await api.post(url, data)
    return response.data
  },

  // Generic PUT request
  async put<T>(url: string, data?: unknown): Promise<T> {
    const response = await api.put(url, data)
    return response.data
  },

  // Generic DELETE request
  async delete<T>(url: string): Promise<T> {
    const response = await api.delete(url)
    return response.data
  },
}

export default api