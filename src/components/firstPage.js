import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import data from "./data";

function FirstPage() {
    const navigate = useNavigate();

    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [surname, setSurname] = useState(data.surname)

    function handleClick() {
        console.log(name)
        data.setData([{name: name}, {email}, {surname}])
        navigate('/secondPage')
    }

    return (
        <div>
            <form onSubmit={handleClick}action="" className={"form"}>
                <h2>Step 1</h2>
                <div className="input_wrap">
                    <p className="label">Your name:</p>
                    <input required value={name} type="text" placeholder={"name"} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>


                <div className="input_wrap">
                    <p className="label">Your surname:</p>

                    <input required value={surname} type="text" placeholder={"surname"} onChange={(e) => {
                        setSurname(e.target.value)}}/>
                </div>

                <div className="input_wrap">
                    <p className="label">Your email:</p>
                    <input required value={email} type="text" placeholder={"email"} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </div>

                <div className="links_wrap">
                    <button className={"a first_step"} type="submit">next</button>
                </div>
            </form>

        </div>
    )
}

export default FirstPage