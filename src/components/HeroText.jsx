import React from "react";
import { Link } from "react-router-dom";
const HeroText = () => {
  return (
    <div className="lg:w-auto w-[250px] lg:h-auto border rounded-xl bg-white bg-opacity-50 flex flex-col justify-left items-center text-green-800 gap-8 p-2">
      <p className="text-3xl filter brightness-50 font-bold">
        Team MongolChari
      </p>
      <p className="text-xl font-semibold filter brightness-50">
        We are a team from Chittagong University of Engineering &
        Technology(CUET), and we are preparing to participate in IRC 2025.
      </p>
      <Link to="/contact">
        <button className="btn bg-cyan-500">Contact Us</button>
      </Link>
    </div>
  );
};

export default HeroText;
