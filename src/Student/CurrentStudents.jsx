import React from "react";
import StudentHeader from "./StudentHeader";
import Buttons from "./Buttons";
import Footer from "../common/Footer";

const links = [
  { link: "/", title: "REGISTRATION PROCEDURE" },
  { link: "/", title: "PROGRAMMES, FEES AND CHARGES" },
  { link: "/", title: "STUDENT PORTALS" },
  { link: "/", title: "E-NOTICE & ANNOUNCEMENTS" },
  { link: "/", title: "DRESS CODE E-BROCHURE" },
  { link: "/", title: "STUDENT MAIL" },
  { link: "/", title: "ACADEMIC CALENDAR" },
  { link: "/", title: "RECORDS APPLICATION (TRANSCRIPT)" },
  { link: "/", title: "LIBRARY" },
  { link: "/", title: "STUDENT E-LEARNING/ONLINE COURSES GUIDE" },
  { link: "/", title: "ONLINE COURSES LMS" },
  { link: "/", title: "STUDENT GOVERNMENT" },
  { link: "/", title: "HEALTH & SAFETY" },
];
const CurrentStudents = () => {
  return (
    <>
      <StudentHeader title="CURRENT STUDENTS" />
      <div style={{ backgroundColor: "#fff", padding: "8rem 0" }}>
        {links.map((l, i) => (
          <Buttons link={l.link} title={l.title} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default CurrentStudents;
