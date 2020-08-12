
import React from 'react'
import { observable } from "mobx"

import './App.scss'

import Header from './components/header/Header'
import Tabular from './components/tabular/Tabular'

interface AppState {
    themeMode: string
}

class uiSetting {
    @observable themeMode = "default"
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {themeMode:'default'}
    }
    render() {
        return (
            <div className={`App ${this.state.themeMode}`}>
                <div data-metaphor="header">
                    <Header themeMode={this.state.themeMode}/>
                </div>
                <div data-metaphor="tabular">
                    <Tabular/>
                </div>
            </div>
        )
    }
}

export default App

