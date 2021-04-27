import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/movies";
import InsertMovie from "./components/InsertMovie";

function App() {
  return(
    <>
      <InsertMovie/>
      <br/>
      <Movies />
    </>
  ) ;
}

export default App;