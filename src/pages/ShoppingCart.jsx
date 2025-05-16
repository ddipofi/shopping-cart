import { useOutletContext } from "react-router-dom";
import Item from "../components/Item";
import styles from "../styles/home.module.css";

const ShoppingCart = () => {
    const { items, cart, setCart } = useOutletContext();

    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <ul className={styles.items}>
                {cart.map((item) => (
                    <li key={item.id}>
                        <Item
                            title={item.title}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            reason="Remove from cart"
                            command={setCart}
                            cart={cart}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
