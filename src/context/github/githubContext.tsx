import { createContext, useState } from "react";

//MODELS
import User from "../../components/models/githubUser";

type GithubContextTypes = {
  users: User[];
  loading: boolean
  fetchUsers: () => void
}

const GithubContext = createContext({} as GithubContextTypes);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

interface GithubContextProps {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubContextProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
