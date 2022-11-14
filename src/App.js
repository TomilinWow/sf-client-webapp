import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Institution from "./components/Institution/Institution";
import Stars from "./components/Stars/Stars";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<Home />}/>
                <Route index element={<Stars />}/>
                <Route index element={<Institution />}/>
            </Routes>
        </div>
    );
}

export default App;
