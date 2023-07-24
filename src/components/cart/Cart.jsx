import React, {useEffect, useState} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import CartsApiWorker from "../../api/CartsApiWorker";

const Cart = () => {
    let localStorageWorker = new LocalStorageWorker();

    let userid = localStorageWorker.get("userid");
    let token = localStorageWorker.get("token");

    let cartsApiWorker = new CartsApiWorker();

    let [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        cartsApiWorker.getByUserId(userid, token).then(
            response => {
                setCartItems(response.data);
            }
        ).catch(
            error => {
                alert(error);
            }
        )
    }, []);

    return (
        <div>
            {
                cartItems.length === 0
                    ? <h2>Корзина пуста</h2>
                    : cartItems.map(item => {
                        return (
                            <div>
                                <b>{item.productName}</b> | {item.productPrice} | <i>{item.amount}</i> | total price = {item.productPrice*item.amount}
                            </div>
                        )
                    })
            }

        </div>
    );
};

export default Cart;