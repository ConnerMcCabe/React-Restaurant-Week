import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <nav>
                    <li>Feed it Forward</li>
                    <li>Find a Restaurant</li>
                    <li>Resturant Registration</li>
                    <li>Sponsors</li>
                </nav>
            </div>
        )
    }
}
