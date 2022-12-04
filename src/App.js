import logo from './logo.svg';
import {Link, Route, Routes} from "react-router-dom"

import './App.css';
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage";
import FourthPage from "./components/fourthPage";
import FifthPage from "./components/fifthPage";
import ThirdPage from "./components/thirsdPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<FirstPage/>}/>

        <Route path="/secondPage" element={<SecondPage/>}/>
        <Route path="/thirdPage" element={<ThirdPage/>}/>
        <Route path="/fourthPage" element={<FourthPage/>}/>
        <Route path="/fifthPage" element={<FifthPage/>}/>




      </Routes>
    </div>
  );
}

export default App;
