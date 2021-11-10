import React, { Component } from "react";
import "../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import OneOption from "./OneOption";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mainViewMode: '',
    }
  }

  setView = (newMode) => {
    this.setState({mainViewMode: newMode});
  }

  render = () => {
    const view = () => {
      switch (this.state.mainViewMode) {
        case "search":
          break;
        case "view":
          return <Movies/>;
          break;
        case "add":
          return <InsertMovie/>;
          break;
        default:
          return <h1>Welcome to our app!</h1>
      }
    }

    return(
      <>
        <OneOption title="search" setView = {this.setView}/>
        <OneOption title="view" setView = {this.setView}/>
        <OneOption title="add" setView = {this.setView}/>
        { view() }
      </>      
    );
  }
}