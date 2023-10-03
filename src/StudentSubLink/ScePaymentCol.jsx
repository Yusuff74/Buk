import React from "react";
import BukatImgContainer from "../Utilitis/BukatImgContainer";
import { Link } from "react-router-dom";
import SceColHeader from "../Utilitis/SceColHeader";

const ScePaymentCol = () => {
  return (
    <SceColHeader
      children={
        <>
          <p style={{ marginTop: "3rem" }}>
            Applicants are strongly advised to adhere to the following payment
            procedure guidelines, as any deviation may result in delay or
            outright invalidation of your application.
          </p>
          <BukatImgContainer
            desc={` Make sure you have successfully created an account and finished all the procedure/step leading to where you generated your BUK Personalised Payment Form (BUKPPF) (click ${(
              <Link
                to="/sceforms/applicationprocedure"
                style={{ textDecoration: "none" }}
              >
                here
              </Link>
            )} for the Application Procedure). As in the picture below:`}
            step="Step 1."
            src="https://mybuk2.buk.edu.ng/sceforms/PaymentProcedure_files/1.jpg"
          />
          <BukatImgContainer
            step="Step 2."
            desc="With the information on your BUKPPF invoice, note the RRR and amount generated on your invoice and proceed with the either of the first two instructions stated above the RRR generated as in picture below:"
            src="https://mybuk2.buk.edu.ng/sceforms/PaymentProcedure_files/2.jpg"
          />
          <BukatImgContainer
            step="Step 3."
            desc={`Click Payment Processing tab to either pay with remita by clicking "Pay with Remita" button. This will take you to remita site for payment.`}
            src="https://mybuk2.buk.edu.ng/sceforms/PaymentProcedure_files/3.jpg"
          />
          <BukatImgContainer
            step="Step 4."
            desc={`After payment, the site will process your payment automatically. In case of any delay in processing of your application fee, click "Check Payment Status" Under Payment Processing tab. The site will process your payment instantly.`}
            src="https://mybuk2.buk.edu.ng/sceforms/PaymentProcedure_files/4.jpg"
          />
          <p>
            <span style={{ fontWeight: "550", marginRight: "1rem" }}>
              Note.
            </span>
            Please for enquiries and/or complaints on your payment, send an
            e-m@il to: application.pt@buk.edu.ng. Make sure to quote your
            username, RRR and invoice number in any correspondence. Thank you.
          </p>
        </>
      }
      spanLabel="Payment Procedure"
    ></SceColHeader>
  );
};

export default ScePaymentCol;
