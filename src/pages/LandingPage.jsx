import React from "react";
import Hero from "../components/Hero";
import VisionAndMotivation from "../components/VisionAndMotivation";
import LandingTheTeam from "../components/LandingTheTeam";
import Layout from "../components/Layout";
const LandingPage = () => {
  return (
    <Layout>
      <>
        <Hero></Hero>
        <VisionAndMotivation />
        <LandingTheTeam />
      </>
    </Layout>
  );
};

export default LandingPage;
