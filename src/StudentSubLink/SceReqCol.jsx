import React from "react";
import { Link } from "react-router-dom";

const SceReqCol = () => {
  const divStyle = {
    marginTop: "2rem",
    position: "relative",
    backgroundColor: "#EEEEEE",
    border: "1px solid #aaaaaa",
    boxShadow: "1px 1px 2px #FFFFFF inset",
    borderRadius: "4px 4px 0 0",
    padding: "0 .7rem",
  };
  const spanStyle = {
    textAlign: "center",
    position: "absolute",
    top: "-1rem",
    width: "80%",
    transform: "translateX(-50%)",
    left: "50%",
    backgroundColor: "#fff",
    padding: ".3rem",
    fontSize: "1.3rem",
    border: "1px solid #aaa",
    boxShadow: "0 15px 20px 0 rgba(0,0,0,0.5)",
  };
  return (
    <>
      <div className="col">
        <div style={divStyle}>
          <span style={spanStyle}>
            Mode of Delivery and Duration of the{" "}
            <Link
              to="/sceforms/availableprogrammes"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Part-Time Degree Programmes
            </Link>
          </span>
          <p
            className="text-center"
            style={{
              letterSpacing: "1px",
              lineHeight: "1.7",
              marginTop: "3rem",
            }}
          >
            The programmes are to be run on part-time basis. Courses will be
            taught through normal lectures and practical classes to be conducted
            in the evenings and over the weekends at the Bayero University’s
            School of Continuing Education (SCE) situated on Aminu Kano Way,
            near Gwauron Dutse Hill within Kano City. The programmes will not be
            run through Open and Distance Learning (ODL) mode.
          </p>
          <p className="text-center">
            Admission will be available for both DE and UTME. .
          </p>
        </div>
        <div style={divStyle}>
          <span style={spanStyle}>
            Admission Requirement for the{" "}
            <Link
              to="/sceforms/availableprogrammes"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Part-Time Degree Programmes
            </Link>
          </span>
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "550",
              marginTop: "3rem",
              textAlign: "center",
            }}
          >
            Applicants for admission into the programmes must satisfy the
            following conditions:
          </p>
          <p style={{ fontWeight: "550", textAlign: "left" }}>UTME ADMISSION</p>
          <ol>
            <li>
              A) minimum of five ‘O’ Level Credits in relevant subjects
              including English at not more than two sittings.
            </li>
            <li>
              b) A minimum of 180 points at 2019/2020 UTME. Note that only
              applicants who choose Bayero University, Kano as their first
              choice are eligible to apply.
            </li>
            <li>
              c) In addition, applicants for admission into B. Sc. Accounting,
              B.Sc. Business Administration, B.Sc. Mathematics, B. Sc. (Ed)
              Mathematics, B. Sc. Health Education and B. Sc. (Ed) Economics
              must also have credits in ‘O’ Level Mathematics.
            </li>
            <li>
              d) Holders of National Board for Arabic and Islamic Studies
              Certificates (NBAIS) can only apply for B. A. Arabic and B. A.
              Islamic Studies.
            </li>
          </ol>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontWeight: "550" }}>DIRECT ENTRY ADMISSION</p>
            <p>
              Applicants for Admission into the programmes must satisfy the
              following conditions:
            </p>
            <ol>
              <li>
                Possess a recognized Advanced Level qualification in the area
                relevant to the programme of choice. Such qualification(s)
                include(s) National Diploma (ND), Nigeria Certificate in
                Education (NCE), Interim Joint Matriculation Board (IJMB) –
                (with a minimum of 6 points), Nursing Certificate, Diploma in
                Health Education, Diploma in Community Health, Diploma in
                Environmental Health, General Certificate of Education (GCE),
                ‘A’ Level and any other relevant qualification(s).
              </li>
              <li>
                Possess a minimum of five (5) ‘O’ Level Credits in relevant
                subjects, including English.
              </li>
              <li>Must be at least 25 years old and above.</li>
              <li>
                In addition, applicants for admission into B. Sc. Accounting,
                B.Sc. Business Administration, B.Sc. Mathematics, B. Sc. (Ed)
                Mathematics and B. Sc. (Ed) Economics must also have credits in
                ‘O’ Level Mathematics. While candidates for B. Nursing Science
                and B. Sc. Health Education must have credits in English,
                Mathematics, Biology, Chemistry and Physics.
              </li>
              <li>
                Holders of National Board for Arabic and Islamic Studies
                Certificates (NBAIS) can only apply for B. A. Arabic and B. A.
                Islamic Studies.
              </li>
              <li>
                Candidates applying for B. Sc. Public Administration should
                possess a credit in Government/History in addition.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SceReqCol;
