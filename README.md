# Getting started

EasyBimehConnect 

 یک ساب برند از ایزی بیمه است که وظیفه ارائه خدمات

 B2B و B2B2C

را برپایه وب سرویس و وایت لیبل بر عهده دارد. اگر اپلیکیشن و یا سایت غیر بیمه‌ای دارید و تمایل به فروش بیمه نامه دارید از امروز میتوانید با کمترین هزینه و کمترین زمان به زنجیره نوآوری در صنعت بیمه متصل شوید و تجارت جدیدی بسازید

به دلیل گستردگی پروژه و برای دسترسی بهتر، این پروژه به بخش های مختلف تقسیم شده است

و هر بخش در 10 پلتفرم مختلف، ارایه شده است

در این بخش، به وب سرویس های مربوط به صفحه ی لندینگ مرکز بیمه، دسترسی خواهید داشت که 

اطلاعات هر پلتفرم را میتوانید بصورت تجمیعی در آدرس زیر مشاهده نمایید

https://www.apimatic.io/apidocs/easybimehlanding

و یا بصورت مجزا در آدرس های زیر قابل درسترس می باشند

1- Android: https://github.com/kmelodi/EasyBimehLanding_Android

2- .Net: https://github.com/kmelodi/EasyBimehLanding_.NET

3- Ios: https://github.com/kmelodi/EasyBimehLanding_IOS

4- Java: https://github.com/kmelodi/EasyBimehLanding_JAVA

5- Php: https://github.com/kmelodi/EasyBimehLanding_PHP

6- Python: https://github.com/kmelodi/EasyBimehLanding_Python

7- Ruby: https://github.com/kmelodi/EasyBimehLanding_Ruby

8- Angular: https://github.com/kmelodi/EasyBimehLanding_Angular

9- NodeJs: https://github.com/kmelodi/EasyBimehLanding_NodeJs

10- Go: https://github.com/kmelodi/EasyBimehLanding_Go


برای اطلاعات بیشتر به آدرس زیر مراجعه نمایید

https://easybimeh.com/ebconnect

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Easy%20Bimeh%20Landing-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Easy%20Bimeh%20Landing-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `EasyBimehLandingLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Easy%20Bimeh%20Landing-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Easy%20Bimeh%20Landing-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Easy%20Bimeh%20Landing-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Easy%20Bimeh%20Landing-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Easy Bimeh LandingController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Easy%20Bimeh%20LandingController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [FileManagerController](#file_manager_controller)
* [LiabilityDoctorInsuranceController](#liability_doctor_insurance_controller)
* [CarBodyController](#car_body_controller)
* [ElectronicEquipmentInsuranceController](#electronic_equipment_insurance_controller)
* [OtherInsuranceTypesController](#other_insurance_types_controller)
* [ThirdPartyInsuranceController](#third_party_insurance_controller)
* [MotorcycleInsuranceController](#motorcycle_insurance_controller)
* [FireInsuranceController](#fire_insurance_controller)
* [EarthquakeInsuranceController](#earthquake_insurance_controller)
* [TravelInsuranceController](#travel_insurance_controller)
* [ElevatorInsuranceController](#elevator_insurance_controller)
* [MainController](#main_controller)
* [ComboDataController](#combo_data_controller)
* [TrackingDamageController](#tracking_damage_controller)
* [FooterController](#footer_controller)
* [InsurancePolicyPlanController](#insurance_policy_plan_controller)

## <a name="file_manager_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FileManagerController") FileManagerController

### Get singleton instance

The singleton instance of the ``` FileManagerController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FileManagerController;
```

### <a name="upload"></a>![Method: ](https://apidocs.io/img/method.png ".FileManagerController.upload") upload

> آپلود فایل در ایزی بیمه
> بعد از آپلود، ادرس فایل باید در api های بعدی ارسال شود.


```javascript
function upload(subDomain, xApiKey, file, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |
| file |  ``` Required ```  | فایل ارسالی |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';
    var file = '';

    controller.upload(subDomain, xApiKey, file, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="liability_doctor_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".LiabilityDoctorInsuranceController") LiabilityDoctorInsuranceController

### Get singleton instance

The singleton instance of the ``` LiabilityDoctorInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.LiabilityDoctorInsuranceController;
```

### <a name="get_liability_doctor_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".LiabilityDoctorInsuranceController.getLiabilityDoctorInsurance") getLiabilityDoctorInsurance

> در یافت اطلاعات اولیه برای استعلام بیمه مسئولیت پزشکان


```javascript
function getLiabilityDoctorInsurance(subDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getLiabilityDoctorInsurance(subDomain, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_medical_specialties"></a>![Method: ](https://apidocs.io/img/method.png ".LiabilityDoctorInsuranceController.getMedicalSpecialties") getMedicalSpecialties

> دریافت لیست تخصص های پزشکی


```javascript
function getMedicalSpecialties(id, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | نوع تخصص => ParamedicalExpertise => پیراپزشکی MedicalExpertise => پزشکی |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var id = 'ParamedicalExpertise';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getMedicalSpecialties(id, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="car_body_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CarBodyController") CarBodyController

### Get singleton instance

The singleton instance of the ``` CarBodyController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CarBodyController;
```

### <a name="get_car_brand"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getCarBrand") getCarBrand

> دریافت برند خودرو


```javascript
function getCarBrand(xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | شناسه ی اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrand(xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ خودرو


```javascript
function getCarBrandTips(carBrandId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carBrandId = 190;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrandTips(carBrandId, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".CarBodyController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه => بیمه بدنه=2 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyType = 2;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getHasPlan(subDomain, insurancePolicyType, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="electronic_equipment_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ElectronicEquipmentInsuranceController") ElectronicEquipmentInsuranceController

### Get singleton instance

The singleton instance of the ``` ElectronicEquipmentInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ElectronicEquipmentInsuranceController;
```

### <a name="get_electronic_equipment_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getElectronicEquipmentInsurance") getElectronicEquipmentInsurance

> دریافت اطلاعات اولیه استعلام بیمه نامه ی تجهیزات الکترونیک


```javascript
function getElectronicEquipmentInsurance(subDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'subDomain';
    var xApiKey = 'x-api-key';

    controller.getElectronicEquipmentInsurance(subDomain, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_device_brand_types"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getDeviceBrandTypes") getDeviceBrandTypes

> دریافت لیست نوع برند دستگاه


```javascript
function getDeviceBrandTypes(deviceGroup, deviceTypeId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| deviceGroup |  ``` Required ```  | شناسه ی گروه دستگاه |
| deviceTypeId |  ``` Required ```  | شناسه ی نوع دستگاه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var deviceGroup = 1;
    var deviceTypeId = 1;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getDeviceBrandTypes(deviceGroup, deviceTypeId, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_divice_franchisee"></a>![Method: ](https://apidocs.io/img/method.png ".ElectronicEquipmentInsuranceController.getDiviceFranchisee") getDiviceFranchisee

> دریافت لیست فرانشیر استعلام بیمه نامه ی تجهیزات الکترونیک


```javascript
function getDiviceFranchisee(deviceModelId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| deviceModelId |  ``` Required ```  | شناسه ی مدل دستگاه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var deviceModelId = 1340;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getDiviceFranchisee(deviceModelId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="other_insurance_types_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OtherInsuranceTypesController") OtherInsuranceTypesController

### Get singleton instance

The singleton instance of the ``` OtherInsuranceTypesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OtherInsuranceTypesController;
```

### <a name="get_other_insurance_types"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getOtherInsuranceTypes") getOtherInsuranceTypes

> دریافت لیست سایر بیمه نامه ها


```javascript
function getOtherInsuranceTypes(subDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getOtherInsuranceTypes(subDomain, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_send_sms_token"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getSendSmsToken") getSendSmsToken

> ارسال توکن تایید شماره تماس، برای احراز هویت کاربر


```javascript
function getSendSmsToken(mobile, insuranceCentreSubDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobile |  ``` Required ```  | شماره موبایل |
| insuranceCentreSubDomain |  ``` Required ```  | دامنه یا زیردامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var mobile = '09018318086';
    var insuranceCentreSubDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getSendSmsToken(mobile, insuranceCentreSubDomain, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_verify_sms_token"></a>![Method: ](https://apidocs.io/img/method.png ".OtherInsuranceTypesController.getVerifySmsToken") getVerifySmsToken

> تایید توکن پیامک شده به کاربر، برای احراز هویت


```javascript
function getVerifySmsToken(mobile, token, insuranceCentreSubDomain, aliasName, resource, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mobile |  ``` Required ```  | شماره موبایل |
| token |  ``` Required ```  | توکن دریافتی کاربر از پیامک |
| insuranceCentreSubDomain |  ``` Required ```  | دامنه یا زیر دامنه ی اختصاصی مرکز بیمه |
| aliasName |  ``` Required ```  | نام و نام خانوادگی کاربر |
| resource |  ``` Required ```  | دامنه ی درخواست دهنده |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var mobile = '09018318086';
    var token = 27763;
    var insuranceCentreSubDomain = 'hfz1';
    var aliasName = 'علی موسوی';
    var resource = 'https://hfz1.easybimeh.com';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getVerifySmsToken(mobile, token, insuranceCentreSubDomain, aliasName, resource, xApiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




[Back to List of Controllers](#list_of_controllers)

## <a name="third_party_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ThirdPartyInsuranceController") ThirdPartyInsuranceController

### Get singleton instance

The singleton instance of the ``` ThirdPartyInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ThirdPartyInsuranceController;
```

### <a name="get_car_brands"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarBrands") getCarBrands

> دریافت لیست برند خودرو ها


```javascript
function getCarBrands(carTypeGroup, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeGroup |  ``` Required ```  | شناسه ی گروه خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carTypeGroup = 1;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrands(carTypeGroup, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_risk_level"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getRiskLevel") getRiskLevel

> دریافت لیست تخفیف های بیمه


```javascript
function getRiskLevel(insurancePolicyType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var insurancePolicyType = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getRiskLevel(insurancePolicyType, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ خودرو


```javascript
function getCarBrandTips(carBrandId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carBrandId = 190;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrandTips(carBrandId, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_car_uses"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getCarUses") getCarUses

> دریافت لیست نوع کاربری خودرو


```javascript
function getCarUses(carTypeId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeId |  ``` Required ```  | شناسه ی نوع خودرو |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carTypeId = 103;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarUses(carTypeId, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".ThirdPartyInsuranceController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyType = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getHasPlan(subDomain, insurancePolicyType, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="motorcycle_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MotorcycleInsuranceController") MotorcycleInsuranceController

### Get singleton instance

The singleton instance of the ``` MotorcycleInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MotorcycleInsuranceController;
```

### <a name="get_car_brands"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getCarBrands") getCarBrands

> دریافت لیست برند موتور سیکلت


```javascript
function getCarBrands(carTypeGroup, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carTypeGroup |  ``` Required ```  | شناسه ی گروه خودرویی، موتور سیکلت =>0 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carTypeGroup = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrands(carTypeGroup, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_car_brand_tips"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getCarBrandTips") getCarBrandTips

> دریافت لیست تیپ موتور سیکلت


```javascript
function getCarBrandTips(carBrandId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| carBrandId |  ``` Required ```  | شناسه ی برند موتور سیکلت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var carBrandId = 472;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getCarBrandTips(carBrandId, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_has_plan"></a>![Method: ](https://apidocs.io/img/method.png ".MotorcycleInsuranceController.getHasPlan") getHasPlan

> آیا این نوع بیمه نامه، طرح بیمه ای دارد؟


```javascript
function getHasPlan(subDomain, insurancePolicyType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyType = 7;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getHasPlan(subDomain, insurancePolicyType, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="fire_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FireInsuranceController") FireInsuranceController

### Get singleton instance

The singleton instance of the ``` FireInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FireInsuranceController;
```

### <a name="get_fire_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".FireInsuranceController.getFireInsurance") getFireInsurance

> دریافت اطلاعات پایه بیمه ی آتش سوزی


```javascript
function getFireInsurance(subDomain, insurancePolicyId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyId = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getFireInsurance(subDomain, insurancePolicyId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="earthquake_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EarthquakeInsuranceController") EarthquakeInsuranceController

### Get singleton instance

The singleton instance of the ``` EarthquakeInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EarthquakeInsuranceController;
```

### <a name="get_earthquake"></a>![Method: ](https://apidocs.io/img/method.png ".EarthquakeInsuranceController.getEarthquake") getEarthquake

> دریافت اطلاعات پایه ی بیمه ی زلزله


```javascript
function getEarthquake(subDomain, insurancePolicyId, insurancePolicyType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| insurancePolicyType |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyId = 0;
    var insurancePolicyType = 6;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getEarthquake(subDomain, insurancePolicyId, insurancePolicyType, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="travel_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TravelInsuranceController") TravelInsuranceController

### Get singleton instance

The singleton instance of the ``` TravelInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TravelInsuranceController;
```

### <a name="get_travel_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".TravelInsuranceController.getTravelInsurance") getTravelInsurance

> TODO: Add Description


```javascript
function getTravelInsurance(subDomain, insurancePolicyId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyId = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getTravelInsurance(subDomain, insurancePolicyId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="elevator_insurance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ElevatorInsuranceController") ElevatorInsuranceController

### Get singleton instance

The singleton instance of the ``` ElevatorInsuranceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ElevatorInsuranceController;
```

### <a name="get_elevator_insurance"></a>![Method: ](https://apidocs.io/img/method.png ".ElevatorInsuranceController.getElevatorInsurance") getElevatorInsurance

> دریافت اطلاعات پایه ی بیمه نامه ی آسانسور


```javascript
function getElevatorInsurance(subDomain, insurancePolicyId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insurancePolicyId |  ``` Required ```  | شناسه ی بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insurancePolicyId = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getElevatorInsurance(subDomain, insurancePolicyId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="main_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MainController") MainController

### Get singleton instance

The singleton instance of the ``` MainController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MainController;
```

### <a name="get_portal_landing_page"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.getPortalLandingPage") getPortalLandingPage

> در یافت اطلاعات لندینگ مراکز بیمه


```javascript
function getPortalLandingPage(id, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var id = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getPortalLandingPage(id, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_insurance_centre_policy_types"></a>![Method: ](https://apidocs.io/img/method.png ".MainController.getInsuranceCentrePolicyTypes") getInsuranceCentrePolicyTypes

> دریافت لیست بیمه ی های ارائه شده توسط مرکز بیمه


```javascript
function getInsuranceCentrePolicyTypes(subDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getInsuranceCentrePolicyTypes(subDomain, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="combo_data_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ComboDataController") ComboDataController

### Get singleton instance

The singleton instance of the ``` ComboDataController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ComboDataController;
```

### <a name="get_damage_type"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getDamageType") getDamageType

> دریافت لیست نوع خسارت


```javascript
function getDamageType(xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getDamageType(xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_insurance_types"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getInsuranceTypes") getInsuranceTypes

> دریافت لیست نوع بیمه نامه


```javascript
function getInsuranceTypes(subDomain, issueInsurance, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| issueInsurance |  ``` Required ```  | دریافت بیمه نامه های قابل صدور |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var issueInsurance = false;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getInsuranceTypes(subDomain, issueInsurance, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_insurance_companies"></a>![Method: ](https://apidocs.io/img/method.png ".ComboDataController.getInsuranceCompanies") getInsuranceCompanies

> دریافت لیست شرکت های بیمه


```javascript
function getInsuranceCompanies(subDomain, insuranceTypeId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| insuranceTypeId |  ``` Required ```  | شناسه ی نوع بیمه نامه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var insuranceTypeId = 1;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getInsuranceCompanies(subDomain, insuranceTypeId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="tracking_damage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TrackingDamageController") TrackingDamageController

### Get singleton instance

The singleton instance of the ``` TrackingDamageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TrackingDamageController;
```

### <a name="get_tracking_code"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getTrackingCode") getTrackingCode

> استعلام وضعیت خسارت


```javascript
function getTrackingCode(mTrackingCode, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| mTrackingCode |  ``` Required ```  | کد پیگیری خسارت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var mTrackingCode = /{TrackingCode};
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getTrackingCode(mTrackingCode, xApiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |




### <a name="create_tracking_damage"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.createTrackingDamage") createTrackingDamage

> ثبت خسارت بیمه


```javascript
function createTrackingDamage(body, xApiKey, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | اطلاعات خسارت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new TrackingDamageRequest({
  "personalityType": 0,
  "trackingDamageStatus": [
    {
      "trackingDamageFile": [
        {
          "id": 162747,
          "url": "https://media.easybimeh.com//Easybimeh/FileManager/InsuranceCentre/hfz1/637089119345134776.jpeg",
          "title": "کارت شناسایی"
        }
      ]
    }
  ],
  "description": "بدنه ی خودرو خسارت دیده",
  "insuranceTypeId": 1,
  "insuranceCompanyId": 34,
  "insurancePolicyNumber": "123456",
  "damageType": "مالی",
  "name": "کاظم",
  "nationalCode": "3080118383",
  "mobile": "09018318086",
  "insuredProfile": "پژو 405",
  "subDomain": "hfz1"
});
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';
    var contentType = 'application/json';

    controller.createTrackingDamage(body, xApiKey, contentType, function(error, response, context) {

    
    });
```



### <a name="get_status_status_collections"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getStatusStatusCollections") getStatusStatusCollections

> دریافت لیست وضعیت های خسارت


```javascript
function getStatusStatusCollections(statusType, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| statusType |  ``` Required ```  | نوع وضعیت ها ی خسارت => 0 |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var statusType = 0;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getStatusStatusCollections(statusType, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_status"></a>![Method: ](https://apidocs.io/img/method.png ".TrackingDamageController.getStatus") getStatus

> دریافت اطلاعات وضعیت


```javascript
function getStatus(entityId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| entityId |  ``` Required ```  | شناسه ی وضعیت |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var entityId = 1129;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getStatus(entityId, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="footer_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FooterController") FooterController

### Get singleton instance

The singleton instance of the ``` FooterController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FooterController;
```

### <a name="get_portal_landing_contact_about"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getPortalLandingContactAbout") getPortalLandingContactAbout

> دریافت اطلاعات درباره ی ما


```javascript
function getPortalLandingContactAbout(xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getPortalLandingContactAbout(xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_faq_insurance_centre"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getFaqInsuranceCentre") getFaqInsuranceCentre

> دریافت لیست سوالات متداول


```javascript
function getFaqInsuranceCentre(xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getFaqInsuranceCentre(xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_insurance_policy_tracking"></a>![Method: ](https://apidocs.io/img/method.png ".FooterController.getInsurancePolicyTracking") getInsurancePolicyTracking

> پیگیری وضعیت بیمه نامه


```javascript
function getInsurancePolicyTracking(trackingCode, nationalCode, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| trackingCode |  ``` Required ```  | شماره ی پیگیری بیمه نامه |
| nationalCode |  ``` Required ```  | کد ملی کاربر |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var trackingCode = 213981083;
    var nationalCode = 3080115309;
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getInsurancePolicyTracking(trackingCode, nationalCode, xApiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | Internal Server Error |




[Back to List of Controllers](#list_of_controllers)

## <a name="insurance_policy_plan_controller"></a>![Class: ](https://apidocs.io/img/class.png ".InsurancePolicyPlanController") InsurancePolicyPlanController

### Get singleton instance

The singleton instance of the ``` InsurancePolicyPlanController ``` class can be accessed from the API Client.

```javascript
var controller = lib.InsurancePolicyPlanController;
```

### <a name="get_special_plan"></a>![Method: ](https://apidocs.io/img/method.png ".InsurancePolicyPlanController.getSpecialPlan") getSpecialPlan

> دریافت لیست طرح های بیمه ای


```javascript
function getSpecialPlan(subDomain, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| subDomain |  ``` Required ```  | دامنه یا زیر دامنه ی مرکز بیمه |
| xApiKey |  ``` Required ```  | کلید اختصاصی ارتباط با سرور |



#### Example Usage

```javascript

    var subDomain = 'hfz1';
    var xApiKey = 'd6dfd932-75d8-e911-811a-000c294ecf01';

    controller.getSpecialPlan(subDomain, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



