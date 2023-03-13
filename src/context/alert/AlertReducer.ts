import {Alert} from "./AlertContext"

export enum AlertActionTypes {
    SET_ALERT = "SET_ALERT",
    REMOVE_ALERT = "REMOVE_ALERT"
}

interface SET_ALERT {
    type: AlertActionTypes.SET_ALERT
    payload: Alert
}

interface REMOVE_ALERT {
    type: AlertActionTypes.REMOVE_ALERT
}

type AlertAction = SET_ALERT | REMOVE_ALERT

const alertReducer = (state: Alert | null, action: AlertAction) => {
    switch(action.type) {
        case AlertActionTypes.SET_ALERT:
            return action.payload
        case AlertActionTypes.REMOVE_ALERT:
            return null
        default:
            return state
    }
}

export default alertReducer