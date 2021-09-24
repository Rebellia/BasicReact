import React, { Component } from "react";
import axios from "axios";
import OneMovie from "./OneMovie";

export default class Movies extends Component {
  constructor() {
      super();
      this.state = {
          data: [],
          isActive: false,
          buttonClicked: false,
      };
  }

  //gets the info from the database 
  componentDidMount = () =>  {
      axios.get('http://localhost:4000/movies/getMovies').then((res) => {
          this.setState({data: res.data, message: ''});
      });
  }
  showMovies = () => {
    this.setState({buttonClicked: true});
  }
  
  renderMovies = () => {
    if (this.state.buttonClicked) {    
      return (
        this.state.data.map(data => (
          <OneMovie title={data.title} genre={data.genre} date_added={data.date_added}/>
        ))
        
      );
    }
  }


  render = () => {
    return (
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-xs-12" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" style={{ position: "absolute", marginLeft: "50%" }} onClick={this.showMovies}> Display Movies</button>
            <div className="movieMain">
              {this.renderMovies()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}