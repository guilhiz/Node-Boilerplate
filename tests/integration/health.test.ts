import supertest from 'supertest';
import app from '../../src/app';

const server = supertest(app);

describe('GET /health', () => {
  it('should respond with status 200', async () => {
    const response = await server.get('/health');

    expect(response.status).toBe(200);
  });
});
