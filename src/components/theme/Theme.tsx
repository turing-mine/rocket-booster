
import React from 'react'
import './Theme.scss'

interface Theme {
   themeMode: string 
}

interface ThemeState {
    themeMode: string
}

interface ThemeProps {
   themeMode: string
}

class Theme extends React.Component<ThemeProps, ThemeState> {
    constructor(props: any) {
        super(props)
        this.state = { themeMode: this.props.themeMode }
    }
    
    changeThemeHandler = (event:any) => {
        if (event.target.checked) {
            if (event.target.value === 'dark') {
                this.setState(state => ({ themeMode: 'dark' }))
            }
        }
        else {
            this.setState(state => ({ themeMode: this.props.themeMode }))
        }
    }
    
    render() {
        return (
            <div className={`Theme ${this.state.themeMode}`}>
                <form name="theme">
                    <input name="mode" type="checkbox" value="dark" onChange={this.changeThemeHandler}/>
                    &nbsp;&nbsp;Theme Mode: {this.state.themeMode}
                </form>
            </div>
        )
    }
}

export default Theme

