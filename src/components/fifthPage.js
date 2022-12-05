import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import data from "./data";

function FifthPage() {
    const [experience, setExperience] = useState(data.experience)
    const [lastWorkPlace, setLastWorkplace] = useState(data.lastPlaceOfWork)
    const [position, setPosition] = useState(data.position)
    const navigate = useNavigate();


    function handleChange(e) {
        if(e.target.value === "true"){
            setExperience(e.target.value)
        } else {
            setExperience(false)

        }

    }


    function handleNextClick() {
        data.setData([{experience}, {lastWorkPlace}, {position},])
        navigate('/lastPage')

    }

    return (
        <div>
            <form onSubmit={handleNextClick} className={"form"} action="">
                <h2>Step 5</h2>
                <div className="input_wrap input_radio_wrap">
                    <p className="label">Do you have work experience?</p>
                    <div aria-required onChange={handleChange}>
                        <input required type="radio" value="true" name="experience"/> yes
                        <input type="radio" value="false" name="experience"/> no
                    </div>
                </div>

                {experience ? <div>
                    <div className="input_wrap">
                        <p className="label">Last work place</p>
                        <input type="text" placeholder={"last work place"}
                               onChange={(e) => setLastWorkplace(e.target.value)}/>

                    </div>
                    <div className="input_wrap">
                        <p className="label">Position</p>

                        <input type="text" placeholder={"position"} onChange={(e) => setPosition(e.target.value)}/>

                    </div>
                </div> : null}
                <div className="links_wrap">
                    <Link className={"a"} to={"/thirdPage"} onClick={handleNextClick}>prev</Link>

                    <button className={"a first_step"} type="submit">submit</button>
                </div>
            </form>


        </div>
    )
}

export default FifthPage