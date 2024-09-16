'use server'
import z from "zod";
import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { get } from "http";
const locationSchema = z.object({
 
    location: z.string().trim()
})


// const locationSchema = z.object({
 
//     city: z.string().nullable(),
//     zipCode: z.string().nullable(),
//     latittude: z.string().nullable(),
//     longitude: z.string().nullable(),
// })

export const setFavoriteLocation = async (city: string) => {
    // const form = Object.fromEntries(formData.entries());
    // const location = locationSchema.parse(form);
    console.log(city)
    try{
        const save = await prisma.location.create({
            data:{
                city
            }
        })
    }catch(e){
        console.log(e)
        revalidatePath('/api/location')
    }
}
