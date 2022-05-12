import axios from 'axios';

export const GET_CAR_LIST = "GET_CAR_LIST"

export const getCarList = () => {
    return async (dispatch) => {
        try {
            //loading
            dispatch({
                type: GET_CAR_LIST,
                payload: {
                    loading: true,
                    data: false,
                    errorMessage: false
                }
            })

            //getData
            const res = await axios.get('https://rent-cars-api.herokuapp.com/customer/car')
            console.log(res);
            dispatch({
                type: GET_CAR_LIST,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })

        } catch (error) {
            dispatch({
                type: GET_CAR_LIST,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        }
    }
}