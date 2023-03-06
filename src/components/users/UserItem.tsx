import { Link } from "react-router-dom";

import User from "../models/githubUser";

interface UserProp {
  userData: User;
  key: number | string;
}

function UserItem({ userData: { login, avatar_url } }: UserProp) {
  return (
    <div className="card shadow-md compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="profile pic" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UserItem;
