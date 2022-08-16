
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import TodoDetail from "./TodoDetail";

function Main({todos,isPending,error}) {
  return (
    
     
        <Switch>
          <Route exact path="/">
            <Home todos={todos} isPending={isPending} error={error} />
          </Route>
          <Route exact path="/create">
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
