import React, { useState } from "react";
import Input2 from "../Utilitis/Input2";
import SelectInput from "../Utilitis/SelectInput";
import SelectInput2 from "../Utilitis/SelectInput2";
import { useDataContext } from "../Utilitis/DataContext";
import http, { apiEndpoint } from "../data/http";

const OlevelUpdate = () => {
  const { studentInfo, setStudentInfo } = useDataContext();
  const [examTypeInfo, setExamTypeInfo] = useState({
    examType: "",
    schoolOne: "",
    ExamNo: "",
    ExamYear: "",
    subjectOne: "",
    subjectTwo: "",
    subjectThree: "",
    subjectFour: "",
    subjectFive: "",
    subjectSix: "",
    subjectSeven: "",
    subjectEight: "",
    subjectNine: "",
    gradeOne: "",
    gradeTwo: "",
    gradeThree: "",
    gradeFour: "",
    gradeFive: "",
    gradeSix: "",
    gradeSeven: "",
    gradeEight: "",
    gradeNine: "",
  });
  const [examTypeTwoInfo, setExamTypeTwoInfo] = useState({
    examType: "",
    schoolOne: "",
    ExamNo: "",
    ExamYear: "",
    subjectOne: "",
    subjectTwo: "",
    subjectThree: "",
    subjectFour: "",
    subjectFive: "",
    subjectSix: "",
    subjectSeven: "",
    subjectEight: "",
    subjectNine: "",
    gradeOne: "",
    gradeTwo: "",
    gradeThree: "",
    gradeFour: "",
    gradeFive: "",
    gradeSix: "",
    gradeSeven: "",
    gradeEight: "",
    gradeNine: "",
  });

  const items = ["WAEC", "NECO"];
  const sideItems = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9"];
  const subjects = [
    "Mathematics",
    "English",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Fishery",
    "Animal Husbandary",
    "Civic Education",
    "Hausa",
    "Technical Drawing",
    "Agriculture",
    "Computer Science",
    "Islamic Studies",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const olevelResult = {
      examType: examTypeInfo.examType,
      school: examTypeInfo.schoolOne,
      examNo: examTypeInfo.ExamNo,
      year: examTypeInfo.ExamYear,
      subjects: [
        { Subject1: examTypeInfo.subjectOne, grade: examTypeInfo.gradeOne },
        { subject2: examTypeInfo.subjectTwo, grade: examTypeInfo.gradeOne },
        { subject3: examTypeInfo.subjectThree, grade: examTypeInfo.gradeOne },
        { subject4: examTypeInfo.subjectFour, grade: examTypeInfo.gradeOne },
        { subject5: examTypeInfo.subjectFive, grade: examTypeInfo.gradeOne },
        { subject6: examTypeInfo.subjectSix, grade: examTypeInfo.gradeOne },
        { subject7: examTypeInfo.subjectSeven, grade: examTypeInfo.gradeOne },
        { subject8: examTypeInfo.subjectEight, grade: examTypeInfo.gradeOne },
        { subject9: examTypeInfo.subjectNine, grade: examTypeInfo.gradeOne },
      ],
    };

    const studentInfomation = { ...studentInfo, olevelResult };
    setStudentInfo(studentInfomation);
    try {
      http.post(apiEndpoint("Bukatstudentinfo"), studentInfomation);
    } catch (error) {}
  };

  const handleChange = (newValue, examLabel) => {
    setExamTypeInfo((prevExamInfo) => ({
      ...prevExamInfo,
      [examLabel]: newValue,
    }));
  };
  const handleChangeTwo = (newValue, examLabel) => {
    setExamTypeTwoInfo((prevExamInfo) => ({
      ...prevExamInfo,
      [examLabel]: newValue,
    }));
  };

  return (
    <div
      className="text-center"
      style={{
        backgroundImage:
          "url('https://mybuk2.buk.edu.ng/sceforms/images/bg.jpg')",
        minHeight: "100vh",
      }}
    >
      <h1>O'LEVEL QUALIFICATIONS</h1>
      <p>[Not more than two (2) sittings]</p>
      <hr />
      <div className=" px-md-5">
        <form onSubmit={handleSubmit}>
          <div className="d-sm-block d-md-flex justify-content-md-around w-100">
            <div className="px-3">
              <SelectInput
                label="1st Exams Results"
                items={items}
                value={examTypeInfo.examType}
                examLabel="examType"
                onChange={handleChange}
              />
              <div style={{ padding: "0 2%" }}>
                <Input2
                  label="SCHOOL: *"
                  value={examTypeInfo.schoolOne}
                  onChange={handleChange}
                  examLabel="schoolOne"
                />

                <Input2
                  label="EXAM NO. *"
                  value={examTypeInfo.ExamNo}
                  examLabel="ExamNo"
                  onChange={handleChange}
                />
                <Input2
                  label="YEAR *"
                  value={examTypeInfo.ExamYear}
                  examLabel="ExamYear"
                  onChange={handleChange}
                />
                <div
                  className="d-flex justify-content-between w-100"
                  style={{
                    borderBottom: "1px solid #000",
                  }}
                >
                  <h5># &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</h5>
                  <h5>Grade</h5>
                </div>
                <div className="mt-3">
                  <SelectInput2
                    label="1"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectOne}
                    examLabel="subjectOne"
                    onChange={handleChange}
                    value2={examTypeInfo.gradeOne}
                    examLabel2="gradeOne"
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="2"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectTwo}
                    examLabel="subjectTwo"
                    onChange={handleChange}
                    value2={examTypeInfo.gradeTwo}
                    examLabel2="gradeTwo"
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="3"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectThree}
                    examLabel="subjectThree"
                    value2={examTypeInfo.gradeThree}
                    examLabel2="gradeThree"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="4"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectFour}
                    examLabel="subjectFour"
                    value2={examTypeInfo.gradeFour}
                    examLabel2="gradeFour"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="5"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectFive}
                    examLabel="subjectFive"
                    value2={examTypeInfo.gradeFive}
                    examLabel2="gradeFive"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="6"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectSix}
                    examLabel="subjectSix"
                    value2={examTypeInfo.gradeSix}
                    examLabel2="gradeSix"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="7"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectSeven}
                    examLabel="subjectSeven"
                    value2={examTypeInfo.gradeSeven}
                    examLabel2="gradeSeven"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="8"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectEight}
                    examLabel="subjectEight"
                    value2={examTypeInfo.gradeEight}
                    examLabel2="gradeEight"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                  <SelectInput2
                    label="9"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeInfo.subjectNine}
                    examLabel="subjectNine"
                    value2={examTypeInfo.gradeNine}
                    examLabel2="gradeNine"
                    onChange={handleChange}
                    onChange2={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="px-3 mt-5">
              <SelectInput
                label="2nd Exams Results"
                items={items}
                value={examTypeTwoInfo.examType}
                examLabel="examType"
                onChange={handleChangeTwo}
              />
              <div style={{ padding: "0 2%" }}>
                <Input2
                  label="SCHOOL: *"
                  value={examTypeTwoInfo.schoolOne}
                  onChange={handleChangeTwo}
                  examLabel="schoolOne"
                />

                <Input2
                  label="EXAM NO. *"
                  value={examTypeTwoInfo.ExamNo}
                  examLabel="ExamNo"
                  onChange={handleChangeTwo}
                />
                <Input2
                  label="YEAR *"
                  value={examTypeTwoInfo.ExamYear}
                  examLabel="ExamYear"
                  onChange={handleChangeTwo}
                />
                <div
                  className="d-flex justify-content-between w-100"
                  style={{
                    borderBottom: "1px solid #000",
                  }}
                >
                  <h5># &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject</h5>
                  <h5>Grade</h5>
                </div>
                <div className="mt-3">
                  <SelectInput2
                    label="1"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectOne}
                    examLabel="subjectOne"
                    onChange={handleChangeTwo}
                    value2={examTypeTwoInfo.gradeOne}
                    examLabel2="gradeOne"
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="2"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectTwo}
                    examLabel="subjectTwo"
                    onChange={handleChangeTwo}
                    value2={examTypeTwoInfo.gradeTwo}
                    examLabel2="gradeTwo"
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="3"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectThree}
                    examLabel="subjectThree"
                    value2={examTypeTwoInfo.gradeThree}
                    examLabel2="gradeThree"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="4"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectFour}
                    examLabel="subjectFour"
                    value2={examTypeTwoInfo.gradeFour}
                    examLabel2="gradeFour"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="5"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectFive}
                    examLabel="subjectFive"
                    value2={examTypeTwoInfo.gradeFive}
                    examLabel2="gradeFive"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="6"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectSix}
                    examLabel="subjectSix"
                    value2={examTypeTwoInfo.gradeSix}
                    examLabel2="gradeSix"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="7"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectSeven}
                    examLabel="subjectSeven"
                    value2={examTypeTwoInfo.gradeSeven}
                    examLabel2="gradeSeven"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="8"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectEight}
                    examLabel="subjectEight"
                    value2={examTypeTwoInfo.gradeEight}
                    examLabel2="gradeEight"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                  <SelectInput2
                    label="9"
                    items={subjects}
                    sideItems={sideItems}
                    value={examTypeTwoInfo.subjectNine}
                    examLabel="subjectNine"
                    value2={examTypeTwoInfo.gradeNine}
                    examLabel2="gradeNine"
                    onChange={handleChangeTwo}
                    onChange2={handleChangeTwo}
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OlevelUpdate;
