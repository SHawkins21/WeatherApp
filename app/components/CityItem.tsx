import React from 'react'

type CityProps = {
   
    city: string,
    country: string
  
    sendCity:(id:number) => void
    
}

const CityItem = ({city, country}: CityProps) => {
  return (
    <div>
      
    <p>{city}</p>
    <p>{country}</p>
    </div>
  )
}

export default CityItem
