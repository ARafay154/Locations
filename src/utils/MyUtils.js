import { Platform } from 'react-native'



export const isIOS = () => {
    return Platform.OS == 'ios'
}


export const textLimit = (text, limit) => {
    if (text?.length >= limit) {
        return `${text?.slice(0, limit)}...`
    } else {
        return text
    }
  }

  
  