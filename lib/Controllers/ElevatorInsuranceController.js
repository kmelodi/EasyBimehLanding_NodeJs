/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class ElevatorInsuranceController {
    /**
     * دریافت اطلاعات پایه ی بیمه نامه ی آسانسور
     *
     * @param {string} subDomain دامنه یا زیر دامنه ی مرکز بیمه
     * @param {int} insurancePolicyId شناسه ی بیمه نامه
     * @param {string} xApiKey کلید اختصاصی ارتباط با سرور
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getElevatorInsurance(subDomain, insurancePolicyId, xApiKey, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _pathUrl = '/ElevatorInsurance/Initialize';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            subDomain,
            insurancePolicyId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'x-api-key': xApiKey,
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'BaseModelElevatorInsurance');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = ElevatorInsuranceController;
