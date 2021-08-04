import React, { Component } from "react";
import axios from "axios";

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

  showDeleteButton = (event) => {
    console.log("I'm hovering!");
    this.setState({isActive: true});
  }

  hideDeleteButton = (event) => {
    console.log("I've left!");
    this.setState({isActive: false});
  }

  showMovies = () => {
    this.setState({buttonClicked: true});
  }
  
  renderMovies = () => {
    if (this.state.buttonClicked) {    
      return (
        this.state.data.map(data => (
          <>
            <div className="card">
              <div onMouseEnter={this.showDeleteButton} onMouseLeave={this.hideDeleteButton}>
                <p>
                  <b>Title</b> : {data.title}
                </p>
                <p>
                  <b>Genre</b> : {data.genre}
                </p>
                <p>
                  <b>Date Added</b> : {new Date(data.date_added).toLocaleString()}
                </p>
                <br />
                {/* <div onMouseEnter={this.showDeleteButton} onMouseLeave={this.hideDeleteButton}>
                  {this.state.isActive ? <button> Delete </button> : null }
                </div> */}
                {this.state.isActive ? <button> Delete </button> : null }
              </div>
              
            </div>
            
          </>
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