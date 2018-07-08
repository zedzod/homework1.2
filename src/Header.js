import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Get All Books
                </NavLink>
                <NavLink exact to="/bookSearch" activeStyle={this.active}>
                Get Books By Language and Author
                </NavLink>
                <NavLink to="/postBook" activeStyle={this.active}>
                POST
                </NavLink>
            </div>
);}}
export default Header;