import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

interface IUser {
  id: number;
  name: string;
  phone: number;
  document: {
    cpf: string;
  };
}

interface IResults {
  results: IUser[];
}

const Axios: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [userSingle, setUserSingle] = useState<IUser[]>();

  //? Axios - Get
  //* Forma 1
  useEffect(() => {
    api
      .get("/results")
      .then((response) => response.data)
      .then((res) => setUserSingle(res))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  //* Forma 2
  // const getUsers = async () => {
  //   const { data } = await axios.get<IUser[]>(`http://localhost:3333/results`);

  // setUsers(data);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  //? Axios - Get - BY ID
  useEffect(() => {
    const id = 0.4090357168332859;
    api
      .get(`/results/${id}`)
      .then((response) => response.data)
      .then((res) => setUserSingle(res))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  //? Axios - Post
  const postApi: IUser = {
    id: Math.random(),
    name: "Luís - Post Axios",
    phone: 64999999999,
    document: {
      cpf: "xxx-xxx-xxx-xx",
    },
  };

  function Post() {
    api
      .post("/results", postApi)
      .then(() => console.log("Post - success"))
      .catch((err) => console.log(err));
  }

  //? Axios - Put
  const putApi = {
    ...userSingle,
    name: "Luís Marchió - Axios Put",
  };
  function Put() {
    const id = 0.4090357168332859;
    api
      .put(`/results/${id}`, putApi)
      .then(() => console.log("Put - success"))
      .catch((err) => console.log(err));
  }

  //? Axios - Delete

  function Delete() {
    const id = 0.25457700185921217;
    api
      .delete(`/results/${id}`)
      .then(() => console.log("Delete - success"))
      .catch((err) => console.log(err));
  }

  console.log(users);
  console.log(userSingle);

  return (
    <div>
      <h1>Axios</h1>
      <button onClick={Post}>Post - Axios</button>
      <button onClick={Put}>Put - Axios</button>
      <button onClick={Delete}>Delete - Axios</button>
    </div>
  );
};

export default Axios;
