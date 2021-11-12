import React, { Component } from "react";
import axios from "axios";
import OneMovie from "./OneMovie";

export default class Movies extends Component {
  constructor() {
      super();
      this.state = {
          data: [],
      };
  }

  //gets the info from the database 
  componentDidMount = () =>  {
      axios.get('http://localhost:4000/movies/getMovies').then((res) => {
          this.setState({data: res.data, message: ''});
      });
  }
  
  renderMovies = () => {
    return (
      this.state.data.map(data => (
        <OneMovie title={data.title} genre={data.genre} date_added={data.date_added}/>
      ))
      
    );
  }


  render = () => {
    return (
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-xs-12" style={{ textAlign: "center" }}>
            <div className="movieMain">
              {this.renderMovies()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}