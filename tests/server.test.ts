import app from '../src'

describe('Test the application', () => {
    it('Should return 200 response', async () => {
      const res = await app.request('/')
      expect(res.status).toBe(200)
      expect(await res.json()).toEqual({
        message: 'Hello Hono on cloudflare workers!'
      })
    })
  })