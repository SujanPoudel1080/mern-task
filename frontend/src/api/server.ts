import axios from "axios";

const server = axios.create({
  baseURL: "/api/",
});
console.log('server is', server)
export default server;