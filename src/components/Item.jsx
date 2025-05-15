import styles from "../styles/item.module.css";

const Item = ({ title, price, imgUrl, reason }) => {
    return (
        <div className={styles.item}>
            <h2>{title}</h2>
            <img src={imgUrl} alt="" />
            {price}
            <div className={styles.buttons}>
                <button>-</button>
                <button>{reason}</button>
                <button>+</button>
            </div>
        </div>
    );
};

export default Item;
