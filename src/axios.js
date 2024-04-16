import axios from "axios";
console.log("api", process.env.REACT_APP_API);


const defaultInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {}
})


export default defaultInstance;