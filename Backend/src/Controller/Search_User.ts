import {getPrisma} from '../Database/Database_connection'
import { Hono } from "hono";
import jwtVerification from "../Middleware/jwtAuthentication"

const Search_User = new Hono();
const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';
const prisma = getPrisma(db_uri);

Search_User.get('/' ,jwtVerification, async (c,next)=>{                    // searches the user for adding friend or sending money 
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
    return c.json({message:'found user', userEmail : gotUser.email , userUsername : gotUser.username })
})

export default Search_User;