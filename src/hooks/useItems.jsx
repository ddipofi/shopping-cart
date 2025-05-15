import { useState, useEffect } from "react";

const useItems = () => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Couldn't fetch data");
                }

                return response.json();
            })
            .then((response) => setItems(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { items, loading, error };
};

export default useItems;
