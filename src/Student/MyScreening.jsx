import React from "react";
import { Link, useParams } from "react-router-dom";
import ScreeningSidebar from "../Utilitis/ScreeningSidebar";
import ScreeningHeader from "../Utilitis/ScreeningHeader";

const MyScreening = () => {
  const style = { fontWeight: "550" };
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          backgroundColor: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <ScreeningSidebar />
        <div
          style={{
            flex: "1",
            width: "90%",
            marginLeft: "10%",
          }}
        >
          <ScreeningHeader />
          <div
            style={{
              paddingLeft: ".8rem",
              lineHeight: "2",
              letterSpacing: "1px",
            }}
          >
            <h4>
              Welcome to 2022/2023 Undergraduate Screening Exercise Engine
            </h4>
            <p>
              <span style={style}>NOTE:</span> Note: For inquiries/complaint(s),
              candidates are to use message box icon by the right side of the
              site to submit all his/her inquiries/complaint(s).
            </p>
            <h4 style={style}>Instructions</h4>
            <p style={style}>STEPS:</p>
            <p style={style}>Students are expected to:</p>
            <p>
              <span style={style}>STEP 1:</span>
              Clear with Jamb by accepting and printing Jamb Admission letter.
            </p>
            <p>
              <span style={style}>STEP 2:</span>
              Login <Link to="/myScreening/login">here</Link> with their Jamb
              Number, State of origin and gender to check Admission status.
            </p>
            <p>
              <span style={style}>STEP 3:</span>
              Download BUK Admission letter, Undertaking <Link>here</Link> and
              University Health Services Registration Form <Link>here</Link>
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <span style={style}>STEP 4:</span>
              Generate, download and print a BUK Personalized Payment Form
              (BUKPPF). Acceptance fee of Ten Thousand naira (
              <span style={style}>N10,000.00</span>) is reflected on student's
              BUKPPF, to be paid using Remita e-Payments and e-Collection
              platforms.
              <span style={style}>
                Make sure you carefully read, understand and follow the payment
                procedure, as BUK will not be liable for any loss of funds as a
                result of incorrect data entry
              </span>
              , which may lead to unnecessary delay in validating and processing
              of payment. Payment can be validated by the students via clicking
              check payment status at the payment page.
            </p>
            <p style={style}>
              Note: All fees are not refundable after payment.
            </p>
            <p>
              <span style={style}>STEP 5:</span>
              Upload the following documents in jpg format (Size must be less
              than 1MB):
            </p>
            <ul>
              <li>Jamb Slip</li>
              <li>Jamb Admission Letter</li>
              <li>O Level Result</li>
              <li>A Level Result (DE candidate Only)</li>
              <li>Any Other Relevant Document(s)</li>
            </ul>
            <p style={style}>NOTE:</p>
            <ul>
              <li style={style}>
                The above document(s) may be rejected due to poor quality or
                otherwise. However, Candidates are expected to re-upload a
                clearer copy, if any of the document is rejected.
              </li>
              <li style={style}>
                For inquiries/complaint(s), Candidates are to use message box
                icon by the right side of the site.
              </li>
              <li style={style}>
                After this step, Candidates may experience a delay of 12 to 24
                hours while awaiting documents to be approved
              </li>
            </ul>
            <p>
              <span style={style}>STEP 6:</span>Print Acknowledgement Slip,
              which contains registration number and further instructions to be
              followed for the registration and documentation.
            </p>
            <p style={style}>
              Note: In step 5 above, students may experience a delay of 12 to 24
              hours while awaiting documents to be approved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyScreening;
