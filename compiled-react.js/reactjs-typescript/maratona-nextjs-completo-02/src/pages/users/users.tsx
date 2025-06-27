import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

export default function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
