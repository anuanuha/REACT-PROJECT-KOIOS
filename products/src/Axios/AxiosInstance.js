import axios from "axios";

let AxiosInstance=axios.create({
    baseURL : "http://localhost:4000/"
})
export default AxiosInstance