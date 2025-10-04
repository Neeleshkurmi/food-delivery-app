import * as actionTypes from './ActionType';

const initialState = {
    loading : false,
    orders : [],
    error : null,
    notifications: [],
};

export const orderReducer = ( state = initialState , {type, payload }) => {
    switch ( type ) {
        case actionTypes.GET_USERS_ORDER_REQUEST:
            return {...state, error:null, loading:true };
        case actionTypes.GET_USERS_ORDER_SUCCESS:
            return {...state, loading:false, orders:payload, error:null };
        case actionTypes.GET_USERS_ORDER_FAILURE:
            return {...state, loading:false, error:payload };
        
        default:
            return state;
    }
};

export default orderReducer;