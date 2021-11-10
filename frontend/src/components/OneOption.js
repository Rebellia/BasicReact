import React, { Component } from "react";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

export default class OneOption extends Component {
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }

    handleClick = () => {
        //this.props.changeMode({this.props.title});
        const title = this.props.title;
        this.props.setView(title);
    }
  
    render = () => {
        return(
            <>
                <button className="btn btn-primary" onClick={this.handleClick}>{this.props.title}</button>
            </> 
        );
    }
}