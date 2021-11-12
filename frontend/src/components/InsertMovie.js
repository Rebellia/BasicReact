import React, { Component } from "react";
import axios from "axios";

export default class InsertMovie extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            genre: '',
            date_added: '',
        }
    }

    changeTitle = (event) => {
        this.setState({title: event.target.value}); //Grabs the text of the input box
    }

    changeGenre = (event) => {
        this.setState({genre: event.target.value}); //Grabs the text of the input box
    }

    addMovieToDB = async (event) => {
        event.preventDefault();
        //this.setState({date_added: new Date().toLocaleString()});
        //this.setState({date_added: new Date().toISOString()});
        const newDate = await this.setState({date_added: new Date()});

        const movie = {
            title: this.state.title,
            genre: this.state.genre,
            date_added: this.state.date_added
        };

        axios.post('http://localhost:4000/movies/insertMovie', {movie})
        .then((response) => {
            console.log("MY RESPONSE: \n" + JSON.stringify(response.data));},
            (error) => {console.log("ERROR IN INSERTMOVIE " + JSON.stringify(error.response.data));});
            

    }

    //Ask Andrew why this worked with parentheses and not curly brackets
    renderItems = () => {
        const myDate = new Date(this.state.date_added); //grab the date in ISO Format
        return (
            <>
                <p>New Title: {this.state.title}</p>
                <p>New Genre: {this.state.genre}</p>
                <p>{myDate.toLocaleString()}</p>
            </>
        )
    }        
    
    render() {
        return(
            <form className="insertMovie">
                <label><b>Enter the movie title:   </b></label>
                <input onChange={this.changeTitle}/>
                <br/>
                <label><b>Enter the movie genre:   </b></label>
                <input onChange={this.changeGenre}/>
                <br/>
                <button className="btn btn-primary" onClick={this.addMovieToDB}>Add Movie</button>
                {this.renderItems()}

            </form>
        );
    }
}