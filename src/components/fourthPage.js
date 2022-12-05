import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import data from "./data";

function FourthPage() {
    const [university, setUniversity] = useState(data.university)
    const [yearOfEntering, setYearOfEntering] = useState(data.yearOfEntering)
    const [yearOfGraduate, setyearOfGraduate] = useState(data.yearOfGraduate)
    const [specialty, setSpecialty] = useState(data.specialty)
    const navigate = useNavigate();


    function handleNextClick() {
        data.setData([{university}, {yearOfEntering}, {yearOfGraduate}, {specialty}])
        navigate('/fifthPage')

    }

    return (
        <div>
            <form onSubmit={handleNextClick} className={"form"} action="">
                <h2>Step 4</h2>
                <div className="input_wrap">
                    <p className="label">University</p>

                    <input required type="text" value={university} placeholder={"university"}
                           onChange={(e) => setUniversity(e.target.value)}/>

                </div>
                <div className="input_wrap">
                    <p className="label">Year of entering to university</p>

                    <input required type="text" value={yearOfEntering} placeholder={"year of entering"}
                           onChange={(e) => setYearOfEntering(e.target.value)}/>

                </div>
                <div className="input_wrap">
                    <p className="label">Year of graduating</p>

                    <input required type="text" value={yearOfGraduate} placeholder={"year of graduate"}
                           onChange={(e) => setyearOfGraduate(e.target.value)}/>

                </div>
                <div className="input_wrap">
                    <p className="label">Your specialty</p>
                    <input required type="text" value={specialty} placeholder={"specialty"}
                           onChange={(e) => setSpecialty(e.target.value)}/>

                </div>
                <div className="links_wrap">
                    <Link className={"a"} to={"/thirdPage"} onClick={handleNextClick}>prev</Link>

                    <button className={"a first_step"} type="submit">next</button>
                </div>
            </form>


        </div>
    )

}

export default FourthPage