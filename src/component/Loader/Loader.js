import React, { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    color: "red",
    height: "100vh"
  };
  return (
    <div>
      <ScaleLoader
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
