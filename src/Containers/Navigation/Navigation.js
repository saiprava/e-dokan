import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navigation.css";

function navigation(){
    return(
        <div className="Nav">
            <ul className="Navul">
                <li><NavLink className="notActive" activeClassName="active" to="/">HOME</NavLink></li>
                <li><NavLink className="notActive" activeClassName="active" to="/sign-In">Sign-in</NavLink></li>
                <li><NavLink className="notActive" activeClassName="active" to="/cart">Cart</NavLink></li>
            </ul>
        </div>
    );
}

export default navigation;