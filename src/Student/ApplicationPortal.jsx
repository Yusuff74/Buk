import React from "react";
import MainHeader from "./MainHeader";
import Buttons from "./Buttons";
import Footer from "../common/Footer";

const date = new Date().getFullYear();

const links = [
  { link: "/myScreening", title: "ADMISSION CHECKER" },
  {
    link: `/bukat${date}/bukat_login`,
    title: "APTITUDE TEST REGISTRATION PORTAL",
  },
  { link: "/bukdes", title: "DE SCREENING APPLICATION PORTAL" },
  { link: "/myScreening", title: "UNDERGRADUATE ONLINE SCREENING" },
  { link: "/sceform", title: "PART-TIME APPLICATION PORTAL" },
  { link: "/dbsform2021", title: "DBS APPLICATION PORTAL" },
  { link: "/spsform2021", title: "POSTGRADUATE APPLICATION PORTAL" },
];
const ApplicationPortal = () => {
  return (
    <>
      <MainHeader title="NEW STUDENT'S APPLICATION PORTAL " />
      <div style={{ padding: "10rem 0" }}>
        {links.map((l, i) => (
          <Buttons key={i} link={l.link} title={l.title} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ApplicationPortal;
