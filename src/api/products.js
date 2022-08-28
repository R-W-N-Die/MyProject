import http from "./http.js";

export default {
    get() {
        return http.get('products')
    }
}