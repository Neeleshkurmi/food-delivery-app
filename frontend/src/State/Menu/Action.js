import { api, API_URL } from "../../component/config/api"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";

export const createMenuItem = (menu, token) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const {data } = await api.post("api/admin/food", menu,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            console.log("created menu", data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            console.log("error while creating menu", error);
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, payload: error.message });
        }
    };
}

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            // Ensure boolean values are properly formatted
            const params = new URLSearchParams({
                vegetarian: reqData.vegetarian?.toString() || 'false',
                nonveg: reqData.nonveg?.toString() || 'false',
                seasonal: reqData.seasonal?.toString() || 'false',
                ...(reqData.foodCategory && { food_category: reqData.foodCategory })
            });

            const { data } = await api.get(
                `/api/food/restaurant/${reqData.restaurantId}?${params}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`,
                    },
                }
            );
            console.log("menu items by restaurant id", data);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
        } catch (error) {
            console.log("error while getting menu items by restaurant id", error);
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error.message});
        }   
    };
};

export const searchMenuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(
                `/api/food/search?name=${keyword}`,
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`,
                    },
                } 
            );
            console.log("search menu item", data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error.message});
            console.log("error while searching menu item", error);
        }
    };
};

export const getAllGredientOfMenuItems = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(
                `/api/food/restauarant/${reqData.restaurantId}`,
                {
                    headers:{
                        Authorization:`Bearer ${reqData.token}`,
                    },
                }
            );
            console.log("all gredient of menu items", data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data});
        } catch (error) {
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error.message});
            console.log("error while getting all gredient of menu items", error);
        }
    };
}

export const updateMenuItemsAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("update menu items availability", data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload:data});
        } catch (error) {
            console.log("error while updating menu items availability", error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload:error.message});
        }
    };
};

export const deleteMenuItem = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(
                `/api/admin/food/${foodId}`,
                {
                    headers:{
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("deleted menu item", data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            dispatch({type:DELETE_MENU_ITEM_FAILURE, payload:error.message});
            console.log("error while deleting menu item", error);
        }
    };
};