import axios from "axios";

const BASEURL = "http://142.93.204.111:5000/api/v1";
// const BASEURL = "http://localhost:5000/api/v1";

const config = { headers: { "Content-Type": "application/json" } };

export const singupUser = async (data) => {
  const res = await axios.post(BASEURL + "/user/register", data, config);
  // console.log("Output:", res);
  return res;
};

export const getAllUsers = async () => {
  const res = await axios.get(BASEURL + "/user/all");
  // console.log("Output:", res);
  return res;
};

export const registerBaby = async (data) => {
    const res = await axios.post(BASEURL + "/child", data, config);
    // console.log("Output:", res);
    return res;
  };

  export const updateBaby = async (id,data) => {
    const res = await axios.put(BASEURL + "/child/"+id, data, config);
    // console.log("Output:", res);
    return res;
  };
    
export const getAllBabies = async () => {
  const res = await axios.get(BASEURL + "/child");
  // console.log("Output:", res);
  return res;
};
