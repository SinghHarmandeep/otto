import { ADD_PICKUP, ADD_DROPOFF } from "./actionTypes";

export const addPickup = (pickUp: string) => ({
    type: ADD_PICKUP,
    payload: {
        pickUp
    }
})

export const addDropoff = (dropOff: string) => ({
    type: ADD_DROPOFF,
    payload: {
        dropOff
    }
})