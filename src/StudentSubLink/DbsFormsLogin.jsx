import React from "react";
import DbsSublinksMain from "../Utilitis/DbsSublinksMain";
import DbsFooter from "../Utilitis/DbsFooter";
import FormLogin from "../Utilitis/FormLogin";

const DbsFormsLogin = () => {
  return (
    <>
      <DbsSublinksMain children={<FormLogin />} />
      <DbsFooter />
    </>
  );
};

export default DbsFormsLogin;
