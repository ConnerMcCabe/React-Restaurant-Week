import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">
                <div className="sponsorNewsletterContainer">
                    <div className="sponsorContainer">
                        <h3>Sponsor</h3>
                        <p>Austin Restaurant weeks brought to you by...</p>
                    </div>
                    <div className="newsletterContainer">
                        <input placeholder="enter your email"></input>
                        <h3>ARW links to about, FAQ, Contact</h3>
                        <h3>CTFB links to about, FAQ, Contact</h3>
                    </div>
                </div>
                <div>copy right, Social links, button to scroll to top</div>
            </div>
            
        )
    }
}
