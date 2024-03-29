/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CarBrands
 */
class CarBrands extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.isSuccess = this.constructor.getValue(obj.isSuccess);
        this.status = this.constructor.getValue(obj.status);
        this.message = this.constructor.getValue(obj.message);
        this.extraData = this.constructor.getValue(obj.extraData);
        this.exception = this.constructor.getValue(obj.exception);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'isSuccess', realName: 'isSuccess' },
            { name: 'status', realName: 'status' },
            { name: 'message', realName: 'message', array: true, type: 'ComboDataModel' },
            { name: 'extraData', realName: 'extraData' },
            { name: 'exception', realName: 'exception' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = CarBrands;
