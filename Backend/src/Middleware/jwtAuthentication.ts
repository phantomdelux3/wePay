import { Context, Next } from 'hono';
import * as jwt from "jsonwebtoken";

const JWT_SECRET="dsffdjklaoicnvkabjv301oabq2091@$@#$^tsdbjkgdifnoa9er@Q#ridbskjbvn2#)Fasodvbsdbfdkffanoid_Aheongrucvn"


export function jwt_create(data :any){
    const token = jwt.sign(data , JWT_SECRET )
    return token
}

// JWT verification middleware
export default async function jwtVerifyMiddleware(c:Context , next:Next) {
    const authHeader = c.req.header('Authorization');// Expecting "Bearer <token>"
    if (!authHeader) {
      return c.json({ error: 'Authorization header missing' }, 401);
    }
  
    const token = authHeader.split(' ')[1]; // Extract the token
    if (!token) {
      return c.json({ error: 'Token missing' }, 401);
    }
  
    try {
      const verifiedToken = await jwt.verify(token, JWT_SECRET);
      if(!verifiedToken){return c.json({ error: 'Invalid token' }, 401);}  
      return next()
    } catch (error) {
      return c.json({ error: 'Authorization error' }, 403);
    }
  };



