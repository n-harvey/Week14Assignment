import React from "react";
import logo from "../moviedb.jpg"

export default class navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                 Movie DB: Reviews with React
                </a>
            </div>
            </nav>
        )
    }
}