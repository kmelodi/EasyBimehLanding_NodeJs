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

const controller = testerlib.FooterController;
const BaseModelPortalLandingContactAbout = testerlib.BaseModelPortalLandingContactAbout;
const BaseModelFaqInsuranceCentre = testerlib.BaseModelFaqInsuranceCentre;
const BaseModelInsurancePolicyTracking = testerlib.BaseModelInsurancePolicyTracking;

describe("FooterController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * TODO: Add Description
     */
    it("should testPortalLandingContactAbout response", function testPortalLandingContactAboutTest(done) {
        // parameters for the API call
        let xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

        controller.getPortalLandingContactAbout(xApiKey, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Date'] = null;
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Keep-Alive'] = null;
            headers['Cache-Control'] = null;
            headers['Pragma'] = null;
            headers['Content-Encoding'] = null;
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
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "isSuccess": true,
  "status": 200,
  "message": {
    "licensed": false,
    "insuranceGroup": [],
    "insuranceType": [],
    "summaryCards": [],
    "summaryNotics": [],
    "imageAlbums": [],
    "videoGalleries": [],
    "insuranceCentre": {
      "id": 2,
      "personId": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "personalityType": 0,
      "insuranceCentreType": 5,
      "registerStatus": 99,
      "centerName": "میز کار  مجازی  بیمه ",
      "centerCode": "1020",
      "branchCount": null,
      "registrationNumber": "4121",
      "freeUseGoldenPackExpireDate": "2019-06-17T12: 46: 51.763",
      "cityId": 329,
      "cashPayment": true,
      "showInEasyBimeh": true,
      "installmentsPayment": false,
      "isInitialApplicant": false,
      "branchsCount": 9,
      "employeesCount": 20,
      "zoneId": null,
      "smsChargingStock": null,
      "independentBranch": null,
      "disableReason": null,
      "termsConditions": null,
      "disableReasonDescription": null,
      "unlimitedAccount": null,
      "whiteLabel": false,
      "phone": "02188207290",
      "fax": "",
      "address": "استان تهران، تهران، خیابان گاندی، خیابان پانزدهم، شماره15، واحد 1",
      "zipCode": "",
      "email": "hfz1.co@gmail.com",
      "paymentUrl": null,
      "callbackUrl": null,
      "callbackUrlWhitelabel": null,
      "webSite": "",
      "latitude": 35.6892,
      "longitude": 51.389,
      "isActive": true,
      "insuranceCentreId": null,
      "cityRegionId": null,
      "provinceId": 8,
      "cityName": "تهران",
      "metaMediaActivityLicenceId": 20453,
      "metaMediaActivityLicenceUrl": null,
      "createOnPersianDate": "1397/05/05 00: 00",
      "insuranceCompanyId": [
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        39
      ],
      "activePackageId": 9,
      "packageActivationLastDate": "2019-08-31T14: 49: 47.55",
      "licenseApiKey": null,
      "verifyRequestUrl": null,
      "onlinePayment": true,
      "cardToCardPayment": true,
      "bankTransferPayment": true,
      "cashOnDelivery": true,
      "bankTransferSameOnlinePaymentInfo": false,
      "bankParamId": 109,
      "accountOwner": "فرزاد",
      "accountNumber": "1761496408",
      "iban": "550120000000001761496408",
      "cardBankParamId": 109,
      "cardAccountOwner": "فرزاد",
      "cardAccountNumber": "6104333344445555",
      "bankTransferParamId": 109,
      "bankTransferAccountOwner": "فرزاد",
      "bankTransferAccountNumber": "1761496408",
      "bankTransferIBAN": "550120000000001761496408"
    },
    "insuranceCentrePortal": {
      "insuranceCentreId": 2,
      "centreName": "میز کار  مجازی  بیمه ",
      "subDomainName": "hfz1",
      "title": "",
      "subTitle": "",
      "contactUs": null,
      "aboutUs": "",
      "ourService": "<div itemprop=\"mainContentOfPage\"><p>تمامی بیمه نامه ها با اعمال حداکثر تخفیفات قانونی ویژه ، با تسهیل در پرداخت حق بیمه (بصورت قسطی) توسط هریک از شرکتهای بیمه مورد نظر شما صادر خواهد گردید.</p></div>",
      "termsConditions": null,
      "copyright": null,
      "headerTitle": null,
      "headerBody": null,
      "footerColor": null,
      "backgroundColor": null,
      "licensed": false,
      "defaultLogo": null,
      "titleColor": "#ffffff",
      "subTitleColor": "#ffffff",
      "eTrustSymbol": null,
      "digitalMediaOrganizerSymbol": null,
      "googlePlus": "http: //instagram.com",
      "telegram": "http: //telegram.com",
      "instagram": "http: //instagram.com",
      "faceBook": "http: //instagram.com",
      "twitter": "http: //instagram.com",
      "saturdayToWednesdayFromHour": null,
      "saturdayToWednesdayToHour": null,
      "thursdayFromHour": null,
      "thursdayToHour": null,
      "fridayFromHour": null,
      "fridayToHour": null,
      "metaMediaFileHeaderId": 20817,
      "metaMediaFileHeaderUrl": "https: //media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/hfz1/636780551712391762.jpg",
      "metaMediaFileLogoId": 81580,
      "metaMediaFileLogoUrl": "https: //media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/hfz1/636994283394589289.png",
      "metaMediaFileFaviconId": 162557,
      "metaMediaFileFaviconUrl": "https: //media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/hfz1/637082986134004537.jpeg",
      "metaMediaFileFooterId": null,
      "metaMediaFileFooterUrl": null
    }
  },
  "extraData": null,
  "exception": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * TODO: Add Description
     */
    it("should testFaqInsuranceCentre response", function testFaqInsuranceCentreTest(done) {
        // parameters for the API call
        let xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

        controller.getFaqInsuranceCentre(xApiKey, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Date'] = null;
            headers['Content-Type'] = null;
            headers['Content-Length'] = null;
            headers['Connection'] = null;
            headers['Keep-Alive'] = null;
            headers['Cache-Control'] = null;
            headers['Pragma'] = null;
            headers['Content-Encoding'] = null;
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
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "isSuccess": true,
  "status": 200,
  "message": [
    {
      "id": 1009,
      "insuranceCentreId": 2,
      "question": "بیمه شخص ثالث چیست؟",
      "answer": "بیمه شخص ثالث یکی از انواع بیمه خودرو است که خسارات جانی و مالی وارد شده به اشخاص زیان‌دیده را پرداخت می‌کند. داشتن بیمه شخص ثالث برای تمامی وسایل نقلیه موتوری اجباری است.",
      "sortPriority": 0,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-06-17T00: 00: 00",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "createOnPersianDate": "1397/03/27 00: 00",
      "updateOnPersianDate": "1398/01/24 11: 17"
    },
    {
      "id": 1010,
      "insuranceCentreId": 2,
      "question": "آیا پس از تایید شماره همراه در مراحل ثبت نام، میتوانم شماره خود را تغییر دهم؟",
      "answer": "شما زمانی میتوانید شماره خود را تغییر دهید که شماره ی همراه جدید نیز تایید شود. \r\n\r\n در صورتی که  شماره همراه خود را به فردی دیگر واگذار کردید، جهت جلوگیری از سواستفاده یا مشکلات احتمالی، شماره موبایل خود را در پروفایل تغییر داده و شماره جدیدی ثبت نمایید.",
      "sortPriority": null,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-06-19T10: 34: 51.217",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": null,
      "createOnPersianDate": "1397/03/29 10: 34",
      "updateOnPersianDate": "1398/01/24 11: 17"
    },
    {
      "id": 1012,
      "insuranceCentreId": 2,
      "question": "منظور از شخص ثالث در بیمه شخص ثالث چیست؟",
      "answer": "در بیمه شخص ثالث، شخص اول شخص بیمه‌گزار (کسی که برای وسیله نقلیه‌ای بیمه شخص ثالث خریداری می‌کند)، شخص ثانی، بیمه‌گر یا شرکت بیمه و شخص ثالث فرد یا افرادی هستند در حادثه رانندگی زیان دیده‌اند به جز راننده مقصر.",
      "sortPriority": null,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-08-19T16: 02: 22.87",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": null,
      "createOnPersianDate": "1397/05/28 16: 02",
      "updateOnPersianDate": "1398/01/24 11: 17"
    },
    {
      "id": 1013,
      "insuranceCentreId": 2,
      "question": "نداشتن بیمه شخص ثالث، چه مشکلاتی برای من ایجاد می‌کند؟",
      "answer": "اولاً حرکت وسیله نقلیه بدون داشتن بیمه شخص ثالث، ممنوع است و پلیس راهنمایی رانندگی در هر زمانی که متوجه نداشتن بیمه شخص ثالث یک وسیله نقلیه شود، می‌تواند آن را توقیف کند. درصورتی‌که یک وسیله نقلیه دارای بیمه‌نامه شخص ثالث نباشد و دچار حادثه شود، راننده تا زمان پرداخت خسارت جانی و مالی اشخاص زیان‌دیده، زندانی می‌شود. همچنین، در هر زمان که راننده بخواهد بیمه شخص ثالث بخرد، باید جریمه دیرکرد آن را که قابل بخشش نیست، بپردازد. از سوی دیگر، فروش وسیله نقلیه فاقد بیمه شخص ثالث، امکان‌پذیر نیست.",
      "sortPriority": null,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-08-19T16: 02: 50.603",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": null,
      "createOnPersianDate": "1397/05/28 16: 02",
      "updateOnPersianDate": "1398/01/24 11: 17"
    },
    {
      "id": 1014,
      "insuranceCentreId": 2,
      "question": "بیمه شخص ثالث برای من چه فایده‌ای دارد؟",
      "answer": "علاوه بر آنکه خرید بیمه شخص ثالث برای تمامی دارندگان وسایل نقلیه موتوری الزامی است، داشتن این بیمه می‌تواند خسارات مالی و جانی ناشی از بروز حادثه را که می‌تواند تا مرز صدها میلیون تومان باشد، جبران نماید.",
      "sortPriority": null,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-08-19T16: 03: 30.28",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": null,
      "createOnPersianDate": "1397/05/28 16: 03",
      "updateOnPersianDate": "1398/01/24 11: 17"
    },
    {
      "id": 1015,
      "insuranceCentreId": 2,
      "question": "نداشتن بیمه شخص ثالث، چه مشکلاتی برای من ایجاد می‌کند؟",
      "answer": "اولاً حرکت وسیله نقلیه بدون داشتن بیمه شخص ثالث، ممنوع است و پلیس راهنمایی رانندگی در هر زمانی که متوجه نداشتن بیمه شخص ثالث یک وسیله نقلیه شود، می‌تواند آن را توقیف کند. درصورتی‌که یک وسیله نقلیه دارای بیمه‌نامه شخص ثالث نباشد و دچار حادثه شود، راننده تا زمان پرداخت خسارت جانی و مالی اشخاص زیان‌دیده، زندانی می‌شود. همچنین، در هر زمان که راننده بخواهد بیمه شخص ثالث بخرد، باید جریمه دیرکرد آن را که قابل بخشش نیست، بپردازد. از سوی دیگر، فروش وسیله نقلیه فاقد بیمه شخص ثالث، امکان‌پذیر نیست.",
      "sortPriority": null,
      "questionGroupParamId": 2,
      "isActive": true,
      "theInsuranceCentre": null,
      "theQuestionGroupParam": null,
      "createOn": "2018-08-19T16: 03: 55.527",
      "updateOn": "2019-04-13T11: 17: 49.51",
      "createdBy": "fbddedc4-0804-409d-91ee-cb062ef33f42",
      "updatedBy": null,
      "createOnPersianDate": "1397/05/28 16: 03",
      "updateOnPersianDate": "1398/01/24 11: 17"
    }
  ],
  "extraData": null,
  "exception": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * TODO: Add Description
     */
    it("should testInsurancePolicyTracking response", function testInsurancePolicyTrackingTest(done) {
        // parameters for the API call
        let trackingCode = 213981083;
        let nationalCode = 3080115309;
        let xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

        controller.getInsurancePolicyTracking(trackingCode, nationalCode, xApiKey, function callback(error, response, context) {
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
  "message": {
    "id": 1129,
    "aliasName": "کاظم ملکی",
    "status": "ثبت اولیه",
    "createOnPersianDate": "1398/04/12 13: 00",
    "centerName": "کارگزاری بیمه حافظان آرامش",
    "insurancePolicyType": 8,
    "insuranceType": "بیمه درمان خانواده",
    "price": 1890060,
    "paymented": null
  },
  "extraData": null,
  "exception": null
}, false, true, false));
            done();
        }).catch(() => undefined);
    });
});
