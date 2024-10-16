"use client";

import axios from "axios"
import {useEffect, useState} from "react"

export default function Send() 
{
    const[message, setMessage] = useState("not recived answer yet");
    const[main_message, setMain_message] = useState("Waiting for the server to respond");
    
    function func()
    {
        axios.get("http://localhost:5000/send")
        .then(function(response)
        {
            if(response.data.error)
            {
                setMessage(response.data.error)
                setMain_message("Sorry 😟")
            }
            else
            {
                setMessage(response.data.message)
                setMain_message("Thank You!")
            }
        })
        .catch(function(error) 
        {
            console.log(error)
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{main_message}</h1>
        {func()}
        <p className="text-lg mb-4">{message}</p>
        <a href="/" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
          Go Back to Home
        </a>
      </div>
    </div>
  );
}



 {/* <button onClick={func} className="p-2 bg-blue-700 rounded-lg hover:bg-purple-300">click</button> */}
