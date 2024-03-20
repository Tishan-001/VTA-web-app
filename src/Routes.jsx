import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AddAdminData from "pages/AddAdminData";
import AddFAQ from "pages/AddFAQ";
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
const Sinup=React.lazy(()=>import("pages/SignUp"))
const MedicalDetail=React.lazy(()=>import("pages/MedicalDetail"))
const DoctorDetails=React.lazy(()=>import("pages/DoctorDetails"))
const Locationdetails=React.lazy(()=>import("pages/LocationDetails"))
const Location=React.lazy(()=>import("pages/Location"))
const Admin=React.lazy(()=>import("pages/Admin"))



const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPageUI />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/allpackagespageui" element={<AllpackagesPageUI />} />
          <Route path="/hotelbookingpage" element={<HotelBookingpage />} />
          <Route path="/frameOne/:roomId" element={<FrameOne />} />
          <Route path='/tours/:id' element={<HotelBookingDescriptionPageUI />} />
          <Route path="/tranportui" element={<TranportUIPage />} />
          <Route path="/tourguidersui" element={<TourGuidersUI />} />
          <Route path="/guidedetil" element={<GuideDetail/>}/>
          <Route path="/taxidetil" element={<TaxiDetail/>}/>
          <Route path="/packagedetails" element={<PackageDetails/>}/>
          <Route path="/medical" element={<Medical/>}/>
          <Route path="/sinup" element={<Sinup/>}/>
          <Route path="/medicaldetial" element={<MedicalDetail/>}/>
          <Route path="/doctordetails" element={<DoctorDetails/>}/>
          <Route path="/locationdetails" element={<Locationdetails/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/addadmindata" element={<AddAdminData/>}/>
          <Route path="/addfaq" element={<AddFAQ/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
