import React , {useState} from "react"
import axios from "axios"

function AddStudent(){

    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [gender, setGender] = useState("")

    function sendData(e){
        // when clicking submit button , preventing the redirect the page
        e.preventDefault()
        // create the javascript object
        const newStudent = {
            name, 
            age, 
            gender
        }
        // if authenticatio in here need pass the 3 parameters with authentication
        // neither pass the two parameters (bakcend Url, js object that is needed to pass to the backend)
        axios.post("http://localhost:8070/student/add", newStudent).then(()=>{
            alert('New student added')
            // reset the setName, setAge, setgender to clear the text field
            setName("")
            setAge("")
            setGender("")    

        }).catch((err)=>{
            alert(err)
        })
    
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor = "name">Name</label>
                    <input type="text" className="form-control" id="name" value={name}
                    placeholder="Enter Student Name" onChange={(e) =>{
                        setName(e.target.value)
                    } }/>
                </div>
                <div className="form-group">
                    <label htmlFor = "age">Age</label>
                    <input type="text" className="form-control" id="age" value={age}
                    placeholder="Enter Student Age" onChange={(e) =>{
                        setAge(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor = "gender">Gender</label>
                    <input type="text" className="form-control" id="Gender" value={gender}
                     placeholder="Enter Student Gender" onChange={(e)=>{
                        setGender(e.target.value)
                     }}/>
                </div>
 
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent