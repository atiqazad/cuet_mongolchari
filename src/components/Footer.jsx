import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiCopyrightLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center footer bg-gray-200 text-neutral-content p-10">
      <div className="text-2xl flex justify-between gap-6 text-gray-500">
        <RiFacebookCircleFill></RiFacebookCircleFill>
        <FaInstagram></FaInstagram>
        <FaYoutube></FaYoutube>
      </div>
      <div className="flex items-center">
        <RiCopyrightLine className="mr-[-8px] text-gray-400"></RiCopyrightLine>
        <p className="text-gray-500 text-md">2024 Team CUET MongolChari</p>
      </div>
    </footer>
  );
};

export default Footer;
