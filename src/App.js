import logo from './logo.svg';
import {Link, Route, Routes} from "react-router-dom"
import {useState} from "react";
import './App.css';
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import FourthPage from "./components/fourthPage";
import FifthPage from "./components/fifthPage";
import ThirdPage from "./components/thirsdPage";
import LastPage from "./components/lastPage";

function App() {
    const [darkTheme, setDarkTheme] = useState(false)
    return (
        <div className={darkTheme ? "App dark": "App"}>
            <button className={"theme_btn"} onClick={() => setDarkTheme(!darkTheme)}>
                 {darkTheme ? " light" : "dark"} mode
            </button>

            <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/secondPage" element={<SecondPage/>}/>
                <Route path="/thirdPage" element={<ThirdPage/>}/>
                <Route path="/fourthPage" element={<FourthPage/>}/>
                <Route path="/fifthPage" element={<FifthPage/>}/>
                <Route path="/lastPage" element={<LastPage/>}/>

            </Routes>
        </div>
    );
}

export default App;
