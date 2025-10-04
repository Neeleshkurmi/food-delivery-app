import { CREATE_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionType";

const initialState = {
    ingredients: [],
    update : null,
    category: [],
};

export const ingredientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload,
            };
        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
            };
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: [...state.category, action.payload],
            };
        case UPDATE_STOCK:
            return {
                ...state,
                update: action.payload,
                ingredients: state.ingredients.map(ingredient => 
                    ingredient.id === action.payload.id ? action.payload : ingredient
                ),
            };
        default:
            return state;
    }
};

export default ingredientsReducer;