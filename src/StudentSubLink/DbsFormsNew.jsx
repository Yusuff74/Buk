import React from "react";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";
import DbsFooter from "../Utilitis/DbsFooter";
import RegisterForm from "../Utilitis/RegisterForm";

const DbsFormsNew = () => {
  return (
    <>
      <DbsSublinksMain children={<RegisterForm />} />
      <DbsFooter />
    </>
  );
};

export default DbsFormsNew;
