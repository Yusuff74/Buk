import React from "react";
import SceColHeader from "./SceColHeader";

const SpsApplicationCol = () => {
  const procedures = [
    {
      step: "Step 1",
      desc: "Click on the Register Tab on the left navigation panel to go to the Create an Account Page. At the Create an Account page, create an account by providing your First Name, Middle Name, Last Name, Personal Email and Personal GSM Phone Number. A Login credentials (username and password) will be generated for you. Please take note of them, as you need them for subsequent steps of the application process. Use Login Tab on the left navigation panel to login to your account (using your login credentials) to start/continue your application process.",
    },
    {
      step: "Step 2",
      desc: "Return to the Login Page and login with your username and password to fill in the Application Forms:",
      subLists: [
        "Programme Selection Form",
        "Personal Data Form &",
        "Qualifications Form",
      ],
    },
    {
      step: "Step 3",
      desc: "Transcript Request Form shall also be filled in addition to the forms listed in Step 2 above.",
    },
    {
      step: "Step 4",
      desc: "Review all your forms to ensure accuracy of all information before submission.",
    },
    {
      step: "Step 5",
      desc: "Generate your BUK Personalised Payment Form (BUKPPF). The BUKPPF includes information need to make payment through the Remita e-Payments platform. Refer to the Payment Procedure documentation for an in-depth look on the payment procedure.",
    },
    {
      step: "Step 6",
      desc: "After successfully generated BUKPPF and using the Remita e-Payments platform a Remita Retrieval Reference (RRR) number is generated for you. The RRR uniquely ties your payment to your application account, after obtaining your RRR, login to your application account and submit the RRR used for payment. Note that submitting the RRR in the application portal is not tied to your actual payment.",
    },
    {
      step: "Step 7",
      desc: "Print an Acknowledgement Slip and keep it safe. The slip will be needed during the collection of admission letter and during registration.",
    },
  ];
  return (
    <>
      <SceColHeader
        spanLabel="Application Procedure"
        children={
          <>
            {procedures.map((procedure) => (
              <div style={{ marginTop: "4rem" }}>
                <p
                  style={{
                    fontWeight: "700",
                    textAlign: "left",
                    marginBottom: "0",
                  }}
                >
                  {procedure.step}
                </p>
                <p style={{ textAlign: "left", letterSpacing: "1px" }}>
                  {procedure.desc}
                </p>
                <ol style={{ textAlign: "center", listStyle: "none" }}>
                  {procedure.subLists &&
                    procedure.subLists.map((list) => <li>{list}</li>)}
                </ol>
              </div>
            ))}
            <ul style={{ listStyle: "square", textAlign: "left" }}>
              <li>
                If you have any inquiry or are encountering any difficulty, send
                an e-m@il to application.pg@buk.edu.ng
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default SpsApplicationCol;
