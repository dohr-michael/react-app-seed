import React, { Component }    from 'react';
import * as actions            from 'actions/MainActions';
import SayHelloStore           from 'stores/SayHelloStore';
import ViewStoreListener       from 'utils/ViewStoreListener';


export default class Main extends Component {

    constructor() {
        super();
        const storeListener = new ViewStoreListener( [SayHelloStore], this );
        this.state = storeListener.initialState;
    }

    onClick() {
        actions.sayHello( 'Toto' );
    }

    render() {
        return (
            <div>
                <header>
                    Header { this.state.message }
                    <button onClick={ this.onClick.bind(this) }>Action.</button>
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