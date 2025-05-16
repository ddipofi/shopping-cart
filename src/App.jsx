import { useState } from "react";
import { Outlet } from "react-router-dom";
import useItems from "./hooks/useItems";
import NavBar from "./components/NavBar";
import "./styles/global.css";
import styles from "./styles/app.module.css";

function App() {
    const { items, loading, error } = useItems();
    const [cart, setCart] = useState([]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <NavBar />
            <Outlet context={{ items, cart, setCart }} />
        </>
    );
}

export default App;
