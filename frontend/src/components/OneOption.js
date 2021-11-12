import React, { Component } from "react";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

export default class OneOption extends Component {
    constructor(props) {
        super(props);
    }

    //Set the viewMode of App
    handleClick = () => {
        this.props.setView(this.props.title);
    }
  
    render = () => {
        return(
            <>
                <button className="btn btn-primary" onClick={this.handleClick}>{this.props.title}</button>
            </> 
        );
    }
}