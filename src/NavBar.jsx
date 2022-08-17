// import {Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";
import PieChart from "./Piegraph";

const Navbar = ({todos}) => {
  return (

    <div className="bg-neutral-200 h-full shadow-xl border-r-2  ">
      <div className="text-center text-2xl font-bold flex items-center justify-around bg-neutral-600 py-6 shadow-sm ">
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

      <div className=" flex flex-col mx-5  ">
      <div className="border-l-4 p-1 text-center text- my-5 mb-16 border-neutral-600">
        <p className="text-lg">“Each day I will accomplish one thing on my to do list.”</p>
        <p className="text-gray-600">― Lailah Gifty Akita</p>
      </div>

        <div className="h-0.5 bg-neutral-700 mb-6"></div>
        
      <div className="flex items-center uppercase justify-start space-x-2">
          <div className="bg-amber-500 w-3 h-3 rounded-full"></div>
          <Link
            to="/" className=" hover:text-green-500 transition-all duration-300">
            On Progress
          </Link>
          
        </div>
        <div className="flex items-center justify-start  my-4  space-x-2 uppercase">
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          <Link
            to="/donelist" className=" hover:text-green-500 transition-all duration-300">
            Done
          </Link>
          
        </div>
        <div className="flex items-center justify-start space-x-2 uppercase">
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
          <Link
            to="/missed" className=" hover:text-green-500 transition-all duration-300">
            Missed
          </Link>
          
        </div>
      </div>
      <div>
        <PieChart  data={todos} />
      </div>
      
    </div>
  );
};

export default Navbar;
