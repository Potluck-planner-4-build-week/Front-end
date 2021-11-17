import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CoverPage = () => {
  return (
    <div>
      <h1 className="pageTitle">Potluck Planner</h1>
      <h3>Plan for every potluck</h3>
      <Link to="/login" className="button">
        Lets Plan
      </Link>
    </div>
  );
};

export default CoverPage;
