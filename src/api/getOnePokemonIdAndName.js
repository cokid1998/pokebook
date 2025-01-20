import API from "@/api/API";

const getOnePokemonAndName = (id) => {
  const fetchData = async () => {
    const res = await API.get(`/pokemon-species/${id}`);
    return res.data.names[2].name;
  };
  return fetchData();
};

export default getOnePokemonAndName;
