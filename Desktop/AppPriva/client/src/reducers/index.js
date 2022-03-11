import {SETOWNERS ,GETOWNERS , UPDATEOWNER , CATEGORY} from './types'

const initState = {
    AllOwners : {},
    getOwners : {},
    updateowner: {},
    category:''

}

export const reducer = (state = initState, action={} ) => {
    switch(action.type){
        case SETOWNERS:
            return{...state , AllOwners:action.payload}
            case GETOWNERS:
                return{...state , getOwners:action.payload}
            case UPDATEOWNER:
                return{...state , updateowner :action.payload}   
                case CATEGORY:
                    return{...state , category :action.payload}  
            default:
                return {...state }
    }
}