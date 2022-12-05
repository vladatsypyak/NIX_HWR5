import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import data from "./data";

function SecondPage() {
    const [gender, setGender] = useState(data.gender)
    const [age, setAge] = useState(data.age)
    const navigate = useNavigate();


    function handleChange(e) {
        setGender(e.target.value)
    }
    function handleNextClick(){
        data.setData([{gender}, {age}])
        navigate('/thirdPage')

    }

    return (
        <div>
            <form onSubmit={handleNextClick} className={"form"} action="">
                <h2>Step 2</h2>
               <div className="input_wrap gender_wrap">
                   <p className={"label"}>Choose your gender:</p>
                   <div  onChange={handleChange}>
                       <input  type="radio" checked={gender === "Male"} value="Male" name="gender"/> Male
                       <input type="radio" checked={gender === "Female"} value="Female" name="gender"/> Female
                       <input type="radio" checked={gender === "Other"} value="Other" name="gender"/> Other
                   </div>
               </div>
                <div className="input_wrap">
                    <p className={"label"}>Type your age:</p>
                    <input required type="number" value={age} placeholder={"age"} onChange={(e) => setAge(e.target.value)}/>
                </div>
               <div className="links_wrap">
                   <Link className={"a"} to={"/"} onClick={handleNextClick}>prev</Link>
                   <button className={"a first_step"} type="submit">next</button>
               </div>
            </form>


        </div>
)
}

export default SecondPage