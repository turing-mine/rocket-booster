
import React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

import './App.scss'

import Header from './components/header/Header'
import Tabular from './components/tabular/Tabular'

interface App {
    store: any
}

interface Settings {
    themeMode: string
}

class Settings {
    @observable themeMode = "default"
}

@observer
class App extends React.Component {
    constructor(props: any) {
        super(props)
    }

    handler() {
        alert('updated')
    }

    render() {
        const store = new Settings()
        return (
            <div className={`App ${store.themeMode}`}>
                <div data-metaphor="header">
                    <Header store={store}/>
                </div>
                <div data-metaphor="tabular">
                    <Tabular/>
                </div>
            </div>
        )
    }
}

export default App

