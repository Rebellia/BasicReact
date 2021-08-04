import React, { Component } from "react";
import axios from "axios";

export default class DeleteMovie extends Component {
    removeMovieFromDB = async (event) => {
        const removeMovie = axios.delete('http://localhost:4000/movies/deleteMovie',{

        }).then((response) => {console.log(response);}, (error) => {console.log("ERROR IN INSERTMOVIE " + error.response.data);});
    }
    
    render() {
        return(

        );
    }
}