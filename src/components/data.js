let data = {
    email: "",
    name: "",
    surname: "",
    gender: "",
    age: "",
    phone:"",
    country:"",
    address:"",
    university:"",
    yearOfEntering:"",
    yearOfGraduate:"",
    experience:false,
    position:"",
    lastPlaceOfWork:"",
    specialty: "",
    setData(arrOfData) {
        for (let i = 0; i < arrOfData.length; i++) {
            for (const key in arrOfData[i]) {
                data[key] = arrOfData[i][key]
            }
        }
    }
}
export default data