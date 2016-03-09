'use strict';

const _ = require( 'lodash' );

function updateByKey( original, update, keyBy ) {
    const originalHash = _.keyBy( original, keyBy ),
        updateHash = _.keyBy( update, keyBy );

    return _.transform( _.assign( {}, originalHash, updateHash ), function( result, value, key ) {
        if( !updateHash[key] )
        {
            // skip
            return;
        }
        if( _.isEqual( originalHash[key], updateHash[key] ) )
        {
            // push from original
            result.push( originalHash[key] );
        }
        else
        {
            if( updateHash[key] )
            {
                // push original extended with update
                result.push( _.assign( originalHash[key], updateHash[key] ) );
            }
        }
    }, [] );
}

module.exports = updateByKey;