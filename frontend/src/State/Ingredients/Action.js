import axios from "axios";
import { CREATE_INGREDIENT_REQUEST, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_REQUEST, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, GET_INGREDIENTS_REQUEST, UPDATE_STOCK } from "./ActionType";
import { api, API_URL } from "../../component/config/api"

export const getIngredientOfRestaurant = ({id, jwt}) => {
    return async(dispatch) => {
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}`, 
                {
                headers: {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            console.log("get all ingredients", response.data);
            dispatch({type:GET_INGREDIENTS, payload: response.data});
        } catch (error) {
            console.log("error", error); 
        }
    };
};

export const createIngredient = ({data, jwt}) => {
    return async(dispatch) => {
        dispatch({type:CREATE_INGREDIENT_REQUEST});
        try {
            const response = await api.post(`/api/admin/ingredients`, data,{
                headers: {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            console.log("create ingredient", response.data);
            dispatch({
                type: CREATE_INGREDIENT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            console.log("error", error); 
        }
    };
};

export const getIngredientCategory = ({id,jwt}) => {
    return async(dispatch) => {
        dispatch({type:GET_INGREDIENT_CATEGORY_REQUEST});
        try {
            const response = await api.get(
                `/api/admin/ingredients/restaurant/${id}/category`,
                {
                    headers: {
                        Authorization : `Bearer ${jwt}`,
                    },
                }
            );
            console.log("get ingredient category", response.data);
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data});
        } catch (error) {
            console.log("error", error); 
        }
    };
};

export const updateStock = ({id, jwt}) => {
    return async(dispatch) => {
        try {
            const response = await api.put(
                `/api/admin/ingredients/${id}/stock`,
                {},
                {
                    headers : {
                        Authorization : `Bearer ${jwt}`,
                    },
                }
            );
            dispatch({type: UPDATE_STOCK, payload: response.data});
            console.log("update stock", response.data);
        } catch (error) {
            console.log("error", error); 
        }
    };
};
