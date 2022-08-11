
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import TodoDetail from "./TodoDetail";

function Main() {
  return (
    
     
        <Switch>
          <Route exact path="/">
            <Home  />
          </Route>
          <Route path="/create">
            <Create  />
          </Route>
          <Route path="/todos/:id">
            <TodoDetail  />
          </Route>
          <Route path="*">
            <div>
              404
            </div>
          </Route>
        </Switch>

  );
}
export default Main;
