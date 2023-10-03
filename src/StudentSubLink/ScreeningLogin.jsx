import React from "react";
import ScreeningSidebar from "../Utilitis/ScreeningSidebar";
import LoginForm from "../Utilitis/LoginForm";
import ScreeningHeader from "../Utilitis/ScreeningHeader";

const ScreeningLogin = () => {
  const items = ["Kano", "Katsina", "Kaduna", "Jigawa", "Gombe", "Adamawa"];
  const items2 = ["Male", "Female"];
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          display: "flex",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        <ScreeningSidebar />
        <div style={{ flex: "1", width: "90%", marginLeft: "10%" }}>
          <ScreeningHeader />
          <div style={{ padding: "5rem" }}>
            <LoginForm
              title="Login Page"
              label="Username"
              placeholder="Jamb Number"
              selectLabel="State"
              selectLabel2="Gender"
              btnLabel="Login"
              items={items}
              items2={items2}
              onSubmit={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreeningLogin;
