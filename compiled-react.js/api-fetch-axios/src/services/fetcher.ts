import axios from "axios";

const fetcher = async <T = any>(url: string): Promise<T> => {
  const { data } = await axios.get<T>(url);

  return data;
};

export default fetcher;
