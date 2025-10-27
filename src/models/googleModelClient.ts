import axios from 'axios';
import { config } from '../config';

export type ModelResponse = {
    response: string;
    model?: string;
};

export class GoogleModelClient {
    private apiKey: string | undefined;
    private modelName: string;
    private conversationHistory: Array<{role: string, parts: Array<{text: string}>}> = [];

    constructor() {
        this.apiKey = config.geminiApiKey || undefined;
        this.modelName = config.geminiModel || 'gemini-pro';
    }

    async sendInput(input: string): Promise<string> {
        if (!this.apiKey) {
            throw new Error('Gemini API key is not configured. Please add GEMINI_API_KEY to your .env file.');
        }

        // Add user message to conversation history (Gemini format)
        this.conversationHistory.push({
            role: 'user',
            parts: [{text: input}]
        });

        // Keep only last 20 messages (10 exchanges) to avoid token limits
        if (this.conversationHistory.length > 20) {
            this.conversationHistory = this.conversationHistory.slice(-20);
        }

        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.modelName}:generateContent?key=${this.apiKey}`;
            
            console.log('[Gemini Client] Using model:', this.modelName);
            console.log('[Gemini Client] Conversation history length:', this.conversationHistory.length);
            
            const response = await axios.post(
                url,
                {
                    contents: this.conversationHistory,
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: config.maxTokens || 1024,
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    timeout: config.timeout || 30000
                }
            );

            console.log('[Gemini Client] API Response Status:', response.status);

            // Check if we have a valid response with content
            const candidate = response.data?.candidates?.[0];
            const content = candidate?.content;
            const textPart = content?.parts?.[0]?.text;

            if (textPart) {
                // Successfully got text response
                const text = textPart;
                
                // Add assistant response to conversation history
                this.conversationHistory.push({
                    role: 'model',
                    parts: [{text: text}]
                });

                console.log('[Gemini Client] Success! Response length:', text.length);
                return text;
            } else if (candidate?.finishReason === 'MAX_TOKENS') {
                // Response was cut off due to token limit, but we might have partial content
                console.warn('[Gemini Client] Response hit MAX_TOKENS limit');
                
                // Try to get any partial text that was generated
                if (content?.parts && content.parts.length > 0) {
                    const partialTexts = content.parts
                        .filter((p: any) => p.text)
                        .map((p: any) => p.text)
                        .join('');
                    
                    if (partialTexts) {
                        // Add the partial response to history
                        this.conversationHistory.push({
                            role: 'model',
                            parts: [{text: partialTexts}]
                        });
                        return partialTexts + '\n\n[Response was truncated due to length limit]';
                    }
                }
                
                throw new Error('Response exceeded token limit. Try asking a more specific question or increase MODEL_MAX_TOKENS in .env');
            } else {
                console.error('[Gemini Client] Unexpected response format:', JSON.stringify(response.data).substring(0, 500));
                throw new Error('Invalid response format from Gemini API');
            }

        } catch (error: any) {
            console.error('[Gemini Client] API Error:', error.response?.data || error.message);
            
            if (error.response?.status === 429) {
                throw new Error('Rate limited (429). Please wait a moment before sending another message.');
            } else if (error.response?.status === 401 || error.response?.status === 403) {
                throw new Error('Invalid Gemini API key. Please check your GEMINI_API_KEY in .env file.');
            } else if (error.response?.status === 400) {
                const errorMsg = error.response?.data?.error?.message || 'Bad request';
                throw new Error(`Gemini API error: ${errorMsg}`);
            }
            
            throw new Error(`Gemini API failed: ${error.message}`);
        }
    }

    clearHistory(): void {
        this.conversationHistory = [];
        console.log('[Gemini Client] Conversation history cleared');
    }

    getHistory(): Array<{role: string, parts: Array<{text: string}>}> {
        return this.conversationHistory;
    }
}
