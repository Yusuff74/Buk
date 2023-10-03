import { FaThList } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaSign } from "react-icons/fa";
import RegSideBar from "../Utilitis/RegSideBar";
import RegHeader from "../Utilitis/RegHeader";
import ChangeWidth from "../Utilitis/HeaderStyles";
import BukatTableList from "../Utilitis/BukatTableList";
import BukatFooter from "../Utilitis/BukatFooter";
import { useDataContext } from "../Utilitis/DataContext";

const BukatEligible = () => {
  const { programmesCOM } = useDataContext();
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };
  const headerItems = ["#", "Programmes", "UTME SCORE"];
  return (
    <>
      <div style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
        <RegSideBar
          styles={styles}
          title="BUKAT 22"
          title2="Procedures"
          title3="Eligibility"
          title4="BUKAT Login"
          icon1={<FaThList />}
          icon2={<FaLockOpen />}
          icon3={<FaSign />}
        />
        <div style={styles.styleRight}>
          <RegHeader
            changeWidth={handleWidthChange}
            regTitle="Aptitude Test (BUKAT)"
          />
          <div
            style={{
              textAlign: "center",
              margin: "3rem auto",
              width: "80%",
              backgroundColor: "#fff",
              color: "#73879C",
              padding: "1rem",
            }}
          >
            <h3>Candidate Eligibility</h3>
            <hr />
            <p>
              UTME Candidates must have chosen Bayero University as First Choice
              and scored not less than the indicated minimum score for various
              Faculties/Programmes as stated below:
            </p>
            {programmesCOM.map((items, index) => (
              <BukatTableList
                tableTitle={items.title}
                items={items.items}
                headerItems={headerItems}
                key={index}
              />
            ))}
          </div>
          <BukatFooter />
        </div>
      </div>
    </>
  );
};

export default BukatEligible;
