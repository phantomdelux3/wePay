import { Hono } from 'hono';
import Route from './Routes/Routes';

const app = new Hono();

app.route('/api/v1' , Route);

export default app;
