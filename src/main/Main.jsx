import React, { Component }    from 'react';


export default class Main extends Component {

    render() {
        return (
            <div>
                <header>
                    Header
                </header>
                <content>
                    { this.props.children }
                </content>
                <footer>
                    Footer
                </footer>
            </div>
        )
    }
}