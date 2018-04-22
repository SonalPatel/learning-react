import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ToDoList from "./components/ToDoList.js";
import Books from "./components/Books.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sonal testing new create app</h1>
        </header>
        <p className="App-intro">
          First create a new createREact App. Had to fix global node install as
          npx didnt work.
        </p>
        <p className="App-intro">Second, run it. Open in localhost:3000</p>
        <p className="App-intro">
          Third, I created a ToDoList in my app using components and REACT
          syntax. I followed a video tutorial to do this and chnaged it slightly
          to fit into the way Brooke showed me to set up a component. I had to
          de bug along the along the way.Whilst doing this learnt to use THEN.
          and setState and pevState amongst others. LOTS TO READ UP ON.
        </p>
        <p className="App-intro">
          Fourth, referring to the react docs I used Fetch to call an API. This
          took hours and hours to do. I had issues with using localhost. Learnt
          about ComponentDidMount as a way to replace onload in JS. and using
          callbacks. and using keyword THEN. lots more to learn on CALLING AND
          OUTPUTTING DATA FROM APIS.
        </p>
        <p className="App-intro">
          Fifth, TRIED TO LOOK AT THE jg APIS - DID NOT UNDERSTAND IT AT ALL:
          WILL NEED SOMEONE TO EXPLAIN HOW TO USE THEM TO ME.
        </p>
        <p className="App-intro">six, uploaded my code to github.</p>
        <p className="App-intro" />

        <ToDoList />
        <Books />
      </div>
    );
  }
}

export default App;
