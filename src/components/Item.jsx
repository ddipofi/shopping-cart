import styles from "../styles/item.module.css";

const Item = ({ title, price, imgUrl, reason, command, cart }) => {
    return (
        <div className={styles.item}>
            <h2>{title}</h2>
            <img src={imgUrl} alt="" />
            {price}
            <div className={styles.buttons}>
                <button
                    onClick={() => {
                        command([
                            ...cart,
                            { title: title, price: price, imgUrl: imgUrl },
                        ]);
                    }}
                >
                    {reason}
                </button>
            </div>
        </div>
    );
};

export default Item;
