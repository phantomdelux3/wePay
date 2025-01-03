import {getPrisma} from '../Database/Database_connection'
import { Hono } from "hono";
import jwtVerifyMiddleware from '../Middleware/jwtAuthentication';

const User = new Hono();
const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';
const prisma = getPrisma(db_uri);

User.get('/' ,jwtVerifyMiddleware, async (c)=>{                    // searches the user info
    const {usertoSearch } = await c.req.json();
    if(!usertoSearch){return c.json({error:'Username not specified'},400)}
    const gotUser = await prisma.user.findUnique({
        where:{
            username : usertoSearch,
        }
    })
    if(!gotUser){
        return c.json({message:'User not found'})
    }
    const { password, ...userInfo } = gotUser;       // returns everything except sensitiveinfo
    return c.json({message:'found user', userEmail : gotUser.email , userUsername : gotUser.username })
})

User.put('/avatar' , jwtVerifyMiddleware , async (c)=>{
    const {avatar} =  await c.req.json()
    const avatar_update  = await prisma.user.update({
        where: { username: c.req.decoded_token.username },
        data: { avatar : avatar },
    });
})
export default User;