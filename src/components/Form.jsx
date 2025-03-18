// import React from "react";
import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChange = (e) =>{
    setUsername(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () =>{
    if(username === "admin" && password === "admin"){
        alert("Berhasil login")
    } else{
        alert("Username atau Password salah!")
    }
  }
  return (
    <div>
      <h5>Username : {username}</h5>
      <h5>Password : {password}</h5>

      <input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}> Login </button>
    </div>
  );
}

export default Form;
