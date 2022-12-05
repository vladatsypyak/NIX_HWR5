import React, {useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import data from "./data";

function ThirdPage() {
    const [phone, setPhone] = useState(data.phone)
    const [country, setCountry] = useState(data.country)
    const [address, setAddress] = useState(data.address)
    const navigate = useNavigate();


    function handleNextClick() {
        data.setData([{phone}, {country}, {address},])
        navigate('/fourthPage')

    }

    return (
        <div>
            <form onSubmit={handleNextClick} className={"form"} action="">
                <h2>Step 3</h2>
                <div className="input_wrap">
                    <p className="label">Your phone number</p>
                    <input required type="text" value={phone} placeholder={"phone number"}
                           onChange={(e) => setPhone(e.target.value)}/>

                </div>

                <div className="input_wrap">
                    <p className="label">Your country:</p>
                    <input required type="text" value={country} placeholder={"country"}
                           onChange={(e) => setCountry(e.target.value)}/>
                </div>
                <div className="input_wrap">
                    <p className="label">Your address:</p>

                    <input required type="text" value={address} placeholder={"address"}
                           onChange={(e) => setAddress(e.target.value)}/>

                </div>
                <div className="links_wrap">
                    <Link className={"a"} to={"/secondPage"} onClick={handleNextClick}>prev</Link>

                    <button className={"a first_step"} type="submit">next</button>

                </div>
            </form>


        </div>
    )
}

export default ThirdPage