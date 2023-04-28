import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b88d787489c4947becc113880a8be37",
  },
});
