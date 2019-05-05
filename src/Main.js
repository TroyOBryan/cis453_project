import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div id="blue">
                <img src={process.env.PUBLIC_URL + '/images/ob.jpg'} alt="OBgames"/>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/reviews">Reviews</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="content" id="green">
                <Route exact path="/" component={Home}/>
                <Route path="/reviews" component={Reviews}/>
                <Route path="/contact" component={Contact}/>
                </div>
                <div className="feed" id="red">
                <div id="body">
                <div id="feedControl">Loading...</div>
                </div>
                </div>

           
        </HashRouter>
        );
    }
}

export default Main;