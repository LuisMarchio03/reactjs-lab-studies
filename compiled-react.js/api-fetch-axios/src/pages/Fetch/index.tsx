import React, { useEffect, useState } from "react";

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

const Fetch: React.FC = () => {
  const [data, setData] = useState<IUser[]>();
  const [dataId, setDataId] = useState<IUser>();

  //? Get
  useEffect(() => {
    fetch("http://localhost:3333/results")
      .then((response) => response.json())
      .then((results) => setData(results));
  }, []);

  //? Post
  const postApi = {
    id: Math.random(),
    name: "Luís Gabriel Marchió Batista",
    phone: 64865434532,
    document: {
      cpf: "xxx-xxx-xxx-xx",
    },
  };

  //! Forma 1
  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(postApi),
  //   };
  //   fetch("http://localhost:3333/results", requestOptions);
  // }, []);

  //! Forma 2
  function MyPostApi() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postApi),
    };
    fetch("http://localhost:3333/results", requestOptions);
  }

  //? Put
  useEffect(() => {
    fetch("http://localhost:3333/results/0.4090357168332859")
      .then((response) => response.json())
      .then((results) => setDataId(results));
  }, []); //* Get para um id especifico!

  const putAPi = {
    ...dataId,
    name: "Marchió",
  };
  //* Pode ser colcoado no useEffect, tbm
  function MyPutApi() {
    const requestOptionsPut = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(putAPi),
    };
    // Temos que passar o id do item a ser atualizado.
    fetch(
      "http://localhost:3333/results/0.4090357168332859",
      requestOptionsPut
    );
  }

  //? Delete
  //* Pode ser colcoado no useEffect, tbm
  function DeleteItem() {
    fetch("http://localhost:3333/results/4", { method: "DELETE" }).then(() =>
      console.log("Delete successful")
    );
  }

  console.log(data);

  return (
    <div>
      <h1>Fetch</h1>
      <button onClick={MyPostApi}>Post</button>
      <button onClick={MyPutApi}>Put</button>
      <button onClick={DeleteItem}>Delete</button>
    </div>
  );
};

export default Fetch;
