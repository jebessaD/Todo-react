// import {Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-neutral-200 h-full shadow-xl border-r-2 fixed w-1/5">
      <div className="text-center text-2xl font-bold flex items-center justify-around bg-neutral-600 py-4 shadow-sm ">
        <Link to="/" className="text-green-400 w-4/5">
          TODO
        </Link>
        <Link
          to="/create"
          className="text-white rounded-full h-8 w-8 hover:bg-neutral-700"
        >
          +
        </Link>
      </div>

      <div className="uppercase flex flex-col mx-5">
        <Link
          to="/"
          className="hover:text-green-500 transition-all duration-300"
        >
          Todo
        </Link>
        <Link
          to="/create"
          className="hover:text-green-500 transition-all duration-300"
        >
          Done{" "}
        </Link>
        <Link
          to="/"
          className="hover:text-green-500 transition-all duration-300"
        >
          missing
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
