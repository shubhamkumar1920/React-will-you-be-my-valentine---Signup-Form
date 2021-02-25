import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [values,setValues] = useState({
    name: "",
    email: "",
    gender: "male",
    phonenumber: "",
    password: "",
  });
  const [submitted,setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values,name: event.target.value});
  };

  const handleEmailInputChange = (event) => {
    setValues({...values,email: event.target.value});
  };

  const handleGenderInputChange = (event) => {
    setValues({...values,gender: event.target.value});
  };

  const handlePhoneNumberInputChange = (event) => {
    setValues({...values,phonenumber: event.target.value});
  };

  const handlePasswordInputChange = (event) => {
    setValues({...values,password: event.target.value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.email  && values.phonenumber && values.password && values.password.length > 5 && values.email.includes("@") && isNaN(values.name))
    {
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
    <div id="main">
      <form id="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Hello {values.email.split('@')[0]}</div> : null}
        <input data-testid='name' className="form-field" onChange={handleNameInputChange} 
        value={values.name}
        type="text"
        placeholder="Name"
        name="Name"
        required>
        </input>
      
        <input data-testid='email' className="form-field" value={values.email} onChange={handleEmailInputChange}
        type="email" placeholder="Email" name="email" required></input>
        <select data-testid='gender' className="form-field" value={values.gender} onChange={handleGenderInputChange}>
            <option defaultValue="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
        </select>
        <input data-testid='phoneNumber' required className="form-field" value={values.phonenumber} onChange={handlePhoneNumberInputChange} type="number" placeholder="phone" ></input>
        <input data-testid='password' required id="password" type='password' className="form-field" value={values.password} onChange={handlePasswordInputChange} placeholder="password"></input>
        <button data-testid='submit' className="form-field" id="submit" placeholder="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;