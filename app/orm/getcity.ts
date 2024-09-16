'use server'

import prisma from "../lib/prisma";

export const getFavoriteLocation = async () => {
    try{
        return await prisma.location.findMany({
            select: {
                id: true,
                city: true,
                country: true
            }
        })
    
}catch(e){
    console.log(e)

}
}
