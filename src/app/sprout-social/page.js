import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import BlueBackground from "@/components/UI/BlueBackground";
import React from "react";

const Page = () => {
  return (
    <BlueBackground>
      <NavBar />
      <Hero></Hero>
      <TrustedBy />
    </BlueBackground>
  );
};

export default Page;
