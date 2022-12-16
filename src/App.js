import './App.css';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import {Game} from "./pages/GamePage/Game";
import {Home} from "./pages/HomePage/Home";
import {ErrorPage} from "./pages/errorPage/ErrorPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/memory-game" element={<Game/>} />
                    <Route path="/*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
