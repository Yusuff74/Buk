import React from "react";
import SceColHeader from "../Utilitis/SceColHeader";
import { useDataContext } from "../Utilitis/DataContext";

const SpsProgrammesCol = () => {
  const [programmes] = useDataContext();

  return (
    <>
      <SceColHeader
        spanLabel="Available Programmes for 2021/2022 Session"
        children={
          <>
            <p style={{ textAlign: "center", marginTop: "5rem" }}>
              APPLICATION FOR ADMISSION INTO POSTGRADUATE PROGRAMMES 2021/2022
              SESSION Applications are invited from suitably qualified
              candidates for admission into the following courses for the
              2021/2022 academic session.
            </p>
            <ol style={{ textAlign: "left" }}>
              {programmes.map((programme) => (
                <div key={programme.Faculty}>
                  <h3 style={{ marginTop: "1rem", fontWeight: "550" }}>
                    {programme.Faculty}
                  </h3>
                  <ol>
                    {programme.departments.map((department) => (
                      <div key={department.title}>
                        <li
                          style={{ marginBottom: "0.5rem", fontWeight: "550" }}
                        >
                          {department.title}
                        </li>
                        <ol style={{ listStyle: "lower-roman" }}>
                          {department.courses.map((course) => (
                            <li key={course.id}>{course.course}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </ol>
                </div>
              ))}
            </ol>
          </>
        }
      />
    </>
  );
};

export default SpsProgrammesCol;
