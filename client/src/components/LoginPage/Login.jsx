import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useContext } from "react";
import { QuotesContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { token, setToken } = useContext(QuotesContext);
  const navigate = useNavigate();
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
        localStorage.setItem("token", response.data.accessToken);
        navigate("/quotespage");
        console.log(response.data.accessToken);
      })
      .catch((err) => {
        setToken(null);
        localStorage.setItem("token", null);
      });
  };

  return (
    <div className="login-class">
      <div>Login page</div>
      <div className="inputs-class">
        <form className="form-class">
          <div>
            <input className="i-class"
            placeholder="Username"
            type="text" value={userName} onChange={handleUserName} />
          </div>
          <div>
            <input
              className="i-class"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div>
            <button type="submit" className="b-class" onClick={submit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
