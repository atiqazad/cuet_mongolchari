import React from "react";
import all_teammates from "../../public/all_teammates.png";
import { Link } from "react-router-dom";
const LandingTheTeam = () => {
  return (
    <div className="bg-black flex gap-8 p-8 items-center justify-center">
      <Link to="/the_team">
        <img src={all_teammates} className="md:w-128 sm:w-64 w-32"></img>
      </Link>
      <div>
        <p className="sm:text-6xl text-xl text-white">The Team</p>
        <Link to="/the_team">
          <button className="btn sm:mt-8 mt-2">View Full Team</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingTheTeam;
