import User from "../../components/models/githubUser"

enum PossibleActions  {
    GET_USERS = "GET_USERS",
    GET_USER = "GET_USER",
    SET_LOADING = "SET_LOADING",
    CLEAR_USERS = "CLEAR_USERS"
}

interface UserAction {
    type: string
    payload: User[]
}

interface UserState {
    users: User[]
    user: object
    loading: boolean
}

const githubReducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
        case PossibleActions.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case PossibleActions.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case PossibleActions.CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case PossibleActions.GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default githubReducer