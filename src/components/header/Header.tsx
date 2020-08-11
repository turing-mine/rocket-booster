
import React from 'react'
import './Header.scss'
import logo from './logo.svg'
import Theme from '../theme/Theme'

interface HeaderProps {
    themeMode: string
}

interface HeaderState {
    themeMode: string
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any) {
        super(props)
        this.state = { themeMode: this.props.themeMode }
    }

    render() {
        return (
            <div className={`Header ${this.state.themeMode}`}>
                <header>
                    <Theme themeMode={this.state.themeMode}/>
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
}

export default Header

 