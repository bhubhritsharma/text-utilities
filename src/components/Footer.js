import {Link} from 'react-router-dom';
import React from 'react';

export default function Footer(props) {
    return (
        <footer style={props.myStyle}>
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-md-evenly">
                <Link to="/" style={props.myStyle}>Home</Link>
                <Link to="/about" style={props.myStyle}>About</Link>
            </div>
        </footer>
    )
}