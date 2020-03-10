import React, { Component } from 'react'
import '../style/notfound.css'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page can't be found</h2>
                </div>
                <div style={{paddingTop:'50px'}}>
                    <Link to="/">
                        Go TO Homepage
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
