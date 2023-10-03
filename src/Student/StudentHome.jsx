import React from "react";
import Buttons from "./Buttons";
import Footer from "../common/Footer";
import MainHeader from "./MainHeader";

const StudentHome = () => {
  return (
    <>
      <MainHeader title="STUDENTS" />
      <div className="container">
        <Buttons link="/prospective-students" title="PROSPECTIVE STUDENTS" />

        <Buttons link="/returning-students" title="CURRENT STUDENTS" />

        <Buttons
          link="/guidance_counselling"
          title="GUIDANCE AND COUNSELLING UNIT"
        />
      </div>
      <Footer />
    </>
  );
};

export default StudentHome;
