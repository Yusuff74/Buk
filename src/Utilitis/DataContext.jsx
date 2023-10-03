import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../data/http";
import { apiEndpoint } from "../data/http";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [programmes, setProgrammes] = useState([]);
  const [studentInfo, setStudentInfo] = useState("");
  const [programmesCOM, setProgrammesCOM] = useState([]);
  const [bukatStudentInfo, setBukatStudentInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: programmesCOM } = await http.get(
          apiEndpoint("programmesCOM")
        );
        setProgrammesCOM(programmesCOM);
        const { data: BukatStudentInfo } = await http.get(
          apiEndpoint("Bukatstudentinfo")
        );
        setBukatStudentInfo(BukatStudentInfo);

        const { data } = await http.get(apiEndpoint("pgProgrammes"));
        setProgrammes(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        programmes,
        setProgrammes,
        studentInfo,
        setStudentInfo,
        programmesCOM,
        setProgrammesCOM,
        bukatStudentInfo,
        setBukatStudentInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
