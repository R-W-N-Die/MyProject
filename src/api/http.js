import axios from "axios";
import router from "../router.js";

const http = axios.create({
    baseURL: 'http://localhost:8000/'
})

http.interceptors.request.use(request => {

    const token = localStorage.getItem('token')

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    return request
})

http.interceptors.response.use(r => r, error => {
    if (error.response.status === 401) {
        localStorage.clear()
        router.push({ name: 'Login' })
    }

    alert(error.response.data.message)
})

export default http;