import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="NavBar">
                    <Link className="Links1" to={'/tweets'}>All Tweets</Link>
                    <Link className="Links1" to={'/profile'}>Profile</Link>
                    <Link className="Links1" to={'/new_tweet'}>Write a Tweet</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="NavBar">
                    <Link className="Links2" to={'/signup'}>Signup</Link>
                    <Link className="Links2" to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h1>Chirper</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;