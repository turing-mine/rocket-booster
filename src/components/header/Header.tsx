
import React from 'react'
import './Header.scss'
import logo from './logo.svg'

function Header() {
    return (
        <div className="Header">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p data-metaphor="link">
                    RocketBooster
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ¡Learn React!
                </a>
            </header>
        </div>
    )
}

export default Header

 