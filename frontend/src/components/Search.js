import React, {Component} from "react";
import axios from "axios";
import OneMovie from "./OneMovie";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            data: [],
        }
    }

    changeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    searchMovieInDB = async (event) => {
        event.preventDefault();

        const movieTitle = this.state.title;

        axios.get('http://localhost:4000/movies/findMovie', {
            params: {
                title: movieTitle
            }
        }).then((res) => {
          this.setState({data: res.data, message: ''});
      });
    }

    renderMovie = () => {
        return (
          this.state.data.map(data => (
            <OneMovie title={data.title} genre={data.genre} date_added={data.date_added}/>
          ))
          
        );
      }

    render() {
        return(
            <>
                <form className="insertMovie">
                    <label><b>Enter the movie title: </b></label>
                    <input onChange={this.changeTitle}/>
                    <br/>
                    <button className="btn btn-primary" onClick={this.searchMovieInDB}>Search Movie</button>
                </form>

                <div className="container-fluid" style={{ marginTop: "30px" }}>
                    <div className="row">
                    <div className="col-xs-12" style={{ textAlign: "center" }}>
                        <div className="movieMain">
                        {this.renderMovie()}
                        </div>
                    </div>
                    </div>
                </div>
            </>
            

        );
    }
}