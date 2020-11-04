const initialState = {
    dogs: [], 
}


export default (state = initialState, action) => {


    switch(action.type) {
        case "FETCH_DOGS": 

            console.log(true); 

            return {
                ...state,
                dogs: [...state.dogs, action.payload], 
            }
        case "CLEAR_DOGS": 
            return {
                ...state, 
                dogs: [], 
            }
        default: 
            return state; 

    }
}