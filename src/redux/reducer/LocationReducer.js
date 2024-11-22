import { ADD_LOCATION } from "../action/ActionTypes";


const initialState = [];


export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return [
                ...state,
                action.data,
            ]


        default:
            return state

    }

}