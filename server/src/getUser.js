import pkg from '@prisma/client';
import { response } from 'express';
const { PrismaClient } = pkg;

export default async function getUser(data) {
    // console.log('data : ' + data)
    const login = data.toLowerCase()
    const prisma = new PrismaClient()
    try {  
    const res = await prisma.user.findUnique({
            where: {
              login: String(login),
            }
          })
          return res

    
        // console.log("results findUnique : ")
        // console.log(res)

        
    } 
    catch(e){
        console.log(e)
    }
}


