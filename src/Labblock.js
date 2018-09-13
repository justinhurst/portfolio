import React, { Component } from 'react';
import './App.css';

class LabBlock extends Component {
    render() {
        return (
            <li>
                <div>
                    <iframe src={ this.props.url }></iframe>
                    <h3>{ this.props.title }</h3>
                    <a className="button colored" target="_blank" href={ this.props.url }>Visit</a>
                </div>
            </li>
        );
    }
}


export default LabBlock;
