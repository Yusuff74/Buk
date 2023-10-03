import React from "react";
import { Link } from "react-router-dom";
import SceColHeader from "../Utilitis/SceColHeader";

const SceProcedureCol = () => {
  const procedures = [
    {
      id: "1",
      title:
        "An applicant should visit JAMB Online Application Platform for Part-Time Degree Programme, select BUK, access the form, fill it and then make a non-refundable payment of Three Thousand Five Hundred Naira only (N3,500:00) into the JAMB’S Account from Monday 23rd November 2020 to Monday 4th January 2021",
    },
    {
      id: "2",
      title:
        "Goto the Bayero University website and click on the Part-Time Degree Application Exercise link. On the 2019/2020 Part-Time Degree Application Exercise Click on the Register Tab on the left navigation panel to go to the Create an Account Page.",
    },
    {
      id: "3",
      title:
        "(Create Account)At the creation of account page, create an account by providing your Full Name, Programme of Study, Personal Email, Personal GSM Phone Number, Mode of Entry (DE/UTME) and choose your password and clicking on the Create Account button. A username will automatically be generated for you, please take note of the username and password as you need them for subsequent steps of the application process. Please also take note of the Email and GSM Number you supplied during creation of the account, as they are used together with the username to recover forgotten password.",
    },
    {
      id: "4",
      title:
        "(Log In) Return to the Login Page and login with your username and password to fill in the various sections of your application process.",
    },
    {
      id: "5",
      title:
        "(Programme Selection) Choose additional programmes you are applying for.",
    },
    {
      id: "6",
      title:
        "(Update Profile) Provide personal, sponsorship and next-of-kin information.",
    },
    {
      id: "7",
      title:
        "(O/A Levels Qualifications) Provide/Update your O/A levels qualifications, O levels not more than 2 sittings and A levels not more than 3 settin",
    },
    {
      id: "8",
      title:
        "(Schools & Qualifications) Provide the schools/colleges attended as well as the academic qualifications obtained, you can provide a maximum of 3 (three) schools/colleges and maximum of 3 (three) academic qualifications.",
    },
    {
      id: "9",
      title:
        "(Employment Info) Indicate whether employed or not. If employed, provide your current employment information, Employer, Position and Date of Appointment.",
    },
    {
      id: "10",
      title:
        "(Additional Info) Provide additional information, which include maximum of 3 researches and maximum of 3 publications.",
    },
    {
      id: "11",
      title: `(BUK Personalised Payment Form (BUKPPF)) Generate your BUK Personalised Payment Form (BUKPPF). The BUKPPF includes information need to make payment through the Remita e-Payments platform. Refer to the Payment Procedure documentation ${(
        <Link>Click here</Link>
      )} for an in-depth look on the payment procedure.`,
    },
    {
      id: "12",
      title: `(Remita Retrieval Reference (RRR) Used) After successfully generated BUKPPF and using the Remita e-Payments platform (${(
        <Link>www.remita.net</Link>
      )}) a Remita Retrieval Reference (RRR) number is generated for you. The RRR uniquely ties your payment to your application account, after payment login to your application account and process your payment by clicking "Check Payment Status".`,
    },
    {
      id: "13",
      title:
        "(Jamb No) After your payment is verified, you are required to provide your UTME/DE No obtained during step 1 without which, your application is incomplete",
    },
    {
      id: "14",
      title:
        "(Acknowledgment/Application Form) After your payment is verified, you can print your acknowledgment/application form. Note that only those that have printed the application form are considered for admission. Keep your application form safe, the form will be needed during the collection of admission letters and during registration.",
    },
  ];
  return (
    <SceColHeader
      children={
        <>
          <ol style={{ textAlign: "left", margin: "3rem 0" }}>
            {procedures.map((pcd) => (
              <li key={pcd.id}>{pcd.title}</li>
            ))}
          </ol>
          <p style={{ textAlign: "left", fontWeight: "550" }}>
            Please note that:
          </p>
          <ul style={{ listStyle: "square", textAlign: "left" }}>
            <li>
              You must complete steps 1, by purchasing DE/UTME form from Jamb
              Website.
            </li>
            <li>
              You must complete steps 1 through Step 11 before making payment.
            </li>
            <li>
              Your Remita Retrieval Reference (RRR) number is very important.
              You must make sure you quote it correctly whenever and wherever
              your are using it.
            </li>
            <li>
              For any enquiries and/or complains please make sure to quote your
              username, BUKPPF-ID, RRR, Form Number.
            </li>
            <li>
              Please for enquiries and/or complaints send an e-m@il to:
              application.pt@buk.edu.ng.
            </li>
          </ul>
        </>
      }
      spanLabel="Application Procedure"
    />
  );
};

export default SceProcedureCol;
