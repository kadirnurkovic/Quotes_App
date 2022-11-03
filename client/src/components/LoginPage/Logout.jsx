import { useContext } from "react";
import { QuotesContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import QuotesPage from "./QuotesPage/QuotesPage"

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
    <div>
      <button onClick={logout}>
        Logout
      </button>
      <QuotesPage />
    </div>
  );
}
