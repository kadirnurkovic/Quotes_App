import { useContext } from "react";
import { QuotesContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Logout() {
  const { token, setToken } = useContext(QuotesContext);
  const logout = () => {
    setToken(null);
    localStorage.setItem("token", null);
    console.log(token);
  };
  return (
    <div>
      <button onClick={logout}>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}
