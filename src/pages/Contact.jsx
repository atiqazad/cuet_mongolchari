import React from "react";
import Layout from "../components/Layout";
const Contact = () => {
  return (
    <Layout>
      <div className="flex-col m-16">
        <p className="text-3xl font-bold flex justify-center">Contact Us</p>
        <p className="flex justify-center m-8 text-md font-semibold">
          We at Team MongolChari, we love to hear from you. So feel free to drop
          us a message
        </p>
        <div className=" sm:m-8 font-semibold sm:bg-blue-200 rounded p-4">
          <p className="text-xl mb-4">Email :</p>
          <p>
            <a href="mailto:u2009020@student.cuet.ac.bd">
              u2009020@student.cuet.ac.bd
            </a>
          </p>

          <a href="mailto:u2109003@student.cuet.ac.bd">
            u2109003@student.cuet.ac.bd
          </a>
        </div>
        <div className="sm:m-8 font-semibold sm:bg-cyan-200 rounded p-4">
          <p className="text-xl mb-4">Phone Number :</p>
          <a href="tel:+8801307400969">+8801307400969</a>
          <span>,</span>
          <p></p>
          <a href="tel:+8801531801651">+8801531801651</a>
        </div>
        <div className="sm:m-8 font-semibold sm:bg-orange-200 p-4 rounded">
          <p className="text-xl mb-4">Address:</p>
          <address>
            Chittagong University of Engineering & Technology, Kaptai Highway,
            Raozan Pahartali Road, Chattogram 4349
          </address>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
