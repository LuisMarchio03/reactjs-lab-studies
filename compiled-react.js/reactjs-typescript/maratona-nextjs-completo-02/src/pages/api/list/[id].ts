import { NextApiRequest, NextApiResponse } from "next";
import list from "../../../data/list";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  const myList = list.find((list) => list.id === +id);

  if (myList) {
    res.statusCode = 200;
    res.json(myList);
  } else {
    res.statusCode = 404;
    res.json({ error: "User not found" });
  }
};
