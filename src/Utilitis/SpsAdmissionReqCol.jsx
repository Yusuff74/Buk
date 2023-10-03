import React from "react";
import SceColHeader from "./SceColHeader";

const SpsAdmissionReqCol = () => {
  const requirements = [
    {
      desc: "Candidates for admission into Ph.D/M.Phil programmes shall have M.A, M.Ed., M.Sc, M.Eng. or LLM Degrees in the relevant areas with CGPA of at least 3.50 on a scale of 0.00 to 5.00 from Bayero University, Kano or any other recognised University.",
    },
    {
      desc: "Candidates for admission into Ph.D/M.Phil Radiology programmes shall in addition to above be:",
      lists: [
        {
          list: "Holder of Bachelor of Medicine Bachelor of Surgery degree (MBBS) and its equivalent and Master of Science (M.Sc) degree in relevant aspect of Radiology from a recognized University.",
        },
        {
          list: "Candidate with full fellowship of either the National Postgraduate Medical College of Nigeria (NPMCN). The West African College of Physicians (WACP) or West African College of Surgeons (WACS) or any other recognized foreign medical fellowship.",
        },
        {
          list: "Candidate who have successfully completed part 1 fellowship of either the National Postgraduate Medical College of Nigeria, the West African College of Physicians or the West African College of Surgeons.",
        },
        {
          list: "Candidate may be required to undergo a screening exercise to asses their suitability for the Ph.D programme.",
        },
      ],
    },
    {
      desc: "Candidates for admission into M.A, M.Ed, M.Sc (Ed), MLS, M.Sc., M.Eng. and LLM programmes shall have:",
      lists: [
        {
          list: "A minimum of a Good Second Class Lower Degree in the relevant areas from Bayero University, Kano or any other recognised University.",
        },
        {
          list: "A Degree plus University Postgraduate Diploma at Credit level in the relevant areas from Bayero University, Kano or any other recognised University.",
        },
        {
          list: "For all Engineering programmes, candidates must have Credit in English, Mathematics, Physics and Chemistry.",
        },
      ],
    },
    {
      desc: "Candidates for admission into MBCL shall possess:",
      lists: [
        {
          list: "A minimum of a Good Second Class Degree in Law or the Social Sciences from Bayero University, Kano or any other recognized University",
        },
        {
          list: "A Degree in Law or the Social Sciences plus University Postgraduate Diploma with minimum classification of Merit from Bayero University, Kano or any other recognized University.",
        },
      ],
    },
    {
      desc: "Candidates for admission into PGDBF, PGDHE, PGDPPA, PGDSPA, PGDCMPC, PGDMC, PGDDS, PGDE, PGDGC, PGDRTM, PGDHE, PGDDA and PGDIM shall possess a Degree in any discipline from BUK or any other recognized University or HND with a minimum classification of Lower Credit obtained from recognized Institutions.",
    },
    {
      desc: "Candidates for admission into PGDEM, PGDLA and PGDSE, shall possess a Degree in Geography, Environmental Sciences, Agriculture and related disciplines or HND with a minimum of Lower Credit in the related disciplines.",
    },
    {
      desc: "Candidates for admission into PGDAF shall hold a Degree in Accounting or related disciplines obtained from a recognized University or HND with a minimum classification of Lower Credit in Accounting or related disciplines obtained from recognized Institutions.",
    },
    {
      desc: "Candidates for admission into PGDTESL must have at least a 3rd class Degree in English or combined honours.",
    },
    {
      desc: "Candidates for admission into PGDHS should have at least a 3rd class Degree in Hausa or combined honours or HND with a minimum of Lower Credit in the relevant areas obtained from recognized Institutions.",
    },
    {
      desc: "Candidates for admission into PGDBS, PGDC and PGDIP shall have a Degree in the relevant Science subjects or HND with a minimum of Lower Credit in the relevant areas obtained from recognized Institutions.",
    },
    {
      desc: "Candidates for admission into PGDEE, PGDCE and PGDME shall have a Degree in the relevant Engineering areas or HND with a minimum of Lower Credit in the relevant engineering areas obtained from recognized Institutions.",
    },
    {
      desc: "Candidates for admission into Masters in Public Health must:",
      lists: [
        {
          list: "Have MBBS or BDS degree of Bayero University, Kano or an equivalent Medical Degree from a recognised University.",
        },
        {
          list: "Be registered with the Nigerian Medical and Dental Council and posses a current practicing license.",
        },
        {
          list: "Have at least three years post qualification cognate experience in Medicine or health related area at Federal, State or Local Government Area levels. Those employed in non-governmental organisations, engaged in occupational health services as well as those in the private sector are also eligible.",
        },
        {
          list: "There shall be an entry written examination, short listed candidates will then be interviewed to determine eligibility of the candidates.",
        },
      ],
    },
  ];
  return (
    <>
      <SceColHeader
        spanLabel="Admission Requirement for the Programmes"
        children={
          <>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "600",
                marginTop: "4rem",
              }}
            >
              NB: All candidates for admission into Ph.D, M.Phil, M.A, M.Ed,
              M.Sc, M.Eng and LLM Programmes must provide records of their
              Academic Transcripts
            </p>
            <ol style={{ textAlign: "left" }}>
              {requirements &&
                requirements.map((req, index) => (
                  <>
                    <li key={index}>{req.desc}</li>
                    <ol style={{ listStyle: "lower-roman" }}>
                      {req.lists &&
                        req.lists.map((li, subIndex) => (
                          <li key={subIndex}>{li.list}</li>
                        ))}
                    </ol>
                  </>
                ))}
            </ol>
          </>
        }
      />
    </>
  );
};

export default SpsAdmissionReqCol;
