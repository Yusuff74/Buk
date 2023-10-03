import React from "react";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";
import DbsFooter from "../Utilitis/DbsFooter";
import { FaGraduationCap } from "react-icons/fa";

const DbsProgrammes = () => {
  return (
    <>
      <DbsSublinksMain
        children={
          <>
            <h1 style={{ textAlign: "center" }}>
              <FaGraduationCap /> Available Programmes
            </h1>
            <hr />
            <div style={{ textAlign: "left" }}>
              <p>The Postgraduate Programmes available are:</p>
              <ol>
                <li>Postgraduate Diploma in Management (PGDM)</li>
                <li>Masters in Entrepreneurship (M.Ent)</li>
                <li>
                  Masters in Business Administration (MBA) in the following
                  specialisations:-
                </li>
                <ul style={{ listStyle: "circle" }}>
                  <li>Finance and Investment (MBA, Finance)</li>
                  <li>Human Resource Management (MBA, HR)</li>
                  <li>Marketing (MBA, MKT)</li>
                  <li>Entrepreneurship and Venture Creation (MBA, EVC)</li>
                  <li>Information and Communications Technology (MBA, ICT)</li>
                  <li>Health Services Management (MBA, HSM)</li>
                  <li>Project Management (MBA, PM)</li>
                </ul>
              </ol>
            </div>
          </>
        }
      />
      <DbsFooter />
    </>
  );
};

export default DbsProgrammes;
