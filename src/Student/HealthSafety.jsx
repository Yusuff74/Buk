import React from "react";
import MainHeader from "./MainHeader";
import Buttons from "./Buttons";
import Footer from "../common/Footer";

const links = [
  { link: "", title: "HEALTH SERVICES" },
  { link: "", title: "FIRE SERVICES" },
  { link: "", title: "COUNSELLING & PHSYCOLOGICAL SERVICES" },
  { link: "", title: "INSTITUTIONAL SECURITY" },
  { link: "", title: "POLICE" },
  { link: "", title: "SECURITY ALERT" },
];
const HealthSafety = () => {
  return (
    <>
      <MainHeader title="HEALTH & SAFETY" />
      <div style={{ backgroundColor: "#fff", padding: "8rem 0" }}>
        {links.map((l, i) => (
          <Buttons key={i} link={l.link} title={l.title} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HealthSafety;
