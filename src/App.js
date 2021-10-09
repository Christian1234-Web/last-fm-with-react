
import React from "react";
import "./index.css";
import "./App.css";
import Index from "./pages/Index";
import Chart from "./pages/Chart"
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(){
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
          <Route path="/Index" component={Index} />
                <Route path="/chart" component={Chart} />
                <Route path="/sign" component={SignUp} />
        {/* <Route path="*">
          <NotFound/>
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}
export default App;	 
		


