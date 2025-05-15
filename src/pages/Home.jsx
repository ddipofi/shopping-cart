import { useOutletContext } from "react-router-dom";
import Item from "../components/Item";
import styles from "../styles/home.module.css";

const Home = () => {
    const items = useOutletContext();

    return (
        <div className={styles.home}>
            <h1>Home</h1>
            <ul className={styles.items}>
                {items.map((item) => (
                    <li key={item.id}>
                        <Item
                            title={item.title}
                            price={item.price}
                            imgUrl={item.image}
                            reason="Add to cart"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
