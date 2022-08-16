import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Create from "./Create";
import Navbar from "./NavBar";
import useFetch from "./useFetch";



function App() {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos");

  return (
    <div className="bg-white min-h-screen  flex">
      <Router forceRefresh={true}>
        <div className=" w-1/5">
          <Navbar todos={todos}/>
        </div>
        <div className=" w-4/5">
          <Main  todos={todos} isPending={isPending} error={error}/>
        </div>
      </Router>
    </div>
  );
}
export default App;
