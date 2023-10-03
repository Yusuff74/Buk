import React from "react";
import Buttons from "./Buttons";
import MainHeader from "./MainHeader";
import Footer from "../common/Footer";

const links = [
  { link: "", title: "UNDERGRADUATE REGISTRATION PORTAL" },
  { link: "", title: "PART-TIME REGISTRATION PORTAL" },
  { link: "", title: "SCHOOL OF POSTGRADUATE STUDIES REGISTRATION PORTAL" },
  { link: "", title: "DBS REGISTRATION PORTAL" },
];
const RegistrationPortal = () => {
  return (
    <>
      <MainHeader title="STUDENT'S REGISTRATION PORTAL" />
      <div style={{ padding: "10rem 0" }}>
        {links.map((l, i) => (
          <Buttons title={l.title} link={l.link} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPortal;
