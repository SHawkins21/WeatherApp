// check conditions 

import { IconType } from "react-icons"
import { weatherCodesArray } from "../constance/code"

type weatherCodes = {
    code:number
    condition:string
    Icon:IconType
}

export const checkCondition = ( code:number ):weatherCodes => {

    switch (code) { 
        case weatherCodesArray[0].code: 
            return{
                code,
                condition:weatherCodesArray[0].condition, 
                Icon:weatherCodesArray[0].Icon
            }
        case weatherCodesArray[1].code: 
            return{
                code,
                condition:weatherCodesArray[1].condition, 
                Icon:weatherCodesArray[1].Icon
            }
            case weatherCodesArray[2].code: 
            return{
                code,
                condition:weatherCodesArray[2].condition, 
                Icon:weatherCodesArray[2].Icon
            }
            case weatherCodesArray[3].code: 
            return{
                code,
                condition:weatherCodesArray[3].condition, 
                Icon:weatherCodesArray[3].Icon
            }
            case weatherCodesArray[4].code: 
            return{
                code,
                condition:weatherCodesArray[4].condition, 
                Icon:weatherCodesArray[4].Icon
            }
            case weatherCodesArray[5].code: 
            return{
                code,
                condition:weatherCodesArray[5].condition, 
                Icon:weatherCodesArray[5].Icon
            }
            case weatherCodesArray[6].code: 
            return{
                code,
                condition:weatherCodesArray[6].condition, 
                Icon:weatherCodesArray[6].Icon
            }
            case weatherCodesArray[7].code: 
            return{
                code,
                condition:weatherCodesArray[7].condition, 
                Icon:weatherCodesArray[7].Icon
            }
            case weatherCodesArray[8].code: 
            return{
                code,
                condition:weatherCodesArray[8].condition, 
                Icon:weatherCodesArray[8].Icon
            }
            
            
        default: 0 
        
        return{
            code,
            condition:weatherCodesArray[0].condition, 
            Icon:weatherCodesArray[0].Icon
        }

      
    }

}