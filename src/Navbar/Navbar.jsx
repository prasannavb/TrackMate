//Dependencies
import { useNavigate } from "react-router";

//CSS
import "./Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();

  const Logout = () => {
    Navigate("/");
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navbar-Logo"></div>
        <div className="Navbar-title">
          <h1>TrackMate</h1>
        </div>
        <div className="Navbar-btns">
          <button onClick={Logout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
