/**
 * Chat Controller
 * 
 * Handles HTTP requests for chat functionality.
 * Acts as the bridge between Express routes and the ModelService.
 * 
 * Endpoints handled:
 * - sendMessageHandler: Process user messages and return AI responses
 * - healthHandler: Check if the server is running
 * - clearHistoryHandler: Clear conversation history
 */

import type { Request, Response } from 'express';
import { ModelService } from '../services/modelService';
import { Logger } from '../utils/logger';

export class ChatController {
    private readonly logger = new Logger();

    constructor(private readonly modelService: ModelService = new ModelService()) {}

    /**
     * Core message processing logic
     * @param userMessage - The user's input message
     * @returns AI-generated response
     */
    async sendMessage(userMessage: string): Promise<string> {
        const processedInput = this.modelService.processInput(userMessage);
        const response = await this.modelService.fetchResponse(processedInput);
        return response;
    }

    /**
     * HTTP handler for sending messages
     * POST /chat/send
     */
    async sendMessageHandler(req: Request, res: Response): Promise<void> {
        const userMessage = String(req.body?.message || '');
        if (!userMessage) {
            res.status(400).json({ error: 'message is required' });
            return;
        }
        try {
            this.logger.debug(`Incoming message: ${userMessage}`);
            const response = await this.sendMessage(userMessage);
            res.status(200).json({ response });
        } catch (error) {
            this.logger.error('Failed to process message', error);
            res.status(500).json({ error: 'An error occurred while processing your message.' });
        }
    }

    /**
     * Health check endpoint
     * GET /health
     */
    async healthHandler(_req: Request, res: Response): Promise<void> {
        res.status(200).json({ status: 'ok' });
    }

    /**
     * Clear conversation history
     * POST /chat/clear
     */
    async clearHistoryHandler(_req: Request, res: Response): Promise<void> {
        try {
            this.modelService.clearHistory();
            this.logger.debug('Conversation history cleared');
            res.status(200).json({ status: 'cleared' });
        } catch (error) {
            this.logger.error('Failed to clear history', error);
            res.status(500).json({ error: 'Failed to clear conversation history' });
        }
    }
}

export default ChatController;