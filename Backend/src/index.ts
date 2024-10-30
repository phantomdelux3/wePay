import { Hono } from 'hono';
import Route from './Routes/Routes';
import { cors } from 'hono/cors'


const app = new Hono();
app.use('*', cors());
app.route('/api/v1' , Route);


export default app;
