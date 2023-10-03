import React from "react";
import StudentHeader from "./StudentHeader";
import Buttons from "./Buttons";
import Footer from "../common/Footer";

const links = [
  { link: "/", title: "MID SEMESTER BREAK", desc: "SEPTEMBER 07, 2023" },
  {
    link: "/",
    title:
      "Special Resit Examinations for final year, spill-over I and spill-over II students Guidelines",
    desc: "SEPTEMBER 1st, 2023",
  },
  {
    link: "/",
    title: "  Resumption of On-Campus Jobs for Students",
    desc: "AUGUST 21, 2023",
  },
  {
    link: "/",
    title: "  HOW TO ACCESS THE GSP/EEP ONLINE TEACHING PLATFORM",
    desc: "AUGUST 18, 2023",
  },
  { link: "/", title: "E-LEARNING TRAINING SCHEDULE", desc: "AUGUST 18, 2023" },
  {
    link: "/",
    title:
      "Special Resit Examinations for final year, spill-over I and spill-over II students to hold from 11th to 15th September 2023.",
    desc: "AUGUST 17, 2023",
  },
  {
    link: "/",
    title: "Extension Of Undergraduate Registration for the 2021/2022 Session.",
    desc: "AUGUST 10, 2023",
  },
  {
    link: "/",
    title: "First Batch PG Admissions List For The 2021/2022 Academic Session.",
    desc: "AUGUST 02, 2023",
  },
  {
    link: "/",
    title:
      "BUK reopens the University for normal academic activities from Monday, 10th July, 2023 for the commencement of 2022/2023 academic session.",
    desc: "JUNE 30, 2023",
  },
  {
    link: "/",
    title:
      "SThe management of Bayero university has revised and increased the central registration fees, administrative and hostel maintenance charges for undergraduate and postgraduate students.",
    desc: "JUNE 23, 2023",
  },
  {
    link: "/",
    title:
      "BUK reopens the University for normal academic activities from 21st March, 2023, after the elections break.",
    desc: "MARCH 20, 2023",
  },
  {
    link: "/",
    title:
      "BUK closes University and suspends academic activities from 22nd February to 14th March, 2023, for general elections.",
    desc: "FEBRUARY 20, 2023",
  },
  {
    link: "/",
    title: "Join us Live for our 36th & 37th Combined Convocation Lecture",
    desc: "FEBRUARY 07, 2023",
  },
  {
    link: "/",
    title:
      "Join us Live for our 36th & 37th (2018/2019 & 2019/2020 sessions) Combined Convocation Ceremonies",
    desc: "FEBRUARY 07, 2023",
  },
  {
    link: "/",
    title: " DBS Sales of form 2021/2022 Session Commences",
    desc: "FEBRUARY 06, 2023",
  },
  {
    link: "/",
    title: "Schedule of Payment for the 36Th and 37Th Convocation Charges",
    desc: "JANUARY 23, 2023",
  },
  {
    link: "/",
    title: "PhD Nursing 2021/2022 Session Postgraduate Call for Application",
    desc: "NOVEMBER 09, 2022",
  },
  {
    link: "/",
    title:
      "Students directed to vacate hostels as on-campus job scheme is suspended",
    desc: "MARCH 17, 2022",
  },
  {
    link: "/",
    title: "New Link for SCE (part-time) Registration",
    desc: "FEBRUARY 21, 2022",
  },
  {
    link: "/",
    title: "2020/2021 4th Batch Postgraduate Admissions",
    desc: "JANUARY 27, 2022",
  },
  {
    link: "/",
    title: "Closure Of Registration Exercise For 2020/2021 Academic Session",
    desc: "JANUARY 21, 2022",
  },
  {
    link: "/",
    title: "Deanery, Student Affairs Skills Acquisition Form",
    desc: "JANUARY 06, 2022",
  },
  {
    link: "/",
    title: "2020/2021 and 2021/2022 Documentation Exercise",
    desc: "JANUARY 06, 2022",
  },
  {
    link: "/",
    title: "2020/2021 3Rd Batch Postgraduate Admissions",
    desc: "JANUARY 05, 2022",
  },
  { link: "/", title: "Mid- Semester Break", desc: "DECEMBER 25, 2021" },
  {
    link: "/",
    title: "Deadlines for PG Application and Registration",
    desc: "DECEMBER 24, 2021",
  },
  {
    link: "/",
    title: "ONLINE CLASSES/MOODLE LINKS",
    desc: "DECEMBER 20, 2021",
  },
  {
    link: "/",
    title: "2nd Batch (Addendum) of Post Graduate School Admissions",
    desc: "DECEMBER 16, 2021",
  },
  {
    link: "/",
    title: "1st List of 20212022 Admissions",
    desc: "DECEMBER 16, 2021",
  },
  {
    link: "/",
    title: "SUPPLEMENTARY 2021/2022 ADMISSIONS",
    desc: "DECEMBER 16, 2021",
  },
  {
    link: "/",
    title:
      "Updated Important Announcement for Candidates Admitted into BUK for the 2021/2022 Academic Session",
    desc: "NOVEMBER 25, 2021",
  },
  {
    link: "/",
    title:
      "School Of Postgraduate Studies Second Batch Admissions For 2020/2021 Session",
    desc: "NOVEMBER 25, 2021",
  },
  {
    link: "/",
    title: "On-campus Jobs for Students",
    desc: "NOVEMBER 17, 2021",
  },
  {
    link: "/",
    title: "DBS Registration 2020/2021 Session is Ongoing",
    desc: "NOVEMBER 16, 2021",
  },
  {
    link: "/",
    title: "BUK Postpones Lectures for Level 100 Students",
    desc: "NOVEMBER 09, 2021",
  },
  {
    link: "/",
    title: "New Link for Registration Portals",
    desc: "SEPTEMBER 30, 2021",
  },
  {
    link: "/",
    title:
      "BUK Aptitude Test (BUKAT 2020) for 2020/2021 Admission Exercise Registration Continues",
    desc: "NOVEMBER 03, 2020",
  },
  {
    link: "/",
    title:
      "BUK Direct Entry Screening (BUKDES 2020) for 2020/2021 Admission Exercise Registration Continues",
    desc: "NOVEMBER 02, 2020",
  },
  { link: "/", title: "Student Dress Code Rules and Regulations", desc: "" },
  {
    link: "/",
    title: "Certificate Verification and Transcript Request Engine",
    desc: "",
  },
];
const ENotoce = () => {
  return (
    <>
      <StudentHeader title="E-NOTICES & ANNOUNCEMENTS" />
      <div style={{ backgroundColor: "#fff", padding: "8rem 0" }}>
        <marquee
          scrollamount="4"
          style={{
            padding: "0 5rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Mid-Semester break commences on Monday, 11th to Sunday 17th September,
          2023. Lectures resume on Monday, 18th September. 2023. On-Campus Jobs
          for Students Resumes e-Learning training to be held from 18th to 29th
          August, 2023 Special Resit Examinations to hold from 11th to 15th
          September 2023 Undergraduate Registration for the 2021/2022 Session
          extended to 10th September 2023 First batch pg admissions list for the
          2021/2022 academic session is out. BUK reopens the University for
          normal academic activities from Monday, 10th July, 2023 for the
          commencement of 2022/2023 academic session. Increase in central
          registration fees, administrative and hostel maintenance charges for
          undergraduate and postgraduate students. DBS Sales of form 2021/2022
          Session Commences. UG Online classes link:
          https://mybuk4.buk.edu.ng/moodle SCE Online classes link:
          https://mybuk2.buk.edu.ng/moodle
        </marquee>
        {links.map((L, I) => (
          <Buttons link={L.link} title={L.title} desc={L.desc} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ENotoce;
