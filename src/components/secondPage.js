import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import data from "./data";

function SecondPage() {
    const [gender, setGender] = useState(data.gender)
    const [age, setAge] = useState(data.age)

    function handleChange(e) {
        setGender(e.target.value)
    }
    function handleNextClick(){
        data.setData([{gender}, {age}])
    }

    return (
        <div>
            <form action="">
                <div  onChange={handleChange}>
                    <input  type="radio" checked={gender === "Male"} value="Male" name="gender"/> Male
                    <input type="radio" checked={gender === "Female"} value="Female" name="gender"/> Female
                    <input type="radio" checked={gender === "Other"} value="Other" name="gender"/> Other
                </div>
                <input type="text" value={age} placeholder={"age"} onChange={(e) => setAge(e.target.value)}/>

            </form>
            <Link to={"/"} onClick={handleNextClick}>prev</Link>

            <Link to={"/thirdPage"} onClick={handleNextClick}>next</Link>

        </div>
)
}

export default SecondPage