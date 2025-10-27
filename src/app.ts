/**
 * Express Application Configuration
 * 
 * This file sets up the Express application with:
 * - JSON body parsing middleware
 * - Static file serving from the public directory
 * - API routes for chat functionality
 * - Health check endpoint
 * 
 * Routes:
 * - GET  /          - Serves the main chat interface
 * - GET  /health    - Health check endpoint
 * - POST /chat/send - Send a message to the AI
 * - POST /chat/clear - Clear conversation history
 */

import express from 'express';
import path from 'path';
import { ChatController } from './controllers/chatController';

const app = express();
const chatController = new ChatController();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

// API Routes
app.get('/health', chatController.healthHandler.bind(chatController));
app.post('/chat/send', chatController.sendMessageHandler.bind(chatController));
app.post('/chat/clear', chatController.clearHistoryHandler.bind(chatController));

// Root route serves the HTML interface
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
