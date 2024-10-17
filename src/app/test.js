"use client";

import axios from "axios"
import {useEffect, useState} from "react"


export default function Index(){
    
    const[message, setMessage] = useState("default state");
    function func()
    {
        axios.get("http://localhost:5000/api/hello")
        .then((response) => {
            setMessage(response.data.message)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <div>
            <h1>{message}</h1> 
            <button onClick={func} className="p-2 bg-blue-700 rounded-lg hover:bg-purple-300">click</button>
        </div>
    )  
}