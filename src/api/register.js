import http from "./http.js";

export let registerApi = {
    register(email, password) {
        return http.post('auth/register', {email, password}).then(response => {
            console.log(response)
        })
    }
}