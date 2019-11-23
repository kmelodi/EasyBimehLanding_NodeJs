/**
 * EasyBimehLandingLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.ElectronicEquipmentInsuranceController;
const BaseModelElectronicEquipmentInsurance = testerlib.BaseModelElectronicEquipmentInsurance;
const BaseModelDeviceBrandTypes = testerlib.BaseModelDeviceBrandTypes;
const BaseModelDiviceFranchisee = testerlib.BaseModelDiviceFranchisee;

describe("ElectronicEquipmentInsuranceController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * TODO: Add Description
     */
    it("should testDiviceFranchisee response", function testDiviceFranchiseeTest(done) {
        // parameters for the API call
        let deviceModelId = 1340;
        let xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

        controller.getDiviceFranchisee(deviceModelId, xApiKey, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Date'] = null;
            headers['Content-Type'] = null;
            headers['Transfer-Encoding'] = null;
            headers['Connection'] = null;
            headers['Keep-Alive'] = null;
            headers['Vary'] = null;
            headers['Cache-Control'] = null;
            headers['Pragma'] = null;
            headers['Expires'] = null;
            headers['X-StackifyID'] = null;
            headers['X-AspNet-Version'] = null;
            headers['X-Powered-By'] = null;
            headers['Server'] = null;
            headers['AR-PoweredBy'] = null;
            headers['ar-sid'] = null;
            headers['AR-ATIME'] = null;
            headers['AR-CACHE'] = null;
            headers['AR-Request-ID'] = null;
            headers['Content-Encoding'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "isSuccess": true,
  "status": 200,
  "message": [
    {
      "id": 5404,
      "title": "30%",
      "extraData": null
    },
    {
      "id": 5401,
      "title": "40%",
      "extraData": null
    }
  ],
  "extraData": null,
  "exception": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });
});
