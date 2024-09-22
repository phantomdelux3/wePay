const jwt = require('jsonwebtoken')
const JWT_SECRET = require ('../config')

async function JWT_auth (req,res,next) {
    const auth = req.headers.authorization;
    const auth_token = auth.split(' ')[1]
    try {
        const verification = jwt.verify(auth_token, JWT_SECRET);
        
        if(!verification){
            res.status(401).json({message : "you are not authorised"})
        } 
    next()
    } catch (error) {
        return res.status(401).json({message: "you are not authorised" , error : error , auth_token :auth_token})
    }
}

// async function JWT_auth (token) {
        
//         try {
//             const verification = jwt.verify(token, JWT_SECRET);
//             console.log(verification)
//         } catch (error) {
//             return console.log ("not authorized")
//         }
//     }
// JWT_auth("qeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2dldCI6eyJVaW5mbyI6eyJmaXJzdE5hbWUiOiJMYWtzaCIsImxhc3ROYW1lIjoiS3VtYXIiLCJwaG9uZU51bWJlciI6Ijc5ODIyNTE0MzQiLCJkb2IiOiIyMDAzLTA5LTIxVDAwOjAwOjAwLjAwMFoifSwiX2lkIjoiNjZlZGRkMjQyY2I2N2E2OTU3MDEwYjdlIiwidXNlcm5hbWUiOiJsYWtzaDEyMyIsImVtYWlsIjoibGFrc2hrbWFyLjAwNUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IktLMjI1ODQxMzJra0AiLCJfX3YiOjB9LCJpYXQiOjE3MjY4NjQ3Mjh9.RJyJZ9nL-oXuzk6foIf81tecdw_kh8XA7vhSLBPXgWQ")


module.exports = JWT_auth