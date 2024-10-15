import { Hono } from 'hono';

const Logout = new Hono();

Logout.post('/', async (c) => {
  c.res.headers.set('Set-Cookie', 'token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure'); //making token empty

  return c.json({ message: 'Logged out successfully' });
});

export default Logout;