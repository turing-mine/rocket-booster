
import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Tabular from './components/tabular/Tabular'
import Dashboard from './components/dashboard/Dashboard'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div data-metaphor="dashboard">
                    <Dashboard/>
                </div>
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

