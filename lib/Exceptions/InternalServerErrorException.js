/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const APIException = require('./APIException');
/**
 * Creates an instance of InternalServerErrorException
 */
class InternalServerErrorException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.isSuccess = null;

        /**
         * TODO: Write general description for this field
         */
        this.status = null;

        /**
         * TODO: Write general description for this field
         */
        this.message = null;

        /**
         * TODO: Write general description for this field
         */
        this.extraData = null;

        /**
         * TODO: Write general description for this field
         */
        this.exception = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'isSuccess', realName: 'isSuccess' },
            { name: 'status', realName: 'status' },
            { name: 'message', realName: 'message' },
            { name: 'extraData', realName: 'extraData' },
            { name: 'exception', realName: 'exception', type: 'Exception' },
        ]);
    }
}

module.exports = InternalServerErrorException;