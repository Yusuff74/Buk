import React from "react";
import { FaThList } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaSign } from "react-icons/fa";
import RegHeader from "../Utilitis/RegHeader";
import RegSideBar from "../Utilitis/RegSideBar";
import ChangeWidth from "../Utilitis/HeaderStyles";
import BukatImgContainer from "../Utilitis/BukatImgContainer";
import BukatFooter from "../Utilitis/BukatFooter";

const BukatProcedure = () => {
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <RegSideBar
        styles={styles}
        title="BUKAT 22"
        title2="Procedures"
        title3="Eligibility"
        title4="BUKAT Login"
        icon1={<FaThList />}
        icon2={<FaLockOpen />}
        icon3={<FaSign />}
      />
      <div style={styles.styleRight}>
        <RegHeader
          regTitle="Aptitude Test (BUKAT)"
          changeWidth={handleWidthChange}
        />
        <div
          style={{
            textAlign: "center",
            margin: "3rem auto",
            width: "80%",
            backgroundColor: "#fff",
            color: "#73879C",
            padding: "1rem",
          }}
        >
          <h3>Registration Procedures</h3>
          <hr />
          <BukatImgContainer
            step="STEP 1: Login"
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image001.png"
            desc="Login using your UTME Number and UTME Score."
          />
          <BukatImgContainer
            step="STEP 2: Profile Update"
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image002.png"
            desc="Applicants are to provide their Date of birth, LGA, Phone Number used when registering with JAMB, Email address used when registering with JAMB, alternate Phone number, alternate Email address, Next of Kin, Phone Number of next of kin and Contact Address. Applicants cannot change their full name and state of origin. Applicants can choose the preferred email and phone number to be used in any correspondence, in case the email and/or phone number used in JAMB registration is not accessible to the applicant."
          />
          <BukatImgContainer
            step="STEP 3: 'O' Level Update"
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image004.jpg"
            desc="After successful profile update, you can then update your O’ Level results. For those awaiting examination, please enter 'AW' as grade and for those awaiting result should enter 'AR' as their grades. Note that supplying false information will result in disqualification. You are allowed to supply amaximum of two different ‘O’ Level examinations results."
          />
          <img
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image006.jpg"
            style={{
              width: "100%",
              padding: "1rem",
            }}
          />
          <p style={{ textAlign: "left" }}>
            You need to check on the declaration in order to be able to submit
            your O’ Levels.
          </p>
          <img
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image008.jpg"
            style={{
              width: "100%",
              padding: "1rem",
            }}
          />
          <p style={{ textAlign: "left" }}>
            If you want to update/change your result, you have to resubmit all
            the information and previous information will be replaced with the
            updated information.
          </p>
          <BukatImgContainer
            step="STEP 4: Generate/Print BUK Personalised Payment Form (BUKPPF)"
            desc="After successfully updating your 'O' Level, you are ready to generate the BUK Personalised Payment Form (BUKPPF). The BUKPPF includes Remita Retrieval Reference (RRR) number and other information needed to make payment through the Remita e-Payments platform. Clicking on the Generate Your BUKPPF button generate the BUKPPF so that you can download and print it"
            src="https://mybuk2.buk.edu.ng/bukat2022/registration_procedure_pictures/image018.jpg"
          />
          <BukatImgContainer
            step="Step 5: Print Acknowledgement Slip"
            desc="After your payment has been verified and processed you can processed to print your acknowledgement slip. Note that the schedule (Venue, Date and Time) of the BUK Aptitude Test will be communicated to you using the following:"
          />
          <ol>
            <li>preferred phone number and/or</li>
            <li>preferred email address you supplied in your profile.</li>
          </ol>
        </div>
        <BukatFooter />
      </div>
    </div>
  );
};

export default BukatProcedure;
