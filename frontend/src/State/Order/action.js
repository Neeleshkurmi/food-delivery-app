import { api, API_URL } from "../../component/config/api"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDER_FAILURE, GET_USERS_ORDER_REQUEST, GET_USERS_ORDER_SUCCESS } from "./ActionType";

export const createOrder = (reqData) => {
   return async (dispatch) => {
        dispatch({type:CREATE_ORDER_REQUEST});
        try{
            const response = await api.post(`/api/order/` , reqData.order ,{
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                }
            });
            // if(data.payment_url){
            //     window.location.href = data.payment_url;
            // }
            console.log("created order ",data)
            dispatch({type:CREATE_ORDER_SUCCESS, payload:data});
        } catch ( error ) {
            console.log("catch error ", error)
            dispatch({type:CREATE_ORDER_FAILURE, payload:error.message});
        }
    };
};

export const getUsersOrder = (jwt) => {
    return async (dispatch) => {
        dispatch({type:GET_USERS_ORDER_REQUEST});
        try {
            const response = await api.get(`/api/order/user` ,{
                headers: {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            console.log("get users order ", data)
            dispatch({type:GET_USERS_ORDER_SUCCESS, payload:data});
        } catch ( error ) {
            console.log("catch error ", error)
            dispatch({type:GET_USERS_ORDER_FAILURE, payload:error.message});
        }   
    };
};
