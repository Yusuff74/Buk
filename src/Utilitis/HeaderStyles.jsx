import { useState } from "react";

export const myStyles = {
  styleRight: {
    flex: "1",
    width: "80%",
    marginLeft: "20%",
  },
  styleLeft: {
    flex: "1",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    width: "20%",
    backgroundColor: "#2A3F54",
    color: "#fff",
  },
};

const ChangeWidth = () => {
  const [styles, setStyles] = useState(myStyles);

  const handleWidthChange = () => {
    const updatedStyles =
      styles.styleRight.width === "80%" && styles.styleLeft.width === "20%"
        ? {
            styleRight: {
              ...styles.styleRight,
              width: "90%",
              marginLeft: "10%",
            },
            styleLeft: { ...styles.styleLeft, width: "10%" },
          }
        : {
            styleRight: {
              ...styles.styleRight,
              width: "80%",
              marginLeft: "20%",
            },
            styleLeft: { ...styles.styleLeft, width: "20%" },
          };

    setStyles({ ...styles, ...updatedStyles });
  };

  return {
    styles,
    changeWidth: handleWidthChange,
  };
};

export default ChangeWidth;
