
import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Tabular from './components/tabular/Tabular'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div data-metaphor="header">
                    <Header/>
                </div>
                <div data-metaphor="tabular">
                    <Tabular/>
                </div>
            </div>
        )
    }
}

export default App

