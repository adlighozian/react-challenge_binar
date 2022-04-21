import { GET_CONTACT_LIST } from "../actions/contactAction";

const initialState = {
    getListContactResult: false,
    getListContactLoading: {},
    getListContactError: false,
}

const contactReducer = (state = initialState, action) => {
 switch(action.type){
    case GET_CONTACT_LIST:
        return { ...state, 
            getListContactResult: action.payload.data,
            getListContactLoading: action.payload.loading,
            getListContactError: action.payload.errorMessage
         };
     default: return state
 }
}

export default contactReducer