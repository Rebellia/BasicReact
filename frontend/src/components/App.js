import React, { Component } from "react";
import "../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import OneOption from "./OneOption";
import Search from "./Search";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mainViewMode: 'search',
    }
  }

  setView = (newMode) => {
    this.setState({mainViewMode: newMode});
  }

  render = () => {
    const view = () => {
      switch (this.state.mainViewMode) {
        case "search":
          return <Search/>;
        case "view":
          return <Movies/>;
        case "add":
          return <InsertMovie/>;
        default:
          return <h1>Welcome to our app!</h1>
      }
    }

    return(
      <>
        <div>
          <h2>Who's turn is it?</h2>
          <p>Q'Mariha</p>
          <h2>Last movie watched: </h2>
          <p>Spectre (chosen by Andrew)</p>
        </div>
        <div className="optionsDiv">
          <OneOption title="search" setView = {this.setView}/>
          <OneOption title="view" setView = {this.setView}/>
          <OneOption title="add" setView = {this.setView}/>
        </div>
        { view() }
      </>      
    );
  }
}