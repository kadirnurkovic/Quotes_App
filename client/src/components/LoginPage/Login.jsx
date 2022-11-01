import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";
import axios from "axios"


export default function () {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUserName = (e) => {
    setUserName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const submit = () => {
    axios.post('http://localhost:8000/sessions' , {
      username: userName,
      password: password
    })
  }
  
  return (
    <div className="login-class">
      <div>This is Login page</div>
      <div className="inputs-class">
        <form>
          <div>
            <input type="text" value={userName} onChange={handleUserName} />
          </div>
          <div>
            <input type="password" value={password} placeholder="password" onChange={handlePassword}/>
          </div>
          <button type="submit" onClick={submit}>Log In</button>
        </form>
      </div>
    </div>
  );
}
