import { ADD_PICKUP, ADD_DROPOFF } from '../actionTypes'

const detialReducer = (state = { pickUp: '', dropOff: '' }, action: any) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_PICKUP:
            newState.pickUp = action.payload.pickUp;
            return newState;
        case ADD_DROPOFF:
            newState.dropOff = action.payload.dropOff;
            return newState;
        default:
            return state;
    }
}

export default detialReducer;