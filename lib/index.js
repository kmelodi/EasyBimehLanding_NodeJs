/**
  * @module EasyBimehLandingLib
  *
  * EasyBimehConnect    یک ساب برند از ایزی بیمه است که وظیفه ارائه خدمات   B2B و B2B2C  را برپایه
  * وب سرویس و وایت لیبل بر عهده دارد. اگر اپلیکیشن و یا سایت غیر بیمه‌ای دارید و تمایل به فروش
  * بیمه نامه دارید از امروز میتوانید با کمترین هزینه و کمترین زمان به زنجیره نوآوری در صنعت بیمه
  * متصل شوید و تجارت جدیدی بسازید  به دلیل گستردگی پروژه و برای دسترسی بهتر، این پروژه به بخش های
  * مختلف تقسیم شده است  و هر بخش در 10 پلتفرم مختلف، ارایه شده است  در این بخش، به وب سرویس های
  * مربوط به صفحه ی لندینگ مرکز بیمه، دسترسی خواهید داشت که   اطلاعات هر پلتفرم را میتوانید بصورت
  * تجمیعی در آدرس زیر مشاهده نمایید  https://www.apimatic.io/apidocs/easybimehlanding  و یا بصورت
  * مجزا در آدرس های زیر قابل درسترس می باشند  1- Android: https://github.
  * com/kmelodi/EasyBimehLanding_Android  2- .Net: https://github.com/kmelodi/EasyBimehLanding_.NET
  * 3- Ios: https://github.com/kmelodi/EasyBimehLanding_IOS  4- Java: https://github.
  * com/kmelodi/EasyBimehLanding_JAVA  5- Php: https://github.com/kmelodi/EasyBimehLanding_PHP  6-
  * Python: https://github.com/kmelodi/EasyBimehLanding_Python  7- Ruby: https://github.
  * com/kmelodi/EasyBimehLanding_Ruby  8- Angular: https://github.
  * com/kmelodi/EasyBimehLanding_Angular  9- NodeJs: https://github.
  * com/kmelodi/EasyBimehLanding_NodeJs  10- Go: https://github.com/kmelodi/EasyBimehLanding_Go
  * برای اطلاعات بیشتر به آدرس زیر مراجعه نمایید  https://easybimeh.com/ebconnect
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const FileManagerController = require('./Controllers/FileManagerController');
const LiabilityDoctorInsuranceController =
  require('./Controllers/LiabilityDoctorInsuranceController');
const CarBodyController = require('./Controllers/CarBodyController');
const ElectronicEquipmentInsuranceController =
  require('./Controllers/ElectronicEquipmentInsuranceController');
const OtherInsuranceTypesController = require('./Controllers/OtherInsuranceTypesController');
const ThirdPartyInsuranceController = require('./Controllers/ThirdPartyInsuranceController');
const MotorcycleInsuranceController = require('./Controllers/MotorcycleInsuranceController');
const FireInsuranceController = require('./Controllers/FireInsuranceController');
const EarthquakeInsuranceController = require('./Controllers/EarthquakeInsuranceController');
const TravelInsuranceController = require('./Controllers/TravelInsuranceController');
const ElevatorInsuranceController = require('./Controllers/ElevatorInsuranceController');
const MainController = require('./Controllers/MainController');
const ComboDataController = require('./Controllers/ComboDataController');
const TrackingDamageController = require('./Controllers/TrackingDamageController');
const FooterController = require('./Controllers/FooterController');
const InsurancePolicyPlanController = require('./Controllers/InsurancePolicyPlanController');
const BaseModelUpload = require('./Models/BaseModelUpload');
const Upload = require('./Models/Upload');
const BaseModelLiabilityDoctorInsurance = require('./Models/BaseModelLiabilityDoctorInsurance');
const LiabilityDoctorInsurance = require('./Models/LiabilityDoctorInsurance');
const ActivityArea = require('./Models/ActivityArea');
const Expertise = require('./Models/Expertise');
const CommitmentCeiling = require('./Models/CommitmentCeiling');
const InsuranceCompany = require('./Models/InsuranceCompany');
const InsuranceRiskLevel = require('./Models/InsuranceRiskLevel');
const InsurancePolicyTerm = require('./Models/InsurancePolicyTerm');
const Province = require('./Models/Province');
const ShippingType = require('./Models/ShippingType');
const PostType = require('./Models/PostType');
const InsurancePolicyCondition = require('./Models/InsurancePolicyCondition');
const InsuranceDataLiabilityDoctorInsurance =
  require('./Models/InsuranceDataLiabilityDoctorInsurance');
const LiabilityDoctorInsurancePolicyExtendView =
  require('./Models/LiabilityDoctorInsurancePolicyExtendView');
const LiabilityDoctorInsurancePolicyFilter =
  require('./Models/LiabilityDoctorInsurancePolicyFilter');
const BaseModelMedicalSpecialties = require('./Models/BaseModelMedicalSpecialties');
const ComboDataModel = require('./Models/ComboDataModel');
const CarBrand = require('./Models/CarBrand');
const BaseModelElectronicEquipmentInsurance =
  require('./Models/BaseModelElectronicEquipmentInsurance');
const CarBrandTips = require('./Models/CarBrandTips');
const CarBrandTipsModel = require('./Models/CarBrandTipsModel');
const HasPlan = require('./Models/HasPlan');
const ElectronicEquipmentInsurance = require('./Models/ElectronicEquipmentInsurance');
const Franchisee = require('./Models/Franchisee');
const DeviceType = require('./Models/DeviceType');
const InsuranceData = require('./Models/InsuranceData');
const ElectronicEquipmentInsurancePolicyExtendView =
  require('./Models/ElectronicEquipmentInsurancePolicyExtendView');
const ElectronicEquipmentInsurancePolicyFilter =
  require('./Models/ElectronicEquipmentInsurancePolicyFilter');
const BaseModelDeviceBrandTypes = require('./Models/BaseModelDeviceBrandTypes');
const DeviceBrandTypes = require('./Models/DeviceBrandTypes');
const BaseModelDiviceFranchisee = require('./Models/BaseModelDiviceFranchisee');
const DiviceFranchisee = require('./Models/DiviceFranchisee');
const OtherInsuranceTypes = require('./Models/OtherInsuranceTypes');
const SendSmsToken = require('./Models/SendSmsToken');
const ExtraData = require('./Models/ExtraData');
const Status200 = require('./Models/Status200');
const GetAccessTokenUserInfo = require('./Models/GetAccessTokenUserInfo');
const Exception = require('./Models/Exception');
const TargetSite = require('./Models/TargetSite');
const CarBrands = require('./Models/CarBrands');
const RiskLevel = require('./Models/RiskLevel');
const CarUses = require('./Models/CarUses');
const BaseModelFireInsurance = require('./Models/BaseModelFireInsurance');
const FireInsurance = require('./Models/FireInsurance');
const InsuranceExtraCoverage = require('./Models/InsuranceExtraCoverage');
const InsuranceExtraCoverageExtraData = require('./Models/InsuranceExtraCoverageExtraData');
const EverySquareMeterCoverage = require('./Models/EverySquareMeterCoverage');
const InsuranceDataFireInsurance = require('./Models/InsuranceDataFireInsurance');
const FireInsurancePolicyExtendView = require('./Models/FireInsurancePolicyExtendView');
const FireInsurancePolicyFilter = require('./Models/FireInsurancePolicyFilter');
const BaseModelEarthquake = require('./Models/BaseModelEarthquake');
const Earthquake = require('./Models/Earthquake');
const BaseModelTravelInsurance = require('./Models/BaseModelTravelInsurance');
const TravelInsurance = require('./Models/TravelInsurance');
const Zone = require('./Models/Zone');
const TravelDuration = require('./Models/TravelDuration');
const TravelAge = require('./Models/TravelAge');
const InsuranceDataTravelInsurance = require('./Models/InsuranceDataTravelInsurance');
const TravelInsurancePolicyExtendView = require('./Models/TravelInsurancePolicyExtendView');
const TravelInsurancePolicyExtend = require('./Models/TravelInsurancePolicyExtend');
const TravelInsurancePolicyFilter = require('./Models/TravelInsurancePolicyFilter');
const BaseModelElevatorInsurance = require('./Models/BaseModelElevatorInsurance');
const ElevatorInsurance = require('./Models/ElevatorInsurance');
const ElevatorType = require('./Models/ElevatorType');
const DefectOrganCoverage = require('./Models/DefectOrganCoverage');
const DeathCapitalCoverage = require('./Models/DeathCapitalCoverage');
const FinancialCoverage = require('./Models/FinancialCoverage');
const MedicalCostCoverage = require('./Models/MedicalCostCoverage');
const InsuranceDataElevatorInsurance = require('./Models/InsuranceDataElevatorInsurance');
const ElevatorInsurancePolicyExtendView = require('./Models/ElevatorInsurancePolicyExtendView');
const ElevatorInsurancePolicyFilter = require('./Models/ElevatorInsurancePolicyFilter');
const BaseModelPortalLandingPage = require('./Models/BaseModelPortalLandingPage');
const PortalLandingPage = require('./Models/PortalLandingPage');
const InsuranceGroup = require('./Models/InsuranceGroup');
const SummaryCard = require('./Models/SummaryCard');
const SummaryNotic = require('./Models/SummaryNotic');
const ImageAlbum = require('./Models/ImageAlbum');
const PopupImageGalleryie = require('./Models/PopupImageGalleryie');
const GalleryDetail = require('./Models/GalleryDetail');
const VideoGallery = require('./Models/VideoGallery');
const InsuranceCentre = require('./Models/InsuranceCentre');
const InsuranceCentrePortal = require('./Models/InsuranceCentrePortal');
const ExtraDataBaseModelPortalLandingPage = require('./Models/ExtraDataBaseModelPortalLandingPage');
const BaseModelInsuranceCentrePolicyTypes = require('./Models/BaseModelInsuranceCentrePolicyTypes');
const InsuranceCentrePolicyTypes = require('./Models/InsuranceCentrePolicyTypes');
const ExtraDataBaseModelInsuranceCentrePolicyTypes =
  require('./Models/ExtraDataBaseModelInsuranceCentrePolicyTypes');
const BaseModelDamageType = require('./Models/BaseModelDamageType');
const DamageType = require('./Models/DamageType');
const InsuranceTypes = require('./Models/InsuranceTypes');
const InsuranceCompanies = require('./Models/InsuranceCompanies');
const BaseModelTrakingCode = require('./Models/BaseModelTrakingCode');
const TrackingCode = require('./Models/TrackingCode');
const TrackingDamageStatusTrackingCode = require('./Models/TrackingDamageStatusTrackingCode');
const TrackingDamageFileTrackinCode = require('./Models/TrackingDamageFileTrackinCode');
const TrackingDamageRequest = require('./Models/TrackingDamageRequest');
const TrackingDamageStatus = require('./Models/TrackingDamageStatus');
const TrackingDamageFile = require('./Models/TrackingDamageFile');
const TrackingDamage = require('./Models/TrackingDamage');
const BaseModelStatusStatusCollections = require('./Models/BaseModelStatusStatusCollections');
const StatusStatusCollections = require('./Models/StatusStatusCollections');
const BaseModelStatus = require('./Models/BaseModelStatus');
const Status = require('./Models/Status');
const BaseModelPortalLandingContactAbout = require('./Models/BaseModelPortalLandingContactAbout');
const PortalLandingContactAbout = require('./Models/PortalLandingContactAbout');
const InsuranceCentreData = require('./Models/InsuranceCentreData');
const BaseModelFaqInsuranceCentre = require('./Models/BaseModelFaqInsuranceCentre');
const FaqInsuranceCentre = require('./Models/FaqInsuranceCentre');
const BaseModelInsurancePolicyTracking = require('./Models/BaseModelInsurancePolicyTracking');
const InsurancePolicyTracking = require('./Models/InsurancePolicyTracking');
const BaseModelSpecialPlan = require('./Models/BaseModelSpecialPlan');
const SpecialPlan = require('./Models/SpecialPlan');
const ExtraDataBaseModelSpecialPlan = require('./Models/ExtraDataBaseModelSpecialPlan');
const CarBrandModel = require('./Models/CarBrandModel');
const Status400Exception = require('./Exceptions/Status400Exception');
const InternalServerErrorException = require('./Exceptions/InternalServerErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of EasyBimehLandingLib
    Configuration,
    Environments,
    // controllers of EasyBimehLandingLib
    FileManagerController,
    LiabilityDoctorInsuranceController,
    CarBodyController,
    ElectronicEquipmentInsuranceController,
    OtherInsuranceTypesController,
    ThirdPartyInsuranceController,
    MotorcycleInsuranceController,
    FireInsuranceController,
    EarthquakeInsuranceController,
    TravelInsuranceController,
    ElevatorInsuranceController,
    MainController,
    ComboDataController,
    TrackingDamageController,
    FooterController,
    InsurancePolicyPlanController,
    // models of EasyBimehLandingLib
    BaseModelUpload,
    Upload,
    BaseModelLiabilityDoctorInsurance,
    LiabilityDoctorInsurance,
    ActivityArea,
    Expertise,
    CommitmentCeiling,
    InsuranceCompany,
    InsuranceRiskLevel,
    InsurancePolicyTerm,
    Province,
    ShippingType,
    PostType,
    InsurancePolicyCondition,
    InsuranceDataLiabilityDoctorInsurance,
    LiabilityDoctorInsurancePolicyExtendView,
    LiabilityDoctorInsurancePolicyFilter,
    BaseModelMedicalSpecialties,
    ComboDataModel,
    CarBrand,
    BaseModelElectronicEquipmentInsurance,
    CarBrandTips,
    CarBrandTipsModel,
    HasPlan,
    ElectronicEquipmentInsurance,
    Franchisee,
    DeviceType,
    InsuranceData,
    ElectronicEquipmentInsurancePolicyExtendView,
    ElectronicEquipmentInsurancePolicyFilter,
    BaseModelDeviceBrandTypes,
    DeviceBrandTypes,
    BaseModelDiviceFranchisee,
    DiviceFranchisee,
    OtherInsuranceTypes,
    SendSmsToken,
    ExtraData,
    Status200,
    GetAccessTokenUserInfo,
    Exception,
    TargetSite,
    CarBrands,
    RiskLevel,
    CarUses,
    BaseModelFireInsurance,
    FireInsurance,
    InsuranceExtraCoverage,
    InsuranceExtraCoverageExtraData,
    EverySquareMeterCoverage,
    InsuranceDataFireInsurance,
    FireInsurancePolicyExtendView,
    FireInsurancePolicyFilter,
    BaseModelEarthquake,
    Earthquake,
    BaseModelTravelInsurance,
    TravelInsurance,
    Zone,
    TravelDuration,
    TravelAge,
    InsuranceDataTravelInsurance,
    TravelInsurancePolicyExtendView,
    TravelInsurancePolicyExtend,
    TravelInsurancePolicyFilter,
    BaseModelElevatorInsurance,
    ElevatorInsurance,
    ElevatorType,
    DefectOrganCoverage,
    DeathCapitalCoverage,
    FinancialCoverage,
    MedicalCostCoverage,
    InsuranceDataElevatorInsurance,
    ElevatorInsurancePolicyExtendView,
    ElevatorInsurancePolicyFilter,
    BaseModelPortalLandingPage,
    PortalLandingPage,
    InsuranceGroup,
    SummaryCard,
    SummaryNotic,
    ImageAlbum,
    PopupImageGalleryie,
    GalleryDetail,
    VideoGallery,
    InsuranceCentre,
    InsuranceCentrePortal,
    ExtraDataBaseModelPortalLandingPage,
    BaseModelInsuranceCentrePolicyTypes,
    InsuranceCentrePolicyTypes,
    ExtraDataBaseModelInsuranceCentrePolicyTypes,
    BaseModelDamageType,
    DamageType,
    InsuranceTypes,
    InsuranceCompanies,
    BaseModelTrakingCode,
    TrackingCode,
    TrackingDamageStatusTrackingCode,
    TrackingDamageFileTrackinCode,
    TrackingDamageRequest,
    TrackingDamageStatus,
    TrackingDamageFile,
    TrackingDamage,
    BaseModelStatusStatusCollections,
    StatusStatusCollections,
    BaseModelStatus,
    Status,
    BaseModelPortalLandingContactAbout,
    PortalLandingContactAbout,
    InsuranceCentreData,
    BaseModelFaqInsuranceCentre,
    FaqInsuranceCentre,
    BaseModelInsurancePolicyTracking,
    InsurancePolicyTracking,
    BaseModelSpecialPlan,
    SpecialPlan,
    ExtraDataBaseModelSpecialPlan,
    CarBrandModel,
    // exceptions of EasyBimehLandingLib
    Status400Exception,
    InternalServerErrorException,
    APIException,
};

module.exports = initializer;
