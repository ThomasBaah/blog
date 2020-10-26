import React from "react";
import { BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

const Routes =() =>{
return (
<BrowserRouter>
   <Switch>
     <Route exact path="/" >
       <Home />
     </Route>
   </Switch>

</BrowserRouter>
);
};

function App() {
  return (
  <div>
    <Routes/>
  </div>
  );
}

export default App;