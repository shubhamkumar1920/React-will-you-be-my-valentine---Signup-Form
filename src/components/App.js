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
  const [error,setError] = useState("");


  const handleOnChange = (event) => {
    setError("");
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
  const checkError = (name,email,phonenumber,password) => {
    let list = [];
    if (name === "" || email === "" || phonenumber === "" || password === "") {
      list.push("All fields are mandatory");
    }
    // name validation
    let names = name.split("");
    let temp = names.filter(
      (x) =>
        !(
          (x <= "z" && x >= "a") ||
          x === " " ||
          (x <= "Z" && x >= "A") ||
          (x >= "0" && x <= "9")
        )
    );
    if (temp.length > 0) {
      list.push("Message: Name is not alphanumeric");
    }
    //email validation
    if (email.indexOf("@") === -1) {
      list.push("Email must contain @");
    }
    //phone Number validation
    if (!Number(phonenumber)) {
      list.push("Phone Number must contain only numbers");
    }
    // password validation
    if (password.length < 6) {
      list.push("Password must contain atleast 6 letters");
    }
    return list;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = checkError(values.name, values.email, values.phonenumber, values.password);
    if (errors.length > 0) {
      setError(errors[0]);
      return;
    }
    setSubmitted(true);
    if(values.name && values.email  && values.phonenumber && values.password && values.password.length > 5 && values.email.includes("@") && isNaN(values.name))
    {
      setValid(true);
    }
  }
  return (
    <div id="main">
      <form id="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Hello {values.email.split('@')[0]}</div> : null}
        {error ? <div className ="error"><h3>{error}</h3></div>: null}
        <input data-testid='name' className="form-field" onChange={handleOnChange} 
        value={values.name} type="text" placeholder="Name" name="Name">
        </input>
        <input data-testid='email' className="form-field" value={values.email} onChange={handleOnChange}
        type="text" placeholder="Email" name="email"></input>
        <select data-testid='gender' className="form-field" value={values.gender} onChange={handleOnChange}>
            <option defaultValue="male">male</option>
            <option value="female">female</option>
            <option value="others">others</option>
        </select>
        <input data-testid='phoneNumber' className="form-field" value={values.phonenumber} onChange={handleOnChange} type="text" placeholder="phone" ></input>
        <input data-testid='password' id="password" type='password' className="form-field" value={values.password} onChange={handleOnChange} placeholder="password"></input>
        <button data-testid='submit' className="form-field" id="submit" placeholder="Submit">Submit</button>
       
      </form>
    </div>
  )
}

export default App;