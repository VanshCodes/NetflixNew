import axios from "axios"
export let baseURL="https://api.themoviedb.org/3"
const instance = axios.create({
    baseURL,
})
export default instance