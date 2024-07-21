import moment from "moment"

export const dayFormat = (date:string):string => {
     return moment(date).format('ddd')
}