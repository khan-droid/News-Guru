
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
    return (
      <div>
        <Router> 
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="general" country="in" category="general"/></Route> 
          <Route exact path="/general"><News key="general" country="in" category="general"/></Route> 
          <Route exact path="/business"><News key="business" country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment"/></Route> 
          <Route exact path="/health"><News key="health" country="in" category="health"/></Route> 
          <Route exact path="/science"><News key="science" country="in" category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
}
// THEORY
// React Component Cycle-"The series of events that happen from the mounting of a React component to its Unmounting"
//  There are three stages in "React Component Cycle"
//  1. Mounting - Birth of a componenet
//  2. Update - Growth of your component
//  3. Unmount - Death of the component
// COMPULSORY : Watch theory explained by codewithharry in : https://www.youtube.com/watch?v=abjeWy4sZiU&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=34
//              watch theory of hook explained by codewithharry in videoNo:38
