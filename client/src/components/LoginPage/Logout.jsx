import { useContext } from "react";
import { QuotesContext } from "../../Context/Context";
import { useNavigate, Link } from "react-router-dom";
import QuotesPage from "./QuotesPage/QuotesPage";
import "./Logout.css";

export default function Logout() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(QuotesContext);
  const logout = () => {
    setToken(null);
    localStorage.setItem("token", null);
    navigate("/");
    console.log(token);
  };
  return (
    <div className="inner-elements">
      <div className="buttons-quote">
        <div>
          <button className="logout-button-class" onClick={logout}>
            Logout
          </button>
        </div>
        <div>
          <Link to="/createquote">
            <button className="quote-button">Create your Quote</button>
          </Link>
        </div>
      </div>
      <div>
        <QuotesPage />
      </div>
    </div>
  );
}
