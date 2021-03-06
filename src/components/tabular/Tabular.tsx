
import React from 'react'
import './Tabular.scss'

interface TabularState {
    maxRows: string
}

class Tabular extends React.Component<{}, TabularState> {
    constructor(props: any) {
        super(props)
        this.state = { maxRows: "20" }
    }
    
    render() {
        return (
            <div className="Tabular">
                <table>
                    <thead>
                        <tr>
                            <th>Ticker (Name)</th>
                            <th>Close</th>
                            <th>Dividend</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>KO (Coca Cola)</td>
                            <td>$47.72</td>
                            <td>$1.618</td>
                        </tr>
                        <tr>
                            <td>AMT (American Tower)</td>
                            <td>$47.50</td>
                            <td>$3.825</td>
                        </tr>
                        <tr>
                            <td>APPL (APPL)</td>
                            <td>$450.91</td>
                            <td>$3.040</td>
                        </tr>
                        <tr>
                            <td>KO (Coca Cola)</td>
                            <td>$47.72</td>
                            <td>$1.618</td>
                        </tr>
                        <tr>
                            <td>AMT (American Tower)</td>
                            <td>$47.50</td>
                            <td>$3.825</td>
                        </tr>
                        <tr>
                            <td>APPL (APPL)</td>
                            <td>$450.91</td>
                            <td>$3.040</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tabular

 