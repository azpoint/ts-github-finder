import User from "../../components/models/githubUser"

enum PossibleActions  {
    GET_USERS = "GET_USERS",
    SET_LOADING = "SET_LOADING",
    CLEAR_USERS = "CLEAR_USERS"
}

interface UserAction {
    type: string
    payload: User[]
}

interface UserState {
    users: User[]
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
        default:
            return state;
    }
}

export default githubReducer