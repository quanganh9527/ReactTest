import { GETVALUE, PLUSNUMBER } from '../Constants/ref'
const addNumber = (number) => {
    return {
        type: PLUSNUMBER,
        number
    }
}

module.exports = {
    addNumber
}