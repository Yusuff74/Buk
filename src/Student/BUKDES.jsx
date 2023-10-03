import React, { useState } from "react";
import RegSideBar from "../Utilitis/RegSideBar";
import { BsJournals } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import RegHeader from "../Utilitis/RegHeader";
import ChangeWidth from "../Utilitis/HeaderStyles";

const BUKDES = () => {
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };

  const guidelinesDetails = [
    {
      step: "STEP 1: LOGIN",
      desc: "Login using your DE Number, State of Origin and Gender.",
      src: "https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image001.jpg",
    },
    {
      step: "STEP 2: PROFILE UPDATE",
      desc: "Applicants are to provide their Date of birth, LGA, Phone Number used when registering with JAMB, Email address used when registering with JAMB, alternate Phone number (if any), alternate Email address (if any), Next of Kin, Phone Number of next of kin and Contact Address. Applicants cannot change their full name and state of origin.",
      src: "https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image003.png",
    },
    {
      step: "STEP 3: 'O' LEVEL UPDATE",
      desc: "After successful profile update, you can then update your O’ Level results. Note that supplying false information will result in disqualification. You are allowed to supply a maximum of two ‘O’ Level examinations results",
      src: "https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image006.jpg",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "#eee",
          fontFamily: "sans-serif",
        }}
      >
        <RegSideBar
          styles={styles}
          title="BUKDES 22"
          title2="Guidelines"
          title3="BUKDES Login"
          icon1={<BsJournals />}
          icon2={<BsFillSkipEndFill />}
        />
        <div style={styles.styleRight}>
          <RegHeader
            regTitle="Direct Entry Screening (BUKDES)"
            changeWidth={handleWidthChange}
          />
          <div
            style={{
              textAlign: "center",
              margin: "3rem auto",
              width: "80%",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ padding: "1rem" }}>
              <img
                src="https://mybuk2.buk.edu.ng/bukat2022/includes/buklogo.png"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 style={{ padding: "0 4rem" }}>
                BAYERO UNIVERSITY KANO Direct Entry Screening <br /> (
                <span style={{ fontWeight: "550" }}>BUKDES</span>) <br /> ONLINE
                REGISTRATION GUIDELINES
              </h3>
              <hr />
              <div style={{ textAlign: "left" }}>
                <p>
                  Eligible candidates need to register online for the Bayero
                  University Kano Direct Entry Screening (BUKDES) exercise.
                </p>
              </div>
            </div>
            <div>
              {guidelinesDetails.map((detail, i) => (
                <>
                  <div key={i} style={{ textAlign: "left" }}>
                    <p style={{ fontWeight: "550", fontSize: "1.5rem" }}>
                      {detail.step}
                    </p>
                    <p>{detail.desc}</p>
                  </div>
                  <div>
                    <img
                      src={detail.src}
                      style={{ width: "30rem", height: "40rem" }}
                    />
                  </div>
                </>
              ))}
              <p style={{ textAlign: "left" }}>
                You need to check on the declaration in order to be able to
                submit your O’ Levels.
              </p>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image007.jpg"
                  style={{ width: "45rem" }}
                />
              </div>
              <p style={{ textAlign: "left" }}>
                You can view result you have submitted as indicated in the
                following figure
              </p>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image008.jpg"
                  style={{ width: "40rem", height: "30rem" }}
                />
              </div>
              <p style={{ textAlign: "left" }}>
                If you want to update/change your result, you have to resubmit
                all the information and previous information will be replaced
                with the updated information.
              </p>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "550", fontSize: "1.5rem" }}>
                  STEP 4: 'A' LEVEL UPDATE
                </p>
                <p>
                  After successful updating your ‘O’ Level results, you can then
                  update your ‘A’ Level results. Note that supplying false
                  information will result in disqualification. You are to supply
                  ONLY ONE ‘A’­–Level results. NCE holders are to supply the
                  Education subject information first followed by two (2)
                  teaching subjects. Double major holder should repeat their
                  teaching subject twice
                </p>
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image009.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image010.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image011.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image012.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image013.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "550", fontSize: "1.5rem" }}>
                  STEP 5: Generate/Print BUK Personalised Payment Form (BUKPPF)
                </p>
                <p>
                  After successfully updating your ‘O’ Level results, you are
                  ready to generate the BUK Personalised Payment Form (BUKPPF).
                  The BUKPPF includes information needed to make payment through
                  the Remita e-Payments platform.
                </p>
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image014old.jpg"
                  style={{ width: "30rem" }}
                />
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image014.jpg"
                  style={{ width: "40rem" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "550", fontSize: "1.5rem" }}>
                  STEP 6: PAYMENT
                </p>
                <p>
                  After successfully generated BUKPPF and using the Remita
                  e-Payments platform a Remita Retrieval Reference (RRR) number
                  is generated for you. The RRR uniquely ties your payment to
                  your application account. After obtaining your RRR, take it to
                  any bank and make the payment or use proceed to payment for
                  online payment.
                </p>
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image016new.jpg"
                  style={{ width: "35rem" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <p style={{ fontWeight: "550", fontSize: "1.5rem" }}>
                  STEP 7: Print Acknowledgement Slip
                </p>
                <p>
                  After your payment has been verified and processed you can
                  processed to print your acknowledgement slip.
                </p>
              </div>
              <div>
                <img
                  src="https://mybuk2.buk.edu.ng/bukdes/BUKDES_Reg_Guidelines_files/image017.jpg"
                  style={{ width: "40rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BUKDES;
