import React, {useState} from "react";
import {Link, Route, Routes} from "react-router-dom"
import data from "./data";

 function FourthPage() {
     const [university, setUniversity] = useState(data.university)
     const [yearOfEntering, setYearOfEntering] = useState(data.yearOfEntering)
     const [yearOfGraduate, setyearOfGraduate] = useState(data.yearOfGraduate)
     const [specialty, setSpecialty] = useState(data.specialty)



     function handleNextClick(){
         data.setData([{university}, {yearOfEntering}, {yearOfGraduate}, {specialty}])
     }

     return (
         <div>
             <form action="">

                 <input type="text" value={university} placeholder={"university"} onChange={(e) => setUniversity(e.target.value)}/>
                 <input type="text" value={yearOfEntering} placeholder={"year of entering"} onChange={(e) => setYearOfEntering(e.target.value)}/>
                 <input type="text" value={yearOfGraduate} placeholder={"year of graduate"} onChange={(e) => setyearOfGraduate(e.target.value)}/>
                 <input type="text" value={specialty} placeholder={"specialty"} onChange={(e) => setSpecialty(e.target.value)}/>


             </form>
             <Link to={"/thirdPage"} onClick={handleNextClick}>prev</Link>

             <Link to={"/fifthPage"} onClick={handleNextClick}>next</Link>

         </div>
     )

 }

 export default FourthPage