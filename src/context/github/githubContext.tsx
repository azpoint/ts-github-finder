import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

//MODELS
import User from "../../components/models/githubUser";

type GithubContextTypes = {
  users: User[];
  user: object
  loading: boolean
  searchUsers: (text: string) => void
  getUser: (login: string) => void
  clearUsers: () => void
}

const GithubContext = createContext({} as GithubContextTypes);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

interface GithubContextProps {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubContextProps) => {
  // const [users, setUsers] = useState<User[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  const initialState = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)


  //GET SEARCH RESLT
  const searchUsers = async (text: string) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const {items} = await response.json();

    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: items
    })
  };

  const getUser = async (login: string) => {
    setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    
    if(response.status === 404) {
      window.location.href = "/notfound"
    } else {
      const {data} = await response.json();

      dispatch({
        type: "GET_USER",
        payload: data
      })
    }

    // setUsers(data);
    // setLoading(false);

  };

  //SET LOADING
  const setLoading = () => dispatch({type: "SET_LOADING", payload: []})

  //CLEAR USERS

  const clearUsers = () => dispatch({type: "CLEAR_USERS", payload: []})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
