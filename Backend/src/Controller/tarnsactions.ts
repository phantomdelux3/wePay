//all transaction are held here 
import { Hono } from "hono";
import {getPrisma} from '../Database/Database_connection'
import jwtVerification from "../Middleware/jwtAuthentication"

const transaction = new Hono();
const db_uri = 'prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWY3NTNmNWEtMzhjMC00MmJlLWFiMDUtNTNkODg5MzVmNGIxIiwidGVuYW50X2lkIjoiMTU0N2I0YjlhMzNjNjNhNTRjNGFjNDk4ODhjMmFhMjEyZDkyNWE4YzcyOWViMzdiOTY3OTViYzY4YWI5NjJiOCIsImludGVybmFsX3NlY3JldCI6IjA2ZTdkMDNmLWRmZTctNDBiYi1iNzkyLTRhY2FkYjA5MDk2NCJ9.3c3tFYT_co98p0IPceNGfPUl1JBg3DyPmzd0N8YbAiY';
const prisma = getPrisma(db_uri);

transaction.post('/',jwtVerification,async (c)=>{
    const {to_user , from_user , amount } = await c.req.json()
    console.log(to_user, from_user , amount)
    if(!to_user && !from_user && amount ){
        return c.json({ error: 'Invalid Fileds' }, 400); 
    } 

    const to_user_data = await prisma.user.findUnique({
        where : {
            username : to_user,

        },
        select : {
            firstName : true,
            lastName : true,
            email : true,
            username : true,
            Accounts: {
                select: {
                    account: true,
                    balance: true,
                },
        }}
    })

    const from_user_data = await prisma.user.findUnique({
        where : {
            username : from_user,

        },
        select : {
            firstName : true,
            lastName : true,
            email : true,
            username : true,
            Accounts: {
                select: {
                    account: true,
                    balance: true,
                },
        }}
    })
    console.log(from_user_data?.Accounts?.balance)
    if(!to_user_data && !from_user_data){
        return c.json({error : " User not found "}, 404)
    }
    //@ts-ignore
    if (from_user_data.Accounts?.balance <= amount ){
        return c.json({errror : 'Insufficient Balance'} , 501)
    }


    try {
        const transaction = await prisma.$transaction(async (prisma)=> {
        await prisma.accounts.update({
            where: { username: from_user },
            data: { balance: from_user_data?.Accounts?.balance - amount },
        });
        await prisma.accounts.update({
            where: { username: to_user },
            data: { balance: to_user_data?.Accounts?.balance + amount },
        });
        const number = Math.floor(Math.random() * 1000000)
        await prisma.transactions.create({
            //@ts-ignore
            data: {
                user : { connect: { username: to_user } } ,
                //@ts-ignore
                account : to_user_data?.Accounts?.account,
                type : "CREDIT",
                //@ts-ignore
                transactionID : number,
                amount : amount,
                from : from_user ,
                to : to_user
            }
        })

        await prisma.transactions.create({
            //@ts-ignore
            data: {
                user: { connect: { username: from_user } },
                //@ts-ignore
                account : from_user_data.Accounts.account,
                type : "DEBIT",
                //@ts-ignore
                transactionID : number,
                from : from_user ,
                amount : 10,
                to : to_user
            }
        })



    } )

    return c.json({message : 'transaction succesfull'})
    } catch (error) {
        return c.json({error : 'transaction error' , detail : error} , 501)
    }

    

})

export default transaction