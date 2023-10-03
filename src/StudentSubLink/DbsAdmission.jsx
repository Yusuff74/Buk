import React from "react";
import DbsFooter from "../Utilitis/DbsFooter";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";
import { FaLandmark } from "react-icons/fa";

const DbsAdmission = () => {
  return (
    <>
      <DbsSublinksMain
        children={
          <>
            <h1 style={{ textAlign: "center" }}>
              <FaLandmark /> Admission Requirements
            </h1>
            <hr />
            <div style={{ textAlign: "left" }}>
              <h3>Masters in Business Administration (MBA)</h3>
              <ol>
                <li>
                  Candidates for admission into MBA (Regular) should have:
                </li>
                <ul style={{ listStyle: "lower-latin" }}>
                  <li>
                    A minimum of a Good Second Class Degree in Accounting,
                    Business Administration, Management, Economics, Banking and
                    Finance from any recognized University; or
                  </li>
                  <li>
                    A Degree or HND with a minimum of Lower Credit plus
                    University Postgraduate Diploma with a minimum of Merit in
                    the relevant areas from any recognized University.
                  </li>
                </ul>
                <li>
                  Candidates for admission into MBA (Special) should have a
                  minimum of a Good Second Class Degree in any discipline from
                  Bayero University, Kano or any other recognized University.
                </li>
              </ol>
              <h3>Postgraduate Diploma in Management (PGDM)</h3>
              <ol>
                <li>
                  Candidates for admission into PGDM shall possess a Degree in
                  any discipline from any recognized university; or
                </li>
                <li>
                  HND with a minimum classification of Lower Credit obtained
                  from recognized institutions.
                </li>
                <li>
                  The candidate is also required to have at least one years of
                  post graduation experience.
                </li>
              </ol>
            </div>
          </>
        }
      />
      <DbsFooter />
    </>
  );
};

export default DbsAdmission;
