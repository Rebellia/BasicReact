import React, { Component } from "react";
import Movies from "./movies";
import InsertMovie from "./InsertMovie";

export default class OneOption extends Component {
    constructor() {
        super();
        this.state = {
            buttonClicked: false,
            myChoice: '',
        }
    }
  
    render = () => {
        return(
            <>
                <button className="btn btn-primary" onClick={this.nextMove}>{this.props.title}</button>
            </>
            
        );
    }
}