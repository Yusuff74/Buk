import React from "react";
import Buttons from "./Buttons";
import Footer from "../common/Footer";
import StudentHeader from "./StudentHeader";

const ProspectiveStudents = () => {
  return (
    <>
      <StudentHeader title="PROSPECTIVE STUDENTS" />
      <div className="container">
        <Buttons
          link="/application_requirements"
          title="APPLICATION REQUIREMENTS"
        />
        <Buttons link="/application_procedure" title="APPLICATION PROCEDURE" />
        <Buttons link="/students_portal_new" title="APPLICATION PORTALS" />
        <Buttons link="/e-notices" title="E-NOTICE & ANNOUNCEMENTS" />
        <Buttons link="/myScreening" title="ADMISSION CHECKER" />
        <Buttons
          link="/programmes_fees_charges"
          title="PROGRAMMES, FEES & CHARGES"
        />
        <Buttons
          link="/students_portal_returning"
          title="REGISTRATION PORTALS"
        />
        <Buttons link="/buk_dresscode" title="DRESS CODE E-BROCHURE" />
        <Buttons link="/" title="CALENDAR" />
        <Buttons link="/health_safety" title="HEALTH & SAFETY" />
      </div>
      <Footer />
    </>
  );
};

export default ProspectiveStudents;
