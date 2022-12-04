import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import data from "./data";

 function ThirdPage() {
     const [phone, setPhone] = useState(data.phone)
     const [country, setCountry] = useState(data.country)
     const [address, setAddress] = useState(data.address)



     function handleNextClick(){
         data.setData([{phone}, {country}, {address}, ])
     }

     return (
         <div>
             <form action="">

                 <input type="text"  value={phone} placeholder={"phone number"} onChange={(e) => setPhone(e.target.value)}/>
                 <input type="text" value={country} placeholder={"country"} onChange={(e) => setCountry(e.target.value)}/>
                 <input type="text" value={address} placeholder={"address"} onChange={(e) => setAddress(e.target.value)}/>


             </form>
             <Link to={"/secondPage"} onClick={handleNextClick}>prev</Link>

             <Link to={"/fourthPage"} onClick={handleNextClick}>next</Link>

         </div>
     )
 }

 export default ThirdPage