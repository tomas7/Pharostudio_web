import * as action from './action'

export const l_change = (language) => {
    return {
        type: action.L_CHANGE,
        l_active: language
    }
} 