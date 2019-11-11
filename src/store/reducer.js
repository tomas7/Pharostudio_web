import * as actionTypes from './action'

const initialState = {
    isOverW: false,
    isOverG: false,
    isOverV: false,
    isOverA: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.T_W:
            return {
                ...state,
                isOverW: action.isOverW
            };
        case actionTypes.F_W:
            return {
                ...state,
                isOverW: action.isOverW
            };    
        case actionTypes.T_G:
            return {
                ...state,
                isOverG: action.isOverG
            };
        case actionTypes.F_G:
            return {
                ...state,
                isOverG: action.isOverG
            };   
        case actionTypes.T_V:
            return {
                ...state,
                isOverV: action.isOverV
            };
        case actionTypes.F_V:
            return {
                ...state,
                isOverV: action.isOverV
            };   
        case actionTypes.T_A:
            return {
                ...state,
                isOverA: action.isOverA
            };
        case actionTypes.F_A:
            return {
                ...state,
                isOverA: action.isOverA
            }; 
        default:
        return state;
    }
    
   
}

export default reducer;