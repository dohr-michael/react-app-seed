import React, { Component, PropTypes }  from 'react';


/**
 * @author michaeldohr
 * @since 04/12/15
 */
export default class Hello extends Component {

    static propTypes = {};

    static contextTypes = {};

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <button>click me</button>
        );
    }
}