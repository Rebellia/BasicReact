import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/movies";
import InsertMovie from "./components/InsertMovie";

function App() {
  return(
    <>
      <div className="MovieDiv">
        <p>Add your movie here</p>
      </div>
      <InsertMovie/>
      <br/>
      <div className="MovieDiv">
        <p>Display/Hide your movies here</p>
      </div>
      <Movies />
    </>
  ) ;
}

export default App;