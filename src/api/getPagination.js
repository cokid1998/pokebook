import API from "@/api/API";

const getPagination = async (curPage) => {
  try {
    const res = await API.get(`pokemon/?offset=${curPage}&limit=${10}`);
    console.log(res);
    return res.data;
  } catch (error) {
    alert(error);
  }
};

export default getPagination;
