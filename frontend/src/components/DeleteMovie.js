import React, { Component } from "react";
import axios from "axios";

export default class DeleteMovie extends Component {
    removeMovieFromDB = async (event) => {
        event.preventDefault();
        const removeMovie = axios.delete('http://localhost:4000/movies/deleteMovie',
        { data: {title: this.props.title}       }).then((response) => {console.log(response);}, (error) => {console.log("ERROR IN DELETEMOVIE " + error);});
    }
    
    render() {
        return(
            <button type="button" onClick={this.removeMovieFromDB}> Delete </button>
        );
    }
}