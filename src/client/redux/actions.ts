import { ADD_PICKUP } from "./actionTypes";

export const addPickup = (pickUp: string) => ({
    type: ADD_PICKUP,
    payload: {
        pickUp
    }
})