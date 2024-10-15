import { Hono } from "hono";
import {getPrisma} from '../Database/Database_connection'
import bcrypt from 'bcryptjs';
import { jwt_create } from "../Middleware/jwtAuthentication";

const Signin = new Hono();
const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';
const prisma = getPrisma(db_uri)

Signin.post('/' , async(c)=>{
    const {username, email , password } = await c.req.json();
    if ((!username && !email) || !password) {     //checks user inputs
        return c.json({ error: 'Provide either username or email, and password is required' }, 400);
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
              OR: [
                { email: email },
                { username: username },
              ],
            },
        });
        if(!user){
            return c.json({error: 'User not found.' ,} , 404 )
        } 

        //password checking
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){return c.json({error:'Password is incorrect'},401)} 
    
        // Generate JWT token
        const token = await jwt_create({ id: user.id, email: user.email,})
    
        // Set the token as a cookie
        c.res.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=3600;`);
        
        
        return c.json({Message: 'logged in'} , 200)
            
    } catch (error) {
        return c.json({error:'error logging in.' , detail : error},500)
    }
      
})

export default Signin;