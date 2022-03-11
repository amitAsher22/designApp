// import {OWNERS} from './types'
import {SETOWNERS ,GETOWNERS , UPDATEOWNER , CATEGORY} from './types'




export const getOwners = (owners) => async(dispatch) =>{
    try {
        const res = await fetch("/allowners",{
            method:"get",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(owners)
        })

        const data = await res.json()
        console.log("this is data from action/reducers" , data);
        dispatch({
            type:GETOWNERS,
            payload:data
        })

    }
    catch (error) {
        console.log(error);

    }

}



export const setOwners = (value)=> async (dispatch) =>{

   try {
       const res = await fetch("/setOwners",{
           method:"post",
           headers:{"content-type":"application/json"},
           body:JSON.stringify(value)
       })
            const data = await res.json()
            dispatch({
                type:SETOWNERS,
                payload:data
            })
   }
   catch (error) {
       console.log(error);
   }

}


export const updateowners = (dataOwner )=> async (dispatch)=>{
    try {
        const res = await fetch(`/update_owner`,{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(dataOwner)
        })
             const data = await res.json()
             dispatch({
                 type:UPDATEOWNER,
                 payload:data
             })

    }

    catch (error) {
        console.log(error);

    }

}



export const setcategory = (category) =>{
    return{
        type:CATEGORY,
        payload:category
    }
}


// export const showData = (text)=>{
//     return{
//         type:'INSERT',
//         payload: text
//     }

// }
