import { useContext } from "react";

import { appContext } from "../../App";
import UserItem from "../UserItem";

function UserList() {
  const { users } = useContext(appContext);

  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserItem key={user.name + user.id} {...user} />
      ))}
    </ul>
  );
}

export default UserList;
