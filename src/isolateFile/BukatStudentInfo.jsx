import React from "react";
import TableHeader from "../Utilitis/TableHeader";
import TableList from "../Utilitis/TableList";
import { useDataContext } from "../Utilitis/DataContext";
import http, { apiEndpoint } from "../data/http";

const BukatStudentInfo = () => {
  const { bukatStudentInfo, setBukatStudentInfo, programmesCOM } =
    useDataContext();
  const ref = "B. Agric Economics and Extension";
  const items = bukatStudentInfo.map((student) => student);
  const check = programmesCOM.flatMap((item) => item.items.map((i) => i));

  //   const eligible = programmesCOM.find(
  //     (course) => course.td1 === items.map((item) => item.AppliedProgramme)
  //   );
  //   console.log(eligible);

  const headerItems = [
    "#",
    "Name",
    "Programme",
    "UTME Score",
    "Eligible Mark",
    "",
    "",
  ];
  const handleDelete = async (id) => {
    const originalItems = bukatStudentInfo;
    try {
      await http.delete(apiEndpoint(`Bukatstudentinfo/${id}`));
      const newItems = bukatStudentInfo.filter((item) => item.id !== id);
      setBukatStudentInfo(newItems);
    } catch (error) {
      console.log(error);
      setBukatStudentInfo(originalItems);
    }
  };
  return (
    <>
      <table
        className="table table-striped table-bordered"
        style={{ textAlign: "center" }}
      >
        <TableHeader items={headerItems} />
        <tbody>
          {items.map((item, index) => (
            <TableList
              key={index}
              rowNum={index + 1}
              td1={item.name ? item.name : ""}
              td2={item.AppliedProgramme ? item.AppliedProgramme : ""}
              td3={item.utmeInfo.utmeScore}
              td4={check
                .filter((mark) => mark.td1 === item.AppliedProgramme)
                .map((m) => m.td2)}
              td5={<button className="btn btn-success btn-sm">Approve</button>}
              td6={
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              }
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BukatStudentInfo;
