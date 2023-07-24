import {useParams} from "react-router-dom";
import ProductsApiWorker from "../../api/ProductsApiWorker";
import {Alert} from "antd";
import React, {useEffect, useState} from 'react';
import ProductsInCategoriesList from "./ProductsInCategoriesList";
import LocalStorageWorker from "../store/LocalStorageWorker";

const ProductsInCategories = () => {

    let {categoryId} = useParams();
    let [products, setProducts] = useState([]);

    let productsApiWorker = new ProductsApiWorker();
    let [hasApiError, setHasApiError] = useState(false);

    let localStorageWorker = new LocalStorageWorker();
    let token = localStorageWorker.get("token");

    useEffect(() => {

        productsApiWorker.getAllByCategoryId(categoryId, token).then(
            response => {
                setProducts(response.data);
            }
        ).catch(
            error => {
                setHasApiError(true);
            }
        );

    }, []);

    return (
        <div>
            <h1>Тип продукта</h1>
            {
                hasApiError == true
                    ? <Alert message="Ошибка в запросе" type="error"/>
                    : <ProductsInCategoriesList products={products}/>
            }
        </div>
    );
};

export default ProductsInCategories;