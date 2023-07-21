import axios from "axios";

class ProductsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            //baseURL: "http://localhost/api/products"
            baseURL: "http://localhost:8010/products"
        });
    }

    async getAllByCategoryId(id) {
        return await this.#axios.get("/get-by-category-id/" + id);
    }
}

export default ProductsApiWorker;