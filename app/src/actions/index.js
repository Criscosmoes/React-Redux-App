import randomDogs from '../apis/randomDogs'; 


export const fetchDogs = () => async dispatch => {

    const response = await randomDogs.get('/random'); 

    console.log(response.data.message)

   /*  return {
        type: "FETCH_DOGS", 
        payload: response.data.message, 
    } */


    dispatch({type: "FETCH_DOGS", payload: response.data.message})
}


export const clearDogs = () => {


    return {
        type: "CLEAR_DOGS"
    }
}