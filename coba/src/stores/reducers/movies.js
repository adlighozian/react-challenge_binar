import { GET_MOVIES_LIST } from "../actions/moviesAction";

const initialState = {
    movies: false,
    loading: false,
    error: false,
}

const moviesReducer = (state = initialState, action) => {
 switch(action.type){
    case GET_MOVIES_LIST:
        return { ...state, 
            movies: action.payload.data,
            loading: action.payload.loading,
            error: action.payload.errorMessage
         };
     default: return state
 }
}

export default moviesReducer