
import React from 'react'
import { observer} from 'mobx-react'

import './Header.scss'
import logo from './logo.svg'
import Theme from '../theme/Theme'

interface Header {
    store: any
    action: () => void
}

interface HeaderProps {
   store: any
   action: () => void
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
                    <Theme themeMode={this.props.store.themeMode} action={this.props.action}/>
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

 