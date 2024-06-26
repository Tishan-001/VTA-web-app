import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AddAdminData from "pages/AddAdminData";
import AddFAQ from "pages/AddFAQ";
import AddPackagePricing from "pages/AddPackagePricing";
import AddPackagePublish from "pages/AddPackagePublish";
import AddHotelData from "pages/AddHotelDetails/AddHotelData";
import AddHotelPricing from "pages/AddHotelPricing/AddHotelPricing";
import AddGuiderData from "pages/AddGuiderData/AddGuiderData";
import AddVehicalData from "pages/AddNewTransport/AddVehicalData";
import AddVehicalPricing from "pages/AddVehicalPricing/AddVehicalPricing";
import SignInPage from "pages/SignIn/SignIn";
import EmailComformation from "pages/EmailComformation/EmailComformation";
import FogotPassword from "pages/FogotPassword/FogotPassword";
import InstructionSent from "pages/CheckEmail/CheckEmail";
import NewPassword from "pages/CreateNewPassword/CreateNewPassword";
import AddAdminGallery from "pages/AddAdminGallery";
import NewHotemServiceProvider from "pages/NewHotelServiceProvider/NewHotelServiceProvider";
import NewTourGuideServiceProvider from "pages/NewTourGuideServiceProvider/NewTourGuideServiceProvider";
import UpdateTourGuide from "pages/TourGuideUpdate/UpdateTourGude";
import UpdateHotel from "pages/UpdateHotel/UpdateHotelProfile";
import ChooseServiceProviders from "pages/ChooseServiceProviders/ChooseServiceProviders";
import NewTourPackage from "pages/NewTourPackage/NewTourPackage";
import AddNewRoom from "pages/AddNewRoom/AddNewRoom";
import AboutUs from "pages/About us/aboutus";
import AddVehicle from "pages/AddVehical/addVehicle";
import EditVehicle from "pages/AddVehical/editVehicle";
import AddTranspotation from "pages/AddTranspotation/addTranportation";
import Upload from "pages/fileUpload/upload"
import TourGuideBooking from "pages/TourGuideBookig/tourguidebooking";
import TransportBooking from "pages/TransportBooking/transportbooking";


const HotelBookingpage = React.lazy(() => import("pages/HotelBookingpage"));
const AllpackagesPageUI = React.lazy(() => import("pages/AllpackagesPageUI"));
const LandingPageUI = React.lazy(() => import("pages/LandingPageUI"));
const HotelBookingDescriptionPageUI =React.lazy(() => import("pages/HotelBookingDescriptionPageUI"));
const FrameOne =React.lazy(() => import("pages/HotelBookingForm"));
const TranportUIPage=React.lazy(() => import("pages/TranportUI"));
const TourGuidersUI = React.lazy(() => import("pages/TourGuidersUI"));
const GuideDetail= React.lazy(()=>import("pages/GuideDetailOne"));
const TaxiDetail= React.lazy(()=>import("pages/TaxiDetail"));
const PackageDetails=React.lazy(()=>import("pages/PackageDetails"))
const Medical=React.lazy(()=>import("pages/Medical"))
const Signup=React.lazy(()=>import("pages/SignUp"))
const MedicalDetail=React.lazy(()=>import("pages/MedicalDetail"))
const DoctorDetails=React.lazy(()=>import("pages/DoctorDetails"))
const Locationdetails=React.lazy(()=>import("pages/LocationDetails"))
const Location=React.lazy(()=>import("pages/Location"))
const Admin=React.lazy(()=>import("pages/Admin"))
const AdminHotel=React.lazy(()=>import("pages/AdminHotel/HotelSummary"))
const AdminGuider=React.lazy(()=>import("pages/AdminGuider/GuiderSummary"))
const AdminTravel=React.lazy(()=>import("pages/AdminTransport/AdminSumary"))
const Payment=React.lazy(()=>import("pages/Payment"))

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageUI />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/allpackagespageui" element={<AllpackagesPageUI />} />
          <Route path="/hotelbookingpage" element={<HotelBookingpage />} />
          <Route path="/room/:roomId" element={<FrameOne />} />
          <Route path='/tours/:id' element={<HotelBookingDescriptionPageUI />} />
          <Route path="/tranportui" element={<TranportUIPage />} />
          <Route path="/tourguidersui" element={<TourGuidersUI />} />
          <Route path="/guidedetil/:id" element={<GuideDetail/>}/>
          <Route path="/taxidetil" element={<TaxiDetail />} />  
          <Route path="/packagedetails/:id" element={<PackageDetails/>}/>
          <Route path="/medical" element={<Medical/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/emailConformation" element={<EmailComformation/>}/>
          <Route path="/login" element={<SignInPage/>}/>
          <Route path="/fogotpassword" element={<FogotPassword/>}/>
          <Route path="/newpassword" element={<NewPassword/>}/>
          <Route path="/ " element={<InstructionSent/>}/>
          <Route path="/medicaldetial" element={<MedicalDetail/>}/>
          <Route path="/doctordetails" element={<DoctorDetails/>}/>
          <Route path="/locationdetails" element={<Locationdetails/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin-hotel" element={<AdminHotel/>}/>
          <Route path="/admin-guider" element={<AdminGuider/>}/>
          <Route path="/admintransport" element={<AdminTravel/>}/>
          <Route path="/addadmindata" element={<AddAdminData/>}/>
          <Route path="/addfaq" element={<AddFAQ/>}/>
          <Route path="/addpackagepricing" element={<AddPackagePricing/>}/>
          <Route path="/addhoteldata" element={<AddHotelData/>}/>
          <Route path="/addhotelpricing" element={<AddHotelPricing/>}/>
          <Route path="/addguiderdata" element={<AddGuiderData/>}/>
          <Route path="/addvehicaldata" element={<AddVehicalData/>}/>
          <Route path="/addvehicalpricing" element={<AddVehicalPricing/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/addadmingallery" element={<AddAdminGallery/>}/>
          <Route path="/addadminpublish" element={<AddPackagePublish/>}/>
          <Route path="/new-hotel-add" element={<NewHotemServiceProvider/>}/>
          <Route path="/update-hotel" element={<UpdateHotel/>}/>
          <Route path="/new-guide-add" element={<NewTourGuideServiceProvider/>}/>
          <Route path="/update-guide" element={<UpdateTourGuide/>}/>
          <Route path="/chooseserviceproviders" element={<ChooseServiceProviders/>}/>
          <Route path="/new-tour-package" element={<NewTourPackage/>}/>
          <Route path="/add-new-room" element={<AddNewRoom/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/addtranspotation" element={<AddTranspotation/>}/>
          <Route path="/addVehical" element={<AddVehicle/>}/>
          <Route path="/editVehical" element={<EditVehicle/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/tourguidebooking/:id" element={<TourGuideBooking/>}/>
          <Route path="/transportbooking" element={<TransportBooking/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;