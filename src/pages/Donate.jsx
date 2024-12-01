import React from "react";
import Layout from "../components/Layout";
import { MdOutlineConstruction } from "react-icons/md";
const Donate = () => {
  return (
    <Layout>
      <div className="h-screen flex justify-center text-6xl font-bold m-32">
        <MdOutlineConstruction className="flex items-center text-8xl text-red-700"></MdOutlineConstruction>
        Under Construction!
        <MdOutlineConstruction className="flex items-center text-8xl text-red-700"></MdOutlineConstruction>
      </div>
    </Layout>
  );
};

export default Donate;
