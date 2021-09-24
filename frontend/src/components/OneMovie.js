import React, { Component } from "react";
import DeleteMovie from "./DeleteMovie";


export default class OneMovie extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
        }
    }
    
    showDeleteButton = (event) => {
        this.setState({isActive: true});
      }
    
      hideDeleteButton = (event) => {
        this.setState({isActive: false});
      }
    
    
    render = () => {
        return (
        <div className="card">
            <div onMouseEnter={this.showDeleteButton} onMouseLeave={this.hideDeleteButton}>
                <p>
                    <b>Title</b> : {this.props.title}
                </p>
                <p>
                    <b>Genre</b> : {this.props.genre}
                </p>
                <p>
                    <b>Date Added</b> : {new Date(this.props.date_added).toLocaleString()}
                </p>
                <br />
                {this.state.isActive ? <DeleteMovie title={this.props.title}/> : null }
            </div>
            
        </div>
        );
    }
}