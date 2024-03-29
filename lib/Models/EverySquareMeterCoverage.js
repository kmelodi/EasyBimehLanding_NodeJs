/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EverySquareMeterCoverage
 */
class EverySquareMeterCoverage extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.fiscalYearId = this.constructor.getValue(obj.fiscalYearId);
        this.insuranceCoverageId = this.constructor.getValue(obj.insuranceCoverageId);
        this.coverageRial = this.constructor.getValue(obj.coverageRial);
        this.coverageEuro = this.constructor.getValue(obj.coverageEuro);
        this.fromPrice = this.constructor.getValue(obj.fromPrice);
        this.toPrice = this.constructor.getValue(obj.toPrice);
        this.isDiscount = this.constructor.getValue(obj.isDiscount);
        this.coverageValueType = this.constructor.getValue(obj.coverageValueType);
        this.coverageStringValue = this.constructor.getValue(obj.coverageStringValue);
        this.insuranceTypeIds = this.constructor.getValue(obj.insuranceTypeIds);
        this.insuranceCompanyIds = this.constructor.getValue(obj.insuranceCompanyIds);
        this.selected = this.constructor.getValue(obj.selected);
        this.isVisible = this.constructor.getValue(obj.isVisible);
        this.insuranceTypeId = this.constructor.getValue(obj.insuranceTypeId);
        this.insurancePlansIds = this.constructor.getValue(obj.insurancePlansIds);
        this.isActive = this.constructor.getValue(obj.isActive);
        this.insuranceTypeTitles = this.constructor.getValue(obj.insuranceTypeTitles);
        this.insuranceCompanyTitles = this.constructor.getValue(obj.insuranceCompanyTitles);
        this.insurancePlanTitles = this.constructor.getValue(obj.insurancePlanTitles);
        this.insuranceTypeTitle = this.constructor.getValue(obj.insuranceTypeTitle);
        this.createdBy = this.constructor.getValue(obj.createdBy);
        this.isPlan = this.constructor.getValue(obj.isPlan);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'fiscalYearId', realName: 'fiscalYearId' },
            { name: 'insuranceCoverageId', realName: 'insuranceCoverageId' },
            { name: 'coverageRial', realName: 'coverageRial' },
            { name: 'coverageEuro', realName: 'coverageEuro' },
            { name: 'fromPrice', realName: 'fromPrice' },
            { name: 'toPrice', realName: 'toPrice' },
            { name: 'isDiscount', realName: 'isDiscount' },
            { name: 'coverageValueType', realName: 'coverageValueType' },
            { name: 'coverageStringValue', realName: 'coverageStringValue' },
            { name: 'insuranceTypeIds', realName: 'insuranceTypeIds' },
            { name: 'insuranceCompanyIds', realName: 'insuranceCompanyIds' },
            { name: 'selected', realName: 'selected' },
            { name: 'isVisible', realName: 'isVisible' },
            { name: 'insuranceTypeId', realName: 'insuranceTypeId' },
            { name: 'insurancePlansIds', realName: 'insurancePlansIds' },
            { name: 'isActive', realName: 'isActive' },
            { name: 'insuranceTypeTitles', realName: 'insuranceTypeTitles' },
            { name: 'insuranceCompanyTitles', realName: 'insuranceCompanyTitles' },
            { name: 'insurancePlanTitles', realName: 'insurancePlanTitles' },
            { name: 'insuranceTypeTitle', realName: 'insuranceTypeTitle' },
            { name: 'createdBy', realName: 'createdBy' },
            { name: 'isPlan', realName: 'isPlan' },
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

module.exports = EverySquareMeterCoverage;
