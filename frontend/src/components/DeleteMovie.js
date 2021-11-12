import React, { Component } from "react";
import axios from "axios";

export default class DeleteMovie extends Component {
    
    removeMovieFromDB = async (event) => {
        event.preventDefault();
        
        const movieTitle = {
            title: this.props.title
        };        
        
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