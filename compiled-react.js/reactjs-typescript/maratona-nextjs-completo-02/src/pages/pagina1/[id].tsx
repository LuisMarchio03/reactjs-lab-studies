import { useRouter } from "next/dist/client/router";
import React from "react";

export default function Pagina1ID() {
  // const router = useRouter();
  // // console.log(router);
  // console.log(router.query.id);

  const { query } = useRouter();

  return (
    <div>
      <h1>Pagina 1 - {query.id}</h1>
    </div>
  );
}
