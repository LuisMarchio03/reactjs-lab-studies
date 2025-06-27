import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IResulsts {
  users: IUser[];
}

export default function UserSSG({ users }: IResulsts) {
  // console.log(users);

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

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await axios.get("http://localhost:3000/api/users");
  // const users = res.data;

  const { data } = await axios.get("http://localhost:3000/api/users/users");

  return {
    props: { users: data },
  };
};
