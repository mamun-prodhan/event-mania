import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("successfully signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/gallary">Gallary</NavLink>
          </li>
          <li>
            <NavLink to="/vlogs">Blogs</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ps-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl p-0">
          Event Mania
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 px-1 font-bold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex items-center gap-1 md:gap-3 mx-0 md:mx-6">
            <img
              className="w-8 md:w-10 h-8 md:h-10 border-2 rounded-full"
              src={user.photoURL}
              alt="Photo"
            />
            <p className="text-xs md:text-base font-normal md:font-semibold hidden md:block">
              {user.displayName}
            </p>
            <p className="text-xs md:text-base font-normal md:font-semibold block md:hidden">
              {user.displayName && user.displayName.length > 6
                ? user.displayName.slice(0, 6) + ".."
                : user.displayName}
            </p>
          </div>
        )}
        {user ? (
          <Link
            onClick={handleSignOut}
            className="px-3 text-sm md:text-base font-bold"
          >
            Logout
          </Link>
        ) : (
          <>
            <NavLink
              className=" me-2 md:me-10 font-bold text-sm md:text-base"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="font-bold mx-3  text-sm md:text-base"
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
