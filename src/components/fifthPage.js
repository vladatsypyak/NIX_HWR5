import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import data from "./data";

 function FifthPage() {
     const [experience, setExperience] = useState(data.experience)
     const [lastWorkPlace, setLastWorkplace] = useState(data.lastPlaceOfWork)
     const [position, setPosition] = useState(data.position)

     function handleChange(e) {
         setExperience(e.target.value)
     }


     function handleNextClick(){
         data.setData([{experience}, {lastWorkPlace}, {position}, ])
     }

     return (
         <div>
             <form action="">

                 <div onChange={handleChange}>
                     <input type="radio" value="true" name="experience"/> yes
                     <input type="radio" value="false" name="experience"/> no
                 </div>                 {experience ? <div>
                     <input type="text" placeholder={"last work place"} onChange={(e) => setLastWorkplace(e.target.value)}/>
                     <input type="text" placeholder={"position"} onChange={(e) => setPosition(e.target.value)}/>
                 </div> : null}
             </form>
             <Link to={"/thirdPage"} onClick={handleNextClick}>prev</Link>

             <Link to={"/fifthPage"} onClick={handleNextClick}>submit</Link>

         </div>
     )
 }

 export default FifthPage