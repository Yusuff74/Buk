import React from "react";
import DbsFooter from "../Utilitis/DbsFooter";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";
import { FaFilePen } from "react-icons/fa6";
import BukatImgContainer from "../Utilitis/BukatImgContainer";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";

const DbsProcedure = () => {
  return (
    <>
      <DbsSublinksMain
        children={
          <>
            <h1 style={{ textAlign: "center" }}>
              <FaFilePen /> Application Procedure
            </h1>
            <hr />
            <div style={{ textAlign: "left" }}>
              <BukatImgContainer
                step="Step 1."
                desc={
                  <>
                    <p>
                      Click on the <FaUserPlus />{" "}
                      <Link
                        to="/dbsform/create_account"
                        style={{ color: "inherit" }}
                      >
                        Create Account
                      </Link>{" "}
                      on the left navigation menu to go to the Create an Account
                      Page. At the Create an Account page, create an account by
                      providing your First Name, Middle Name, Last Name,
                      Personal Email and Personal GSM Phone Number. Click on
                      Generate Password button to generate a password, repeat
                      the generated password on the Repeat Password field. Click
                      on the <FaUserPlus /> Create button to create your
                      application account. A username will be automatically
                      generated for you
                    </p>
                    <p>
                      Please take note of your login credentials (username and
                      password), as you need them for subsequent steps of the
                      application process. Use <FaRightFromBracket />{" "}
                      <Link to="/dbsform/login" style={{ color: "inherit" }}>
                        Login
                      </Link>{" "}
                      on the left navigation panel to login to your account
                      (using your login credentials) to start/continue your
                      application process.
                    </p>
                  </>
                }
              />

              <BukatImgContainer
                step="Step 2"
                desc={
                  <>
                    <p>
                      Return to the Login Page and login with your username and
                      password to fill in the Application Forms:
                    </p>
                    <ul>
                      <li>Programme Selection</li>
                      <li>Personal Data</li>
                      <li>Qualifications</li>
                      <li>Employment Information</li>
                      <li>Transcript Request</li>
                    </ul>
                    <p>
                      Review all your forms to ensure accuracy of all
                      information before submission. You can save your
                      information at any time and continue with the application
                      process at a later time.
                    </p>
                  </>
                }
              />
              <BukatImgContainer
                step="Step 3"
                desc="Generate your BUK Personalised Payment Form (BUKPPF). The BUKPPF includes information need to make payment through the Remita e-Payments platform."
              />
              <BukatImgContainer
                step="Step 4"
                desc="After successfully generated BUKPPF and using the Remita e-Payments platform a Remita Retrieval Reference (RRR) number is generated for you. The RRR uniquely ties your payment to your application account, after obtaining your RRR, login to your application account and submit the RRR used for payment. Note that submitting the RRR in the application portal is not tied to your actual payment."
              />
              <BukatImgContainer
                step="Step 5"
                desc="Print an Acknowledgement Slip and keep it safe. The slip will be needed during the collection of admission letter and during registration."
              />
            </div>
            <hr />
            <p>
              If you have any inquiry or are encountering any difficulty, please
              send an e-m@il to application.dbs@buk.edu.ng
            </p>
          </>
        }
      />
      <DbsFooter />
    </>
  );
};

export default DbsProcedure;
