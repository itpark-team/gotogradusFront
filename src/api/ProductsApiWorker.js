import axios from "axios";

class ProductsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/products"
            baseURL: "http://localhost:8010/products"
        });
    }

    async getAllByCategoryId(id, token) {
        return await this.#axios.get("/get-by-category-id/" + id, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default ProductsApiWorker;