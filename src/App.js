import './App.css';
import React, {useState} from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router> 
        
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" category="general"/></Route> 
          <Route exact path="/general"><News   setProgress={setProgress} key="general" category="general"/></Route> 
          <Route exact path="/business"><News   setProgress={setProgress} key="business" category="business"/></Route> 
          <Route exact path="/entertainment"><News   setProgress={setProgress} key="entertainment" category="entertainment"/></Route> 
          <Route exact path="/health"><News   setProgress={setProgress} key="health" category="health"/></Route> 
          <Route exact path="/science"><News   setProgress={setProgress} key="science" category="science"/></Route> 
          <Route exact path="/sports"><News   setProgress={setProgress} key="sports" category="sports"/></Route> 
          <Route exact path="/technology"><News   setProgress={setProgress} key="technology" category="technology"/></Route> 
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
