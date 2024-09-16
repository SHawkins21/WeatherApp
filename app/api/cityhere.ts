import { headers } from "next/headers";
import { cache } from "react";

// const locationKey = process.env.NEXT_LOCATION_API_KEY


// export const getGeolocationCity = async (city: any) => {
//   navigator.geolocation.getCurrentPosition((position) => {
//  const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;
// try{
//     const geocodingUrl = await fetch (`https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${latitude},${longitude},250&mode=retrieveAddresses&maxResults=1&gen=9&apiKey=${locationKey}`{
//         method:"GET",
//         headers:{
//             'Content-Type':'application/json',
//             "AccessControlAllowOrigin": "http://localhost:3000"
//         },
//         cache: 'no-cache'
//     })

//         .then((geodata)) => geocodingUrl.json(); 
//         console.log(geodata); 
//         .then((data) => {
//             const city = data.results[0].address_components.find((component: { types: string | string[]; }) =>
//               component.types.includes("locality")
//             ).long_name;

        
//         })catch(error){
//         console.error('Error fetching city:',error)
//     }

   
// }

    
