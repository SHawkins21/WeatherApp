'use server'

import prisma from "./lib"

const GetCities = async () => {
    const locations = await prisma.location.findMany({
        select: {
            id: true,
            city: true,
            country: true
        }
    })
}

export default GetCities