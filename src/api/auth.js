import http from "./http.js";

export default {
    login(email, password) {
        return http.post('auth/login', { email, password }).then(response => {
            const token = response.data.access_token
            localStorage.setItem('token', token)
        })
    }
}