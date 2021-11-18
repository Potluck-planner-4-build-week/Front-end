import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const CoverPage = () => {
  const { push } = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    push("/login");
  };
  return (
    <div>
      <h1 className="pageTitle">Potluck Planner</h1>
      <h3>Plan for every potluck</h3>
      <button onClick={handleClick}>Let's Plan</button>
    </div>
  );
};

export default CoverPage;
