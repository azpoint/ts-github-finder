// DEPENDENCIES
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

//COMPONENTS
import Spinner from "../layaout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const {users, loading} = useContext(GithubContext)
  
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} userData={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />
  }
}
export default UserResults;
