import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact } from "./index";
import "./App.css"



const App = () => {
  return (
    <div>
    <Router>
     <Navigation />
     <Switch>
       <Route path="/" exact component={() => <Home />} />
       <Route path="/about" exact component={() => <About />} />
       <Route path="/contact" exact component={() => <Contact />} />
     </Switch>
   </Router>
   </div>
  )
}

export default App
