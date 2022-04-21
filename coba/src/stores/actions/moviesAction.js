import axios from "axios";

export const GET_MOVIES_LIST = "GET_MOVIES_LIST"

export const getMoviesList = () => {
    return async(dispatch) => {
        try {
            //loading
            dispatch({
                type: GET_MOVIES_LIST,
                payload: {
                    loading: true,
                    data: {},
                    errorMessage: false
                }
            })
            
            const res = await axios.get(`https://rent-cars-api.herokuapp.com/admin/car`)
            console.log(res);
            dispatch({
                type: GET_MOVIES_LIST,
                payload: {
                    loading: false,
                    data: res.data.data.docs,
                    errorMessage: false
                    }
                })  
        } catch (error) {
            dispatch({
                type: GET_MOVIES_LIST,
                payload: {
                    loading: false,
                    data: {},
                    errorMessage: error.message
                    }
                })
        
            }
    }
}