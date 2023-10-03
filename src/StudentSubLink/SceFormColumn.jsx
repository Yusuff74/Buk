import React from "react";

const SceFormColumn = () => {
  const availableCourses = [
    { id: "1", title: "B.Sc. Accounting" },
    { id: "2", title: "B.A. (Ed) Adult Education" },
    { id: "3", title: "B.A. Arabic" },
    { id: "4", title: "B.A. (Ed) Arabic" },
    { id: "5", title: "B.Sc. Banking and Finance" },
    { id: "6", title: "B.Sc. Business Administration" },
    { id: "7", title: "B.Sc. Criminology and Security Studies" },
    { id: "8", title: "B.Sc. (Ed) Economics" },
    { id: "9", title: "B.Sc. Economics" },
    { id: "10", title: "B.A. (Ed) English" },
    { id: "11", title: "B.A. English" },
    { id: "12", title: "B.Sc. Geography" },
    { id: "13", title: "B.Sc. (Ed) Geography" },
    { id: "14", title: "B.A. (Ed) Hausa" },
    { id: "15", title: "B.A. Hausa" },
    { id: "16", title: "B.Sc.(Ed). Health Education" },
    { id: "17", title: "B.Sc. International Relations" },
    { id: "18", title: "B.A. Islamic Studies" },
    { id: "19", title: "B.A. (Ed) Islamic Studies" },
    { id: "20", title: "B. Sc. Library and Information Science" },
    { id: "21", title: "B.Sc. Mathematics" },
    { id: "22", title: "B.Sc. (Ed) Mathematics" },
    { id: "23", title: "B. Nursing Science" },
    { id: "24", title: "B.Sc. Public Administration" },
  ];
  return (
    <>
      <div className="col text-center">
        <h2 style={{ fontWeight: "550" }}>
          APPLICATION FOR ADMISSION INTO PART-TIME DEGREE PROGRAMMES 2020/2021
          SESSION
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Applications are invited from suitably qualified candidates for
          admission into the following part-time degree programmes for the
          2020/2021 academic session.
        </p>
        <div
          style={{
            marginTop: "2rem",
            position: "relative",
            backgroundColor: "#EEEEEE",
            border: "1px solid #aaaaaa",
            boxShadow: "1px 1px 2px #FFFFFF inset",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "-1rem",
              left: "1rem",
              backgroundColor: "#fff",
              padding: ".3rem",
              fontSize: "1.3rem",
              fontWeight: "550",
              border: "1px solid #aaa",
              boxShadow: "0 15px 20px 0 rgba(0,0,0,0.5)",
            }}
          >
            Available Programmes for 2020/2021 Session
          </span>
          <div>
            <ol
              style={{
                listStyle: "decimal-leading-zero",
                textAlign: "left",
                margin: "3rem 0",
              }}
            >
              {availableCourses.map((course) => (
                <li key={course.id}>{course.title}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SceFormColumn;
