import React, { Component } from "react";
import OneOption from "./OneOption";

export default class Options extends Component {
    constructor() {
        super();
        this.state = {
            options: ['search', 'view', 'add']
        };
    }

    render = () => {
        return (
            <div className="container-fluid" style={{ marginTop: "30px" }}>
            <div className="row">
                <div className="col-xs-12" style={{ textAlign: "center" }}>
                <div className="movieMain">
                    {this.state.options.map(data => ( <OneOption title={data}/> ))}
                </div>
                </div>
            </div>
            </div>
        );
    }
}