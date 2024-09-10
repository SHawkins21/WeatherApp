'use server'


import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma"




export const getFavoriteLocation = async () => {
    try{
    const data =  await prisma.location.findMany({
        select:{
            city:true
        },
        orderBy:{
            id:"desc"
        },
        take:5
    });

 
    revalidatePath("/location")
    return data
    
    }catch(e){
     console.log(e);
     
    }
}