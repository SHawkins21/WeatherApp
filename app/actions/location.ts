'use server'
import z from "zod";
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
    }catch(e){
        console.log(e)
    }
}