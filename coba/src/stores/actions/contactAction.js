import axios from "axios";

export const GET_CONTACT_LIST = "GET_CONTACT_LIST"

export const getContactList = () => {
    return async(dispatch) => {
        try {
            //loading
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: true,
                    data: {},
                    errorMessage: false
                }
            })
            
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            console.log(res);
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                    }
                })  
        } catch (error) {
            dispatch({
                type: GET_CONTACT_LIST,
                payload: {
                    loading: false,
                    data: {},
                    errorMessage: error.message
                    }
                })
        
            }
    }
}