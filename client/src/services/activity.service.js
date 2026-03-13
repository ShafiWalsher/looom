import api from "../api/axios";

export const getActivity = async () => {
  const res = await api.get("/activity");
  return res.data;
};
