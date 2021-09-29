import React, { Component } from "react";
import axios from "axios";

export default class DeleteMovie extends Component {
    
    removeMovieFromDB = async (event) => {
        const movieTitle = {
            title: this.props.title
        };

        event.preventDefault();
        
        axios.delete('http://localhost:4000/movies/deleteMovie',{data: movieTitle})
        .then((response) => {
            console.log(response);},
            (error) => {console.log("ERROR IN DELETEMOVIE " + error);});
    }
    
    render() {
        return(
            <button className="btn btn-primary" onClick={this.removeMovieFromDB}> Delete </button>
        );
    }
}