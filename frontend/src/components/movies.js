import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
      super();
      this.state = {
          data: [],
          buttonClicked: false
      };
  }

  componentDidMount = () =>  {
      axios.get('http://localhost:4000/getMovies').then((res) => {
          this.setState({data: res.data});
      });
  }

  getMovies = () => {
    this.setState({buttonClicked: true});
  }

  render = () => {
    return (
      <div className="container-fluid" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-xs-12" style={{ textAlign: "center" }}>
            <button className="btn btn-primary" style={{ position: "absolute", marginLeft: "50%" }} onClick={this.getMovies}> Click </button>
            <div className="container-fluid" style={{ position: "absolute", textAlign: "center", marginTop: "50px" }}>
              {this.state.buttonClicked ? this.state.data.map(data => (
                      <>
                        <p>
                          <b>Title</b> : {data.title}
                        </p>
                        <p>
                          <b>Genre</b> : {data.genre}
                        </p>
                        <hr />
                      </>
                    ))
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}