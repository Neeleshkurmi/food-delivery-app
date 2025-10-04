import * as actionTypes from './ActionTypes';

const initialState = {
    loading: false,
    error : null,
    orders:[]
};

const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RESTAURANTS_ORDER_REQUEST:
        case actionTypes.UPDATE_ORDER_STATUS_REQUEST:
            return {...state, loading: true , error: null};
        case actionTypes.GET_RESTAURANTS_ORDER_SUCCESS:
            return {...state, loading: false, orders: action.payload};
        case actionTypes.UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrders = state.orders.map((order) =>
                order.id === action.payload.id?action.payload :order );
            return {...state, loading: false, orders: updateOrders};
        case actionTypes.GET_RESTAURANTS_ORDER_FAILURE:
        case actionTypes.UPDATE_ORDER_STATUS_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
}

export default restaurantsOrderReducer;
