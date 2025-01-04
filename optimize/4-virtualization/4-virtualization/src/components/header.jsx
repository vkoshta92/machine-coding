import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </header>
  );
};

export default Header;
