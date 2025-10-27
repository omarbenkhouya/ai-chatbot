import request from 'supertest';
import app from '../src/app';

describe('Chat API', () => {
    it('POST /chat/send returns a response', async () => {
        const res = await request(app)
            .post('/chat/send')
            .send({ message: 'Hello, chatbot!' })
            .expect(200);
        expect(res.body).toHaveProperty('response');
        expect(res.body.response).toMatch(/mock-response|You said|Hello|response/i);
    });

    it('GET /health is ok', async () => {
        const res = await request(app).get('/health').expect(200);
        expect(res.body).toEqual({ status: 'ok' });
    });
});