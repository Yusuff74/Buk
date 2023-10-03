import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import DbsFooter from "./../Utilitis/DbsFooter";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";

const DbsForm = () => {
  return (
    <>
      <DbsSublinksMain
        children={
          <>
            {" "}
            <h3 style={{ textAlign: "center", padding: ".8rem 1.2rem" }}>
              <span>
                <FaHouseChimney />
              </span>{" "}
              Dangotte Business School 2021/2022 Application Exercise
            </h3>
            <hr />
            <p>
              This is to inform the general public that online sale of
              Postgraduate Application Forms of Dangote Business School, Bayero
              University, Kano, for the 2021/2022 Academic Session commences on
              Monday, 6th February 2023 and closes on Monday, 17th April 2023
            </p>
            <p>
              All interested applicants should visit the Bayero University
              website: www.buk@edu.ng for details about the available programmes
              and the application procedure of applying online. Please note the
              following information:
            </p>
            <ol>
              <li>
                The cost of each application form is =N=12,000.00 (Twelve
                Thousand Naira) only.
              </li>
              <li>
                The duration of the sale and submission of Application Forms is
                Monday, 6th February 2023 to Monday, 17th April 2023.
              </li>
              <li>
                An Applicant should ensure that he/she has the entry
                requirements for the programme applied for, plus five (5) ‘O’
                Level Credits including Mathematics and English Language.
              </li>
            </ol>
          </>
        }
      />
      <DbsFooter />
    </>
  );
};

export default DbsForm;
