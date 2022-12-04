import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import data from "./data";

function FirstPage() {
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [surname, setSurname] = useState(data.surname)

    function handleClick() {
        console.log(name)
        data.setData([{name: name}, {email}, {surname}])
    }

    return (
        <div>
            <form action="">
                <input value={name} type="text" placeholder={"name"} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input value={surname} type="text" placeholder={"surname"} onChange={(e) => {
                    setSurname(e.target.value)}}/>

                <input value={email} type="text" placeholder={"email"} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
            </form>
            <Link>prev</Link>
            <Link to={"/secondPage"} onClick={handleClick}>next</Link>
        </div>
    )
}

export default FirstPage