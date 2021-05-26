
const detialReducer = (state = {pickUp: '', dropOff: ''}, action: any) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_PICKUP':
            newState.pickUp = action.pickUp;
            return newState;
        case 'ADD_DROPOFF':
            newState.dropOff = action.dropOff;
            return newState;
        default:
            return state;
    }
}

export default detialReducer;