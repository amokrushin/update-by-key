'use strict';

const chai = require( 'chai' ),
    expect = chai.expect,
    assert = require( 'assert' ),
    _ = require( 'lodash' ),
    collectionUpdateByKey = require( '../index' );

describe( 'Collection update', function() {
    const original = [
            {id: 'a', val: 1},
            {id: 'b', val: 2},
            {id: 'c', val: 3}
        ],
        update = [
            {id: 'a', val: 1},
            {id: 'c', val: 4},
            {id: 'd', val: 5}
        ];

    /**
     * result[id=a] === original[id=a]
     * result[id=b] -> undefined
     * result[id=c] -> replaced
     * result[id=d] -> added
     */

    describe( '', function() {
        const result = collectionUpdateByKey( original, update, 'id' );

        it( '', function() {
            expect( _.find( result, ['id', 'a'] ) ).to.be.equal( _.find( original, ['id', 'a'] ) );

            expect( _.find( result, ['id', 'b'] ) ).to.be.an( 'undefined' );

            expect( _.find( result, ['id', 'c'] ) ).to.be.equal( _.find( original, ['id', 'c'] ) );
            expect( _.find( result, ['id', 'c'] ).val ).to.be.equal( _.find( update, ['id', 'c'] ).val );

            expect( _.find( result, ['id', 'd'] ).val ).to.be.equal( _.find( update, ['id', 'd'] ).val );
        } );
    } );
} );