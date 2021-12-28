import React, {Component} from "react";

import './Calculator.css';

import Button from "../components/Button";

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <h1>Oiiiii, {this.props.name} </h1> 
                <button></button>
                <button>jUMENTO DEVORADOR</button>
                <button>SHrek</button>
                <button>p</button>
                <button>Vinagre</button>
                
                
            </div>
        )
    }
}