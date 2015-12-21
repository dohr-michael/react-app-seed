import { guid }       from 'utils/tools';
import { dispatch }   from 'utils/Dispatcher';


export default class Action {

    constructor() {
        this.guid = guid();
    }

    /**
     * @param callback undefined | ( args ) => Promise
     * @returns {func}
     */
    async( callback ) {
        const successName = this.guid + "_success";
        const failureName = this.guid + "_failure";

        const func = ( ...args ) => {
            if( callback ) {
                const result = callback( ...args );
                result
                    .then( result => {
                        dispatch( successName, [result] );
                    } )
                    .catch( error => {
                        dispatch( failureName, [error] );
                    } );
            }
            dispatch( this.guid, args );
        };

        Object.defineProperties( func, {
            name:    { value: this.guid },
            success: { value: successName },
            failure: { value: failureName }
        } );
        return func;
    }
};