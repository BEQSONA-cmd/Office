"use client";

import { useState } from "react";
import axios from "axios";

let formData = 
{
  name: "",
  email: "",
  message: "",
};

const sendFormData = async () => 
{
  try 
  {
    const response = await axios.post("http://localhost:5000/api/data", formData);
    console.log(response.data);
    return response.data;
  }
  catch (error) 
  {
    console.error("Error sending data:", error);
    throw error;
  }
};

const handleInputChange = (e, setFormData) => 
{
  const { name, value } = e.target;
  formData = { ...formData, [name]: value };
  setFormData(formData);
};


const handleSubmit = async (e, setFormData) => 
{
  e.preventDefault();
  try 
  {
    await sendFormData();
    handleReset(setFormData);

    window.location.href = "/send";
  } 
  catch (error) 
  {
    console.error("Error submitting form:", error);
  }
};

const handleReset = (setFormData) => 
{
  formData = { name: "", email: "", message: "" };
  setFormData(formData);
};

const InputField = ({ type, name, placeholder, value, onChange }) => 
(
  <div className="w-full md:w-1/2 p-4">
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full bg-gray-800 border p-2 rounded-lg"
      required
      value={value}
      onChange={onChange}
    />
  </div>
);

const TextAreaField = ({ name, placeholder, value, onChange }) => 
(
  <div className="w-full p-4">
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      className="w-full bg-gray-800 border p-2 rounded-lg"
      required
      value={value}
      onChange={onChange}
    ></textarea>
  </div>
);

export default function Contact() {
  const [formDataState, setFormData] = useState(formData);

  return (
    <article id="contact" className="wrapper style4 py-16 bg-gray-900">
      <div className="container mx-auto">
        <header>
          <h2 className="text-3xl font-semibold">Don't hesitate to reach out.</h2>
          <p>Please enter your email, phone number, or any other contact information so I can get back to you with an answer.</p>
        </header>
        <form className="w-full flex flex-wrap" onSubmit={(e) => handleSubmit(e, setFormData)}>
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            value={formDataState.name}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <InputField
            type="text"
            name="email"
            placeholder="Phone Number / Email"
            value={formDataState.email}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <TextAreaField
            name="message"
            placeholder="Message"
            value={formDataState.message}
            onChange={(e) => handleInputChange(e, setFormData)}
          />
          <div className="w-full flex justify-start p-4">
            <button
              type="submit"
              className="shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
            <button
              type="reset"
              className="ml-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
              onClick={() => handleReset(setFormData)}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}
