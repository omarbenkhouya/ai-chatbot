/**
 * Model Service
 * 
 * Central service that manages AI model interactions.
 * Automatically selects the appropriate AI provider (Gemini or OpenRouter)
 * based on the AI_PROVIDER environment variable.
 * 
 * Handles:
 * - Provider selection and initialization
 * - Message processing and validation
 * - Conversation history management
 */

import { ExternalModelClient } from '../models/externalModelClient';
import { GoogleModelClient } from '../models/googleModelClient';
import { config } from '../config';

type ModelClient = ExternalModelClient | GoogleModelClient;

export class ModelService {
    private modelClient: ModelClient;

    /**
     * Initialize the model service with the appropriate AI provider
     * @param client - Optional client for testing purposes
     */
    constructor(client?: ModelClient) {
        if (client) {
            this.modelClient = client;
        } else {
            // Auto-select based on AI_PROVIDER env variable
            if (config.provider === 'gemini') {
                console.log('[Model Service] Using Google Gemini provider');
                this.modelClient = new GoogleModelClient();
            } else {
                console.log('[Model Service] Using OpenRouter provider');
                this.modelClient = new ExternalModelClient();
            }
        }
    }

    /**
     * Send user input to the AI model and get a response
     * @param input - Processed user message
     * @returns AI-generated response
     */
    async fetchResponse(input: string): Promise<string> {
        const response = await this.modelClient.sendInput(input);
        return response;
    }

    /**
     * Validate and clean user input
     * @param input - Raw user input
     * @returns Trimmed and validated input string
     */
    processInput(input: string): string {
        return String(input ?? '').trim();
    }

    /**
     * Clear the conversation history for the current session
     */
    clearHistory(): void {
        this.modelClient.clearHistory();
    }
}