import React from "react";
import SceColHeader from "./SceColHeader";
import BukatImgContainer from "./BukatImgContainer";
import { Link } from "react-router-dom";

const SpsPaymentProcedure = () => {
  const procedures = [
    {
      step: "Step 1",
      desc: ` ${(
        <p>
          Make sure you have successfully created an account and finished all
          the procedure/step leading to where you generated your BUK
          Personalised Payment Form (BUKPPF) (click{" "}
          <Link to="/spsforms/applicationprocedure">here</Link> for the
          Application Procedure). Take note of the following as they appear
          exactly on your BUKPPF:
        </p>
      )}
        ${(
          <ol>
            <li>Payer</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Description</li>
            <li>Amount</li>
          </ol>
        )}`,
      src: "",
    },
    {
      step: "Step 2",
      desc: `With the information of Step 1(a) – 1(e) visit{" "}
    ${(<Link>www.remita.net</Link>)}, you will be presented with the
    following:`,
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image001.jpg",
    },
    {
      step: "Step 3",
      desc: "Select “Pay A Federal Government Agency”",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image002.jpg",
    },
    {
      step: "Step 4",
      desc: "You will be presented with the following form”",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image003.jpg",
    },
    {
      step: "Step 5",
      desc: "On the “Name of MDA” start typing Baye and a drop down will be shown, make sure you BAYERO UNIVERSITY, KANO – 1000129 as indicated in the figure below",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image004.jpg",
    },
    {
      step: "Step 6",
      desc: "After selecting Name of MDA as BAYERO UNIVERSITY, KANO – 1000129 a drop down box for the Name of Service/Purpose is shown as indicated in the figure below",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image005.jpg",
    },
    {
      step: "Step 7",
      desc: `${(
        <p>
          Several Services/Purposes are in the drop down as shown below, make
          sure you select SALES OF FORMS as indicate the following figures
        </p>
      )}
    ${(
      <img src="https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image007.jpg" />
    )}`,
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image006.jpg",
    },
    {
      step: "Step 8",
      desc: "After selecting SALES OF FORMS as the Name of Service/Purpose, next enter the Description. Make sure the Description matches exactly with the description on your BUKPPF (Item 1(d) of Step 1 above):",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image008.png",
    },
    {
      step: "Step 9",
      desc: `${(
        <p>
          After entering the description exactly as in your BUKPPF, next enter
          the Amout to Pay (N). Make sure the Amount to Pay matches exactly with
          the Amount on your BUKPPF (Item 1(e) of Step 1 above):
        </p>
      )}
    ${(
      <img src="https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image010.png" />
    )}`,
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image009.jpg",
    },
    {
      step: "Step 10",
      desc: "After entering the Amount exactly as in your BUKPPF, next enter the Payer’s Full Name. Make sure the Payer’s Full Name matches exactly with the Payer on your BUKPPF (Item 1(a) of Step 1 above):",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image011.jpg",
    },
    {
      step: "Step 11",
      desc: "After entering the Payer’s Full Name exactly as in your BUKPPF, next enter the Payer’s Email and Payer’s Phone. Make sure the Payer’s Email and Payer’s Phone match exactly with Email (Item 1(c) of Step 1 above) and Phone Number (Item 1(b) of Step 1) on your BUKPPF:",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image012.jpg",
    },
    {
      step: "Step 12",
      desc: "Enter the characters of the image before proceeding to payment.",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image013.jpg",
    },
    {
      step: "Step 13",
      desc: "Make sure all the information entered matches exactly with what is in your BUKPPF, any inconsistency may delay or invalidate application. After confirming all entries are correct click on Proceed to Payment Button",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image014.jpg",
    },
    {
      step: "Step 14",
      desc: "Your Remita Retrieval Reference (RRR) is generated and the following invoice is displayed.",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image015.jpg",
    },
    {
      step: "Step 15",
      desc: "You can click on “View Payment Details” to see your payments details",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image016.jpg",
    },
    {
      step: "Step 16",
      desc: "You can use any of the payment options as indicated below (make sure to use your RRR correctly):",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image017.jpg",
    },
    {
      step: "Step 17",
      desc: "You can click on “Print Invoice” to print your invoice.",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image018.jpg",
    },
    {
      step: "Step 18",
      desc: "You are advised to print your Remita Invoice and compare the information with that of your BUKPPF and make sure that information on both are the same.",
      src: "https://mybuk2.buk.edu.ng/spsforms2021/PaymentProcedure_files/image019.png",
    },
  ];
  return (
    <SceColHeader
      spanLabel="Payment Procedure"
      children={
        <>
          <p>
            Applicants are strongly advised to adhere to the following payment
            procedure guidelines, as any deviation may result in delay or
            outright invalidation of your application.
          </p>
          {procedures.map((procedure) => (
            <BukatImgContainer
              step={procedure.step}
              src={procedure.src}
              desc={procedure.desc}
            />
          ))}
        </>
      }
    />
  );
};

export default SpsPaymentProcedure;
