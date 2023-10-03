import React, { useEffect, useState } from "react";

const ProgrammsDetails = [
  { description: "Campuses", number: 5 },
  { description: "Faculties", number: 18 },
  { description: "Centers", number: 16 },
  { description: "Schools", number: 4 },
  { description: "Colleges", number: 2 },
  { description: "Institute", number: 1 },
  { description: "Departments", number: 94 },
  { description: "UNDERGRADUATE PROGRAMMES", number: 124 },
  { description: "POSTGRADUATE PROGRAMMES", number: 264 },
  { description: "ACADEMIC STAFF", number: 1721 },
  { description: "NON-TEACHING STAFF", number: 2898 },
  { description: "STUDENT ENROLLMENT", number: 45810 },
];

const Programms = () => {
  const [counts, setCounts] = useState(ProgrammsDetails.map(() => 0));

  useEffect(() => {
    const intervals = counts.map((count, index) => {
      if (index === ProgrammsDetails.length - 1) {
        // Skip setting an interval for the last element
        return null;
      }

      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          if (prevCounts[index] < ProgrammsDetails[index].number) {
            const newCounts = [...prevCounts];
            newCounts[index] += 1;
            return newCounts;
          } else {
            clearInterval(interval);
            return prevCounts;
          }
        });
      }, 100);
      return interval;
    });

    return () => {
      intervals.forEach((interval) => {
        if (interval !== null) {
          clearInterval(interval);
        }
      });
    };
  }, [counts]);

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ textTransform: "uppercase", backgroundColor: "#eee" }}
      >
        {ProgrammsDetails.map((p, i) => (
          <div
            key={i}
            className="col-lg-3 text-center"
            style={{ fontSize: "1.5rem", padding: "4rem" }}
          >
            <p style={{ fontSize: "2rem", fontWeight: "550" }}>
              {i === ProgrammsDetails.length - 1 ? p.number : counts[i]}
            </p>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programms;
