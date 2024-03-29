/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SpecialPlan
 */
class SpecialPlan extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.key = this.constructor.getValue(obj.key);
        this.count = this.constructor.getValue(obj.count);
        this.title = this.constructor.getValue(obj.title);
        this.policyType = this.constructor.getValue(obj.policyType);
        this.display = this.constructor.getValue(obj.display);
        this.iconPosition = this.constructor.getValue(obj.iconPosition);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'key', realName: 'key' },
            { name: 'count', realName: 'count' },
            { name: 'title', realName: 'title' },
            { name: 'policyType', realName: 'policyType' },
            { name: 'display', realName: 'display' },
            { name: 'iconPosition', realName: 'iconPosition' },
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

module.exports = SpecialPlan;
