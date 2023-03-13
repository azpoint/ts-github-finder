import { createContext, useReducer } from "react"
import alertReducer, {AlertActionTypes} from "../alert/AlertReducer"

export interface Alert {
    msg: string
    type: string
}

interface AlertContextTypes {
    alert: Alert | null
    setAlert: (msg: string, type: string) => void
}


const AlertContext = createContext({} as AlertContextTypes)


export const AlertProvider = ({children} : {children: React.ReactNode}) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg: string, type: string) : void => {
        dispatch({
            type: AlertActionTypes.SET_ALERT,
            payload: {msg, type}
        })

        setTimeout(() => dispatch({
            type: AlertActionTypes.REMOVE_ALERT
        }), 3000)
    }

    return <AlertContext.Provider value={{
        alert: state,
        setAlert
        }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext