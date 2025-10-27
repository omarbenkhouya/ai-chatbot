export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface User {
    id: string;
    name: string;
    preferences: Record<string, any>;
}