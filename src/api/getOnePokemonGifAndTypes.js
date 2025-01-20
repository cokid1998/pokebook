import API from "@/api/API";

const getOnePokemonGifAndTypes = (id) => {
  const fetchData = async () => {
    const res = await API.get(`/pokemon/${id}`);
    return res.data.sprites.versions["generation-v"]["black-white"].animated
      .front_default;
  };

  return fetchData();
};

export default getOnePokemonGifAndTypes;
