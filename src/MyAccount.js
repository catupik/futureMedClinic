import { useNavigate } from "react-router-dom";
import BMICalculator from "./BMICalculator";

function MyAccount() {
  const navigate = useNavigate();


  return (
    <div>
      <div className="nav-nav">
        {/* eslint-disable-next-line */}
        <a href="#" onClick={() => navigate("/")}>
          Home/{" "}
        </a>
        <p>My Account</p>
      </div>

       <BMICalculator/>
    </div>
  );
}

export default MyAccount;
