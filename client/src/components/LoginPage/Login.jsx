import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useContext } from "react";
import { QuotesContext } from "../../Context/Context";
import { Link } from "react-router-dom"

export default function Login() {
  const { token, setToken } = useContext(QuotesContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/sessions", {
        username: userName,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setToken(response.data.accessToken);
      }).then((data) => localStorage.setItem("token" , token))
  };

  return (
    <div className="login-class">
      <div>This is Login page</div>
      <div className="inputs-class">
        <form>
          <div>
            <input type="text" value={userName} onChange={handleUserName} />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={handlePassword}
            />
          </div>
          
          <button type="submit" onClick={submit}>
          {token !== null ? ( 
          <Link to="/quotespage">
            Log In
          </Link>) : 'Log in'} 
          </button>
          
        </form>
      </div>
    </div>
  );
}
