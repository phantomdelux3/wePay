import { Hono } from 'hono';
import { PrismaClientKnownRequestError } from '@prisma/client/edge';
import {getPrisma} from '../Database/Database_connection'
import bcrypt from 'bcryptjs';
import { jwt_create } from '../Middleware/jwtAuthentication';

const Signup = new Hono();
const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';


Signup.post('/', async (c) => {
  const prisma = getPrisma(db_uri)
  const { username ,email, password , firstName , lastName , confirmPassword} = await c.req.json(); //destructures the values

  if(!username || !email || !password|| !firstName || !lastName || !confirmPassword){   //checks is the user has filled all the constraints
    return c.json({ error: 'Fill in all the values' }, 400)
  }
  if(password !== confirmPassword){
    return c.json({error: 'Password does not match!!'}, 400 )
  }
  const hashedPassword = await bcrypt.hash(password, 10);        // hashes the password to store

  try {  
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    const account = await prisma.accounts.create({
        data: {
          username : user.username,
          balance : 0,      
        }
    })
    const {password , ...filteruser} = user
    // Generate JWT token
    const token = await jwt_create({ filteruser , account_no : account.account })
    // Set the token as a cookie
    c.res.headers.set(
      'Set-Cookie', 
      `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=3600`
    );

    
    return c.json({ message: 'User created successfully',jwt: token, filteruser , account});
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // Check for unique constraint violation
      //@ts-ignore
      if (error.code === 'P2002') {
        return c.json({ error: 'Email/Username already in use' }, 400); 
      }
    }
    
    console.error(error);
    //@ts-ignore
    return c.json({ error: 'Failed to create user', details: error.message }, 500);
  }finally {
    await prisma.$disconnect();
  }
});




export default Signup;
