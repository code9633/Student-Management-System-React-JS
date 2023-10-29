import React, {useState, useEffect} from "react"
import axios  from "axios"

export default function AllStudent(){

    const [students, setStudents] = useState([])

    useEffect(()=>{
        const getStudent = ()=>{
            axios.get("http://localhost:8070/student").then((res)=>{
                // console.log(res.data)
                setStudents(res.data)    // fetch all the data to the State using useState function name called setStudent()
            }).catch((err)=>{
                alert(err.message)
            })
        }
        getStudent()
    }, [])  // In this useEffect we need to take two things 
    // 01. Where and how we get the data
    // 02. what are we need to take fo options, it is a array

    return(
        <div className="container">
            <h1>All Student</h1>
        </div>
    )
}