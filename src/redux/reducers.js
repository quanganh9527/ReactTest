import { combineReducers } from 'redux'
import { GETVALUE, PLUSNUMBER } from '../Constants/ref'
const number = 0
const getNumber = (state = number, action) => {
    if (action.type === PLUSNUMBER) {
        return { type: GETVALUE, number: action.number }
    }
    return state
}

const reducers = combineReducers({
    getNumber,
})
export default reducers