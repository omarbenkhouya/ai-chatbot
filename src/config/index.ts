/**
 * Application Configuration
 * 
 * Loads and exports configuration from environment variables.
 * Uses dotenv to load variables from .env file.
 * 
 * Configuration includes:
 * - AI provider selection (Google Gemini or OpenRouter)
 * - API keys for each provider
 * - Model settings (timeout, max tokens, temperature)
 * - Server settings (port, logging)
 */

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export type AppConfig = {
    provider: 'openrouter' | 'gemini';
    apiKey: string;
    modelEndpoint: string;
    geminiApiKey: string;
    geminiModel: string;
    timeout: number;
    maxTokens: number;
    temperature: number;
    port: number;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
};

// Export configuration object with defaults
export const config: AppConfig = {
    provider: (process.env.AI_PROVIDER as 'openrouter' | 'gemini') || 'gemini',
    apiKey: process.env.OPENROUTER_API_KEY || process.env.API_KEY || '',
    modelEndpoint: process.env.OPENROUTER_MODEL || process.env.MODEL_ENDPOINT || 'deepseek/deepseek-chat-v3.1:free',
    geminiApiKey: process.env.GEMINI_API_KEY || '',
    geminiModel: process.env.GEMINI_MODEL || 'gemini-2.0-flash-exp',
    timeout: Number(process.env.MODEL_TIMEOUT_MS || 30000),
    maxTokens: Number(process.env.MODEL_MAX_TOKENS || 1024),
    temperature: Number(process.env.MODEL_TEMPERATURE || 0.7),
    port: Number(process.env.PORT || 3000),
    logLevel: (process.env.LOG_LEVEL as AppConfig['logLevel']) || 'info',
};