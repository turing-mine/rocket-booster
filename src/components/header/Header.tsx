
import React from 'react'
import { observer, inject } from 'mobx-react'

import './Header.scss'
import logo from './logo.svg'
import Theme from '../theme/Theme'

interface Header {
    store: any
}

interface HeaderProps {
   store: any
}

@observer
class Header extends React.Component<HeaderProps,{}> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className={`Header ${this.props.store.themeMode}`}>
                <header>
                    <Theme themeMode={this.props.store.themeMode}/>
                    <img src={logo} className="App-logo" alt="logo"/>
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

 