import React from 'react'
import '../App.css';

const Contact = () => {
    return (
        <div className="container">
            <br />
            <br />
            <div className="container">
                <ul className="social-media">
                    <li class="divider"></li>
                    <br />
                    <li><a href="https://www.linkedin.com/in/lindylim/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <br />
                    <li class="divider"></li>
                    <br />
                    <li><a href="https://github.com/wallflower6" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <br />
                    <li class="divider"></li>
                    <br />
                    <li><a href="https://codepen.io/wallflower6" target="_blank" rel="noopener noreferrer">Codepen</a></li>
                    <br />
                    <li class="divider"></li>
                </ul>

                <p className="center">Email: lindy.lim.2019@scis.smu.edu.sg</p>
            </div>
        </div>
    )
}

export default Contact;