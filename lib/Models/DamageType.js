/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of DamageType
 */
class DamageType extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.title = this.constructor.getValue(obj.title);
        this.sortPriority = this.constructor.getValue(obj.sortPriority);
        this.createOn = this.constructor.getValue(obj.createOn);
        this.updateOn = this.constructor.getValue(obj.updateOn);
        this.createdBy = this.constructor.getValue(obj.createdBy);
        this.updatedBy = this.constructor.getValue(obj.updatedBy);
        this.createOnPersianDate = this.constructor.getValue(obj.createOnPersianDate);
        this.updateOnPersianDate = this.constructor.getValue(obj.updateOnPersianDate);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'title', realName: 'title' },
            { name: 'sortPriority', realName: 'sortPriority' },
            { name: 'createOn', realName: 'createOn' },
            { name: 'updateOn', realName: 'updateOn' },
            { name: 'createdBy', realName: 'createdBy' },
            { name: 'updatedBy', realName: 'updatedBy' },
            { name: 'createOnPersianDate', realName: 'createOnPersianDate' },
            { name: 'updateOnPersianDate', realName: 'updateOnPersianDate' },
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

module.exports = DamageType;
