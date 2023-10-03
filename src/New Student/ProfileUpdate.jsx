import React, { useState } from "react";
import Input from "../Utilitis/Input";
import SelectInput from "../Utilitis/SelectInput";
import { useDataContext } from "../Utilitis/DataContext";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const { setStudentInfo, programmesCOM } = useDataContext();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [jambNo, setJambNo] = useState("");
  const [utme, setUtme] = useState("");
  const [english, setEnglish] = useState("");
  const [math, setMath] = useState("");
  const [thirdSubject, setThirdSubject] = useState("");
  const [fourthSubject, setFourthSubject] = useState("");
  const [programme, setProgramme] = useState("");
  const [dob, setDob] = useState("");
  const [lga, setLga] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [nok, setNok] = useState("");
  const [nokPhone, setNokPhone] = useState("");

  const genders = ["Male", "Female"];
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      gender,
      state,
      jambNo,
      utmeInfo: { utmeScore: utme, math, english, thirdSubject, fourthSubject },
      AppliedProgramme: programme,
      dateOfBirth: dob,
      localGovernment: lga,
      phoneNo,
      altPhone,
      email,
      altEmail,
      nextOfKin: nok,
      nokPhone,
    };
    setStudentInfo(newStudent);
    navigate("/Bukat/olevelupdate");
  };
  const programmes = programmesCOM.flatMap((faculty) =>
    faculty.items.map((item) => item.td1)
  );

  return (
    <div
      style={{
        backgroundImage:
          "url('https://mybuk2.buk.edu.ng/sceforms/images/bg.jpg')",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-center">Profile Update</h1>
      <hr />
      <div className="text-center">
        <h3 style={{ fontWeight: "600" }}>Candidate's Particulars</h3>
        <p>Note: candidate's particluars cannot be change</p>
      </div>
      <div className="container">
        <form className="col" onSubmit={onSubmit}>
          <Input
            label="Full Name *"
            placeholder="Yusuf Tukur Abdulkadir"
            value={name}
            onChange={setName}
          />
          <Input
            label="State Of Origin *"
            placeholder="Kano State"
            value={state}
            onChange={setState}
          />
          <SelectInput
            label="Gender *"
            items={genders}
            value={gender}
            onChange={setGender}
          />
          <Input
            label="Jamb Number *"
            placeholder="85236052AA"
            value={jambNo}
            onChange={setJambNo}
          />
          <Input
            label="UTME Score *"
            placeholder="200"
            value={utme}
            onChange={setUtme}
          />
          <h3 className="text-center">Utme Subjects & Scores</h3>
          <div className="container">
            <div className="row">
              <div className="col">
                <Input
                  label="Use Of English *"
                  placeholder="40"
                  value={english}
                  onChange={setEnglish}
                />
              </div>
              <div className="col">
                <Input
                  label="Mathematics *"
                  placeholder="35"
                  value={math}
                  onChange={setMath}
                />
              </div>
              <div className="col">
                <Input
                  label="Other Subject *"
                  placeholder="30"
                  value={thirdSubject}
                  onChange={setThirdSubject}
                />
              </div>
              <div className="col">
                <Input
                  label="Other Subject *"
                  placeholder="50"
                  value={fourthSubject}
                  onChange={setFourthSubject}
                />
              </div>
              <SelectInput
                items={programmes}
                label="Programmed Applied For *"
                placeholder="B.Sc. Geography"
                value={programme}
                onChange={setProgramme}
              />
            </div>
          </div>
          <h3 className="text-center">Additional Information</h3>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Input label="Date Of Birth *" value={dob} onChange={setDob} />
              </div>
              <div className="col-6">
                <Input
                  label="Local Government Of Origin *"
                  placeholder="Dala"
                  value={lga}
                  onChange={setLga}
                />
              </div>
              <div className="col-6">
                <Input
                  label="Phone No. (Used in Jamb) *"
                  placeholder="08012345678"
                  value={phoneNo}
                  onChange={setPhoneNo}
                />
              </div>
              <div className="col-6">
                <Input
                  label="Phone No. (Alternative)"
                  placeholder="09112345678"
                  value={altPhone}
                  onChange={setAltPhone}
                />
              </div>
              <div className="col-6">
                <Input
                  label="Email Address (Used In Jamb) *"
                  placeholder="user1@example.com"
                  value={email}
                  onChange={setEmail}
                />
              </div>
              <div className="col-6">
                <Input
                  label="Email Address (Alternative)"
                  placeholder="user2@example.com"
                  value={altEmail}
                  onChange={setAltEmail}
                />
              </div>
              <div className="col-6">
                <Input label="Next Of Kin *" value={nok} onChange={setNok} />
              </div>
              <div className="col-6">
                <Input
                  label="Next Of Kin Phone No. *"
                  placeholder="07012345678"
                  value={nokPhone}
                  onChange={setNokPhone}
                />
              </div>
            </div>
          </div>
          <button className="btn btn-success" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
