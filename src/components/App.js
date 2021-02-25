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
  const [error,setError] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values,name: event.target.value});
    setValid(false);
  };

  const handleEmailInputChange = (event) => {
    setValues({...values,email: event.target.value});
    setValid(false);
  };

  const handleGenderInputChange = (event) => {
    setValues({...values,gender: event.target.value});
    setValid(false);
  };

  const handlePhoneNumberInputChange = (event) => {
    setValues({...values,phonenumber: event.target.value});
    setValid(false);
  };

  const handlePasswordInputChange = (event) => {
    setValues({...values,password: event.target.value});
    setValid(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.email  && values.phonenumber && values.password && values.password.length > 5 && values.email.includes("@") && isNaN(values.name))
    {
      setValid(true);
      setError(false);
    }
    if(!isNaN(values.name)){
      setError(true);
    }else if(!values.name){
      setError(true);
    }else if(values.email && !values.email.includes("@")){
      setError(true);
    }else if(!values.email){
      setError(true);
    }else if(!values.phonenumber){
      setError(true);
    }else if(values.password && document.getElementById('password').value.length < 6){
      setError(true);
    }else if(!values.password){
      setError(true);
    }
    else{
      setError(false);
    }
    setSubmitted(true);
  }
  return (
    <div id="main">
      <form id="register-form" onSubmit={handleSubmit}>
        {submitted && valid && !error ? <div className="success-message">Hello {values.email.split('@')[0]}</div> : null}
        <input data-testid='name' className="form-field" onChange={handleNameInputChange} 
        value={values.name} type="text" placeholder="Name" name="Name">
        </input>
        {error && !values.name ? <span>Name Error</span> : null}
        {error && values.name && !isNaN(values.name) ? <span>Name is not alphanumeric</span> : null}
        <input data-testid='email' className="form-field" value={values.email} onChange={handleEmailInputChange}
        type="email" placeholder="Email" name="email"></input>
        {error && !values.email ? <span>Email Error</span> : null}
        {error && values.email && !values.email.includes("@") ? <span>Email must contain @</span> : null}
        <select data-testid='gender' className="form-field" value={values.gender} onChange={handleGenderInputChange}>
            <option defaultValue="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
        </select>
        <input data-testid='phoneNumber' className="form-field" value={values.phonenumber} onChange={handlePhoneNumberInputChange} type="number" placeholder="phone" ></input>
        {error && !values.phonenumber ? <span>Phone Number Error</span> : null}
        <input data-testid='password' id="password" type='password' className="form-field" value={values.password} onChange={handlePasswordInputChange} placeholder="password"></input>
        {error && !values.password ? <span>Password Error</span> : null}
        {error && values.password && document.getElementById('password').value.length < 6 ? <span>Password must contain atleast 6 letters</span> : null}
        <button data-testid='submit' className="form-field" id="submit" placeholder="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
