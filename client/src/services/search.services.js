import api from "../api/axios";

export const search = async (query) => {
  try {
    const res = await api.get("/search", { params: { q: query } });
    return res.data;
  } catch (err) {
    throw err.message;
  }
};
// const handleSearch = async () => {
//   const result = await search(searchText);

//   setPosts(result.posts);
//   setUsers(result.users);
// };
