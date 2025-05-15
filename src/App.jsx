import { Outlet } from "react-router-dom";
import useItems from "./hooks/useItems";
import NavBar from "./components/NavBar";
import "./styles/global.css";

function App() {
    const { items, loading, error } = useItems();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <NavBar />
            <Outlet context={items} />
        </>
    );
}

export default App;
