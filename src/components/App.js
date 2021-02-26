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
  const [errorAll,setErrorAll] = useState(false);
  const [errorName,setErrorName] = useState(false);
  const [errorEmail,setErrorEmail] = useState(false);
  const [errorPhone,setErrorPhone] = useState(false);
  const [errorPass,setErrorPass] = useState(false);


  const handleOnChange = (event) => {
    if (event.target.getAttribute("data-testid") === "name") {
      setValues({...values,name: event.target.value});
      setValid(false);
    } else if (event.target.getAttribute("data-testid") === "email") {
      setValues({...values,email: event.target.value});
      setValid(false);
    } else if (event.target.getAttribute("data-testid") === "gender") {
      setValues({...values,gender: event.target.value});
      setValid(false);
    } else if (event.target.getAttribute("data-testid") === "phoneNumber") {
      setValues({...values,phonenumber: event.target.value});
      setValid(false);
    } else if (event.target.getAttribute("data-testid") === "password") {
      setValues({...values,password: event.target.value});
      setValid(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name && !values.email && !values.phonenumber || !password) {
      setErrorAll(true);
      setErrorName(false);
      setErrorPass(false);
      setErrorEmail(false);
      setErrorPhone(false);
    }else if(/[^0-9a-zA-Z]/.test(values.name) || !values.name){
      setErrorName(true);
      setErrorAll(false);
      setErrorPass(false);
      setErrorEmail(false);
      setErrorPhone(false);
    }else if(!values.email.includes("@")){
      setErrorEmail(true);
      setErrorAll(false);
      setErrorName(false);
      setErrorPass(false);
      setErrorPhone(false);
    }else if(!Number(values.phonenumber)){
      setErrorPhone(true);
      setErrorAll(false);
      setErrorName(false);
      setErrorEmail(false);
      setErrorPass(false);
      ;
    }else if(values.password.length < 6){
      setErrorPass(true);
      setErrorAll(false);
      setErrorName(false);
      setErrorEmail(false);
      setErrorPhone(false);
    }else{
      setErrorAll(false);
      setErrorName(false);
      setErrorPass(false);
      setErrorEmail(false);
      setErrorPhone(false);
    }
    if(values.name && values.email  && values.phonenumber && values.password && values.password.length > 5 && values.email.includes("@") && isNaN(values.name))
    {
      setValid(true);
      setErrorAll(false);
      setErrorName(false);
      setErrorPass(false);
      setErrorEmail(false);
      setErrorPhone(false);
    }
    setSubmitted(true);
  }
  return (
    <div id="main">
      <form id="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Hello {values.email.split('@')[0]}</div> : null}
        <input data-testid='name' className="form-field" onChange={handleOnChange} 
        value={values.name} type="text" placeholder="Name" name="Name">
        </input>
        {errorAll ? <span>All fields are mandatory</span> : null}
        {/* {error && !values.name ? <span>Name Error</span> : null} */}
        {errorName ? <span>Name is not alphanumeric</span> : null}
        <input data-testid='email' className="form-field" value={values.email} onChange={handleOnChange}
        type="text" placeholder="Email" name="email"></input>
        {errorEmail ? <span>Email must contain @</span> : null}
        <select data-testid='gender' className="form-field" value={values.gender} onChange={handleOnChange}>
            <option defaultValue="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
        </select>
        <input data-testid='phoneNumber' className="form-field" value={values.phonenumber} onChange={handleOnChange} type="text" placeholder="phone" ></input>
        {errorPhone ? <span>Phone Number Error</span> : null}
        <input data-testid='password' id="password" type='password' className="form-field" value={values.password} onChange={handleOnChange} placeholder="password"></input>
        {errorPass ? <span>Password must contain atleast 6 letters</span> : null}
        <button data-testid='submit' className="form-field" id="submit" placeholder="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;