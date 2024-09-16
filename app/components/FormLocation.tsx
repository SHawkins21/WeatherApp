import React, { use, useState } from 'react'
import { Weather } from '../constance'

const FormLocation = () => {

    const [location, setLocation] = useState<string>('')
    const [weather, SetCurrentWeather] = useState<Weather | null>({
        location:{
            name:''
        },
        current:{
            temperatureApparentAvg:0,
            condition:{
                text:''
            }
        },
        forecast:{
            forecastday:[{
                date:'',
                day:{
                    maxtemp_f:0,
                    mintemp_f:0,
                    condition:{
                        text:'',
                        code:0
                    }
                }
            }]
        }
    })



  return (
    <div>FormLocation</div>
  )
}

export default FormLocation