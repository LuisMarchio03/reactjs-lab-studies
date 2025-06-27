import { NextApiRequest, NextApiResponse } from "next";
import list from "../../../data/list";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(list);
};
