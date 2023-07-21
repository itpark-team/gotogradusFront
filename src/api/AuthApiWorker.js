import axios from "axios";

class AuthApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/categories"
            baseURL: "http://localhost:8010/auth"
        });
    }

    async checkPhoneNumber(checkPhone) {
        return await this.#axios.post("/check-phone-number", checkPhone);
    }

    async authenticate(credentials) {
        return await this.#axios.post("/authenticate", credentials);
    }
}

export default AuthApiWorker;