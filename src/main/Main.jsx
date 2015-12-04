import React, { Component }    from 'react';


export default class Main extends Component {

    render() {
        return (
            <div>
                Hello, World !!! Thomas <br />
                <br />
                <div>
                    { this.props.children }
                </div>
            </div>
        )
    }
}