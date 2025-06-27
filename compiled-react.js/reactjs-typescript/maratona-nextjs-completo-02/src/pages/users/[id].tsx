import axios from "axios";
import { GetServerSideProps } from "next";

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface IResults {
  user: IUser;
}

export default function User({ user }: IResults) {
  return (
    <div>
      <h1>Users:</h1>
      <ul>
        <li>
          {user.name} - {user.email}
        </li>
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { id },
  } = context;
  const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);

  return {
    props: { user: data },
  };
};
