import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Create from "./Create";
import Navbar from "./NavBar";

function App() {
  return (
    <div className="bg-white min-h-screen w-full flex">
      <Router>
        <div className=" w-1/5">
          <Navbar />
        </div>
        <div className=" w-4/5">
          <Main />
        </div>
      </Router>
    </div>
  );
}
export default App;
