import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./common/Home";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./common/Navbar";
import StudentHome from "./Student/StudentHome";
import ProspectiveStudents from "./Student/PropectiveStudents";
import CurrentStudents from "./Student/CurrentStudents";
import Guidance from "./Student/Guidance";
import ApplicationRequirement from "./Student/ApplicationRequirement";
import ApplicationProcedure from "./Student/ApplicationProcedure";
import ApplicationPortal from "./Student/ApplicationPortal";
import ENotoce from "./Student/ENotice";
import MyScreening from "./Student/MyScreening";
import ProgrammeFess from "./Student/ProgrammeFees";
import RegistrationPortal from "./Student/RegistrationPortal";
import DressCode from "./Student/DressCode";
import HealthSafety from "./Student/HealthSafety";
import BUKAT from "./Student/BUKAT";
import BUKDES from "./Student/BUKDES";
import SceForms from "./Student/SceForms";
import DbsForm from "./Student/DbsForm";
import PGForms from "./Student/PGForms";
import ScreeningLogin from "./StudentSubLink/ScreeningLogin";
import BukatProcedure from "./StudentSubLink/BukatProcedures";
import BukatEligible from "./StudentSubLink/BukatEligible";
import BukdesLogin from "./StudentSubLink/BukdesLogin";
import SceFormsProgrammes from "./Utilitis/SceFormsProgrammes";
import SceFormProcedure from "./StudentSubLink/SceFormProcedure";
import SceFormRequirement from "./StudentSubLink/SceFormRequirement";
import ScePaymentProcedure from "./StudentSubLink/ScePaymentProc";
import SceRegisterForm from "./StudentSubLink/SceRegisterForm";
import ScePasswordRecovery from "./StudentSubLink/ScePasswordRecovery";
import DbsFormsNew from "./StudentSubLink/DbsFormsNew";
import DbsFormsLogin from "./StudentSubLink/DbsFormsLogin";
import DbsProgrammes from "./StudentSubLink/DbsProgrammes";
import DbsAdmission from "./StudentSubLink/DbsAdmission";
import DbsProcedure from "./StudentSubLink/DbsProcedure";
import SpsFormsProgrammes from "./StudentSubLink/SpsFormsProgrammes";
import SpsAdmissionReq from "./StudentSubLink/SpsAdmissionReq";
import SpsApplicationProcedure from "./StudentSubLink/SpsApplicationProce";
import SpsPaymentProcdure from "./Student/SpcPaymentProce";
import SpsFormLogin from "./StudentSubLink/SpsFormLogin";
import SpsFormNew from "./StudentSubLink/SpsFormNew";
import SpsRecoverPassword from "./StudentSubLink/SpsRecoverPassword";
import { DataProvider } from "./Utilitis/DataContext";
import ProfileUpdate from "./New Student/ProfileUpdate";
import OlevelUpdate from "./New Student/OleveUpdate";
import BukatStudentInfo from "./isolateFile/BukatStudentInfo";

function App() {
  const location = useLocation();
  const date = new Date().getFullYear();
  const bukatPath = `/bukat${date}/bukat_login`;

  const isOnMyScreening = location.pathname === "/";
  const isOnBukdes = location.pathname === "/students";
  const isOnSce = location.pathname === "/prospective-students";
  const isOnDbs = location.pathname === "/returning-students";
  const isOnSps = location.pathname === "/guidance_counselling";
  const isOnSclogin = location.pathname === "/application_requirements";
  const isOnBukat = location.pathname === "/application_procedure";
  const isOnPortalNew = location.pathname === "/students_portal_new";
  const isOnEnotice = location.pathname === "/e-notices";
  const isOnPFC = location.pathname === "/programmes_fees_charges";
  const isOnDresscode = location.pathname === "/buk_dresscode";
  const isOnHealth = location.pathname === "/health_safety";
  return (
    <>
      {isOnMyScreening ||
      isOnBukat ||
      isOnBukdes ||
      isOnSce ||
      isOnDbs ||
      isOnSclogin ||
      isOnPortalNew ||
      isOnEnotice ||
      isOnPFC ||
      isOnDresscode ||
      isOnHealth ||
      isOnSps ? (
        <Navbar />
      ) : null}
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentHome />} />
          <Route
            path="/prospective-students"
            element={<ProspectiveStudents />}
          />
          <Route path="/returning-students" element={<CurrentStudents />} />
          <Route path="/guidance_counselling" element={<Guidance />} />
          <Route
            path="/application_requirements"
            element={<ApplicationRequirement />}
          />
          <Route
            path="/application_procedure"
            element={<ApplicationProcedure />}
          />
          <Route path="/students_portal_new" element={<ApplicationPortal />} />
          <Route path="/e-notices" element={<ENotoce />} />
          <Route path="/myScreening" element={<MyScreening />} />
          <Route path="/programmes_fees_charges" element={<ProgrammeFess />} />
          <Route
            path="/students_portal_returning"
            element={<RegistrationPortal />}
          />
          <Route path="/buk_dresscode" element={<DressCode />} />
          <Route path="/health_safety" element={<HealthSafety />} />
          <Route path={bukatPath} element={<BUKAT />} />
          <Route path={"/bukdes"} element={<BUKDES />} />
          <Route path={"/bukdes/guidelines"} element={<BUKDES />} />
          <Route path={"/bukdes/bukdes_login"} element={<BukdesLogin />} />
          <Route path={"/sceform"} element={<SceForms />} />
          <Route path={"/dbsform2021"} element={<DbsForm />} />
          <Route path={"/spsform2021"} element={<PGForms />} />
          <Route path={"/myScreening/login"} element={<ScreeningLogin />} />
          <Route path={"/bukat2022/procedures"} element={<BukatProcedure />} />
          <Route path={"/bukat2022/eligibility"} element={<BukatEligible />} />
          <Route
            path={"/sceforms/availableprogrammes"}
            element={<SceFormsProgrammes />}
          />
          <Route
            path={"/sceforms/applicationprocedure"}
            element={<SceFormProcedure />}
          />
          <Route
            path={"/sceforms/admissionrequirements"}
            element={<SceFormRequirement />}
          />
          <Route
            path={"/sceforms/paymentprocedure"}
            element={<ScePaymentProcedure />}
          />
          <Route
            path={"/sceforms/create_account"}
            element={<SceRegisterForm />}
          />
          <Route path={"/sceforms/login"} element={<SceForms />} />
          <Route
            path={"/sceforms/recover_password"}
            element={<ScePasswordRecovery />}
          />
          <Route
            path={"/spsforms/recover_password"}
            element={<SpsRecoverPassword />}
          />
          <Route path={"/dbsform/create_account"} element={<DbsFormsNew />} />
          <Route path={"/spsforms/create_account"} element={<SpsFormNew />} />
          <Route path={"/dbsform/login"} element={<DbsFormsLogin />} />
          <Route path={"/spsforms/login"} element={<SpsFormLogin />} />
          <Route
            path={"/dbsform/available_programme"}
            element={<DbsProgrammes />}
          />
          <Route
            path={"/dbsform/admission_requirements"}
            element={<DbsAdmission />}
          />
          <Route
            path={"/dbsform/application_procedure"}
            element={<DbsProcedure />}
          />
          <Route
            path={"/spsform2021/availableprogrammes"}
            element={<SpsFormsProgrammes />}
          />
          <Route
            path={"/spsformsadmissionrequirements"}
            element={<SpsAdmissionReq />}
          />
          <Route
            path={"/spsforms/applicationprocedure"}
            element={<SpsApplicationProcedure />}
          />
          <Route
            path={"/spsforms/paymentprocedure"}
            element={<SpsPaymentProcdure />}
          />
          <Route path="Bukat/profileupdate" element={<ProfileUpdate />} />
          <Route path="Bukat/olevelupdate" element={<OlevelUpdate />} />
          <Route path="Bukat/bukatstudentinfo" element={<BukatStudentInfo />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
