import React, { Component } from "react";
import "../styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Options from "./options";
import OneOption from "./OneOption";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

/* function App() {
  return(
    <>
      <OneOption title="search"/>
      <OneOption title="view"/>
      <OneOption title="add"/>
    </>
  ) ;
} 

export default App;*/


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mainViewMode: '',
    }
  }

  changeMode = (newMode) => {
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
        <OneOption title="search" modeChanger={this.changeMode}/>
        <OneOption title="view" modeChanger={this.changeMode}/>
        <OneOption title="add" modeChanger={this.changeMode}/>
        { view() }
      </>      
    );
  }
}