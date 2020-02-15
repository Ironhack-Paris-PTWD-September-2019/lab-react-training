import React from 'react'
import './Greetings.css'


class Greetings extends React.Component {
    render() {
        let {children , lang} = this.props

        if (lang === 'de') {
            lang = 'Hallo'
        }
        if (lang === 'fr') {
            lang = 'Bonjour'
        }

        return(
            <div className = "greetings">
            <p>{lang} {children}</p>
            </div>
        )
    }
}

export default Greetings