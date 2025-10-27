import axios from 'axios';
import { config } from '../config';

export type ModelResponse = {
    response: string;
    model?: string;
};

export class ExternalModelClient {
    private apiKey: string | undefined;
    private modelName: string;
    private conversationHistory: Array<{role: string, content: string}> = [];

    constructor() {
        this.apiKey = config.apiKey;
        this.modelName = config.modelEndpoint;
    }

    async sendInput(input: string): Promise<string> {
        // Add user message to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: input
        });

        // Keep only last 10 messages (5 exchanges) to avoid token limits
        if (this.conversationHistory.length > 10) {
            this.conversationHistory = this.conversationHistory.slice(-10);
        }

        // Try OpenRouter API
        if (this.apiKey) {
            try {
                const url = 'https://openrouter.ai/api/v1/chat/completions';
                
                console.log('[Model Client] Trying OpenRouter API with model:', this.modelName);
                console.log('[Model Client] Conversation history length:', this.conversationHistory.length);
                
                const response = await axios.post(
                    url,
                    {
                        model: this.modelName,
                        messages: this.conversationHistory
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${this.apiKey}`,
                            'Content-Type': 'application/json',
                            'HTTP-Referer': 'http://localhost:3000',
                            'X-Title': 'ChatBot App'
                        },
                        timeout: 30000,
                    }
                );

                if (response.data?.choices?.[0]?.message?.content) {
                    const text = response.data.choices[0].message.content.trim();
                    
                    // Add assistant response to conversation history
                    this.conversationHistory.push({
                        role: 'assistant',
                        content: text
                    });
                    
                    console.log('[Model Client] ✅ OpenRouter API success');
                    return text;
                }
            } catch (error: any) {
                const status = error.response?.status;
                const errorMsg = error.response?.data?.error?.message || error.message;
                
                if (status === 429) {
                    console.log(`[Model Client] ⚠️  Rate limited (429). Please wait a moment before sending another message.`);
                } else {
                    console.log(`[Model Client] ⚠️  OpenRouter API failed (${status || 'N/A'}): ${errorMsg}`);
                }
                
                console.log('[Model Client] Using smart fallback');
                
                // Remove the failed user message from history
                this.conversationHistory.pop();
            }
        }

        // Smart fallback responses - works without any API!
        return this.generateSmartResponse(input);
    }

    private generateSmartResponse(input: string): string {
        const lowerInput = input.toLowerCase().trim();
        
        // Greetings
        if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/.test(lowerInput)) {
            const greetings = [
                "Hello! I'm your AI assistant. How can I help you today?",
                "Hi there! What can I do for you?",
                "Hey! I'm here to help. What's on your mind?",
                "Hello! Feel free to ask me anything!",
            ];
            return greetings[Math.floor(Math.random() * greetings.length)];
        }

        // How are you
        if (/how are you|how're you|how r u/.test(lowerInput)) {
            return "I'm functioning well, thank you for asking! I'm here to assist you. What would you like to know?";
        }

        // What are you / who are you
        if (/what are you|who are you|what is this|tell me about yourself/.test(lowerInput)) {
            return "I'm an AI chatbot assistant powered by Node.js and TypeScript. I'm here to help answer your questions and have conversations with you!";
        }

        // Questions about AI
        if (/what is (ai|artificial intelligence)|explain ai|tell me about ai/.test(lowerInput)) {
            return "Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence, such as learning, problem-solving, and understanding language. Modern AI includes machine learning, neural networks, and natural language processing.";
        }

        // Time-related
        if (/what time|current time|time is it/.test(lowerInput)) {
            return `The current time is ${new Date().toLocaleTimeString()}. How else can I help you?`;
        }

        // Date-related
        if (/what date|today's date|current date|what day/.test(lowerInput)) {
            return `Today is ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. What else would you like to know?`;
        }

        // Help request
        if (/help|what can you do|your capabilities/.test(lowerInput)) {
            return "I can chat with you, answer questions, provide information, and have conversations! Try asking me about:\n- General knowledge topics\n- Time and date\n- AI and technology\n- Or just chat with me!";
        }

        // Thank you
        if (/thank you|thanks|thx|appreciate/.test(lowerInput)) {
            return "You're welcome! Is there anything else I can help you with?";
        }

        // Goodbye
        if (/bye|goodbye|see you|exit|quit/.test(lowerInput)) {
            return "Goodbye! Feel free to come back anytime you need assistance!";
        }

        // Jokes
        if (/joke|funny|make me laugh/.test(lowerInput)) {
            const jokes = [
                "Why did the programmer quit his job? Because he didn't get arrays! 😄",
                "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
                "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
                "Why did the JavaScript developer wear glasses? Because they couldn't C#! 👓",
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }

        // Default intelligent response
        const responses = [
            `That's an interesting question about "${input}". While I'm currently running in demonstration mode, I'd be happy to discuss this topic further!`,
            `I understand you're asking about "${input}". Could you provide more details so I can give you a better response?`,
            `Regarding "${input}" - that's a fascinating topic! What specific aspect would you like to know more about?`,
            `I received your message about "${input}". I'm here to help! Can you elaborate on what you'd like to know?`,
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Clear conversation history (useful for starting a new conversation)
    clearHistory(): void {
        this.conversationHistory = [];
        console.log('[Model Client] Conversation history cleared');
    }

    // Get conversation history (useful for debugging)
    getHistory(): Array<{role: string, content: string}> {
        return [...this.conversationHistory];
    }
}

export default ExternalModelClient;
