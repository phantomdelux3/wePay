//all transaction are held here 
import { Hono } from "hono";
const transaction = new Hono();
import {getPrisma} from '../Database/Database_connection'

const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';
const prisma = getPrisma(db_uri);

transaction.post('/',async (c)=>{
    const {to_user , from_user , amount } = await c.req.json()
    if(!to_user || !from_user || amount ){
        return c.json({ error: 'Invalid Fileds' }, 400); 
    } 
    
})