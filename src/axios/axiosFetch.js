import axios from "axios";


const axiosFetch = axios.create({
    baseURL : "https://683aec9d43bb370a86742b0b.mockapi.io/",
    headers : {
        "Content-Type": "application/json"
    }
})

export default axiosFetch