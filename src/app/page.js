import TagManager from "@/components/TagManager/TagManager";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Integrations from "@/components/Integrations/Integrations";
import NavBar from "@/components/NavBar/NavBar";
import Tabs from "@/components/Tabs/Tabs";
import Teams from "@/components/Teams/Teams";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import BlueBackground from "@/components/UI/BlueBackground";
import VideoSection from "@/components/VideoSection/Videosection";

const HeroText = () => {
  return (
    <div className="sm:w-4/5 lg:max-w-[465px] w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold mb-5 lg:mb-10">
        A One Stop Solution for Social Listening, ORM & CXM!
        {/* Not Just Social Listening,{" "}
        <span className="blue-gradient">Do It All!</span> */}
      </h1>
      <p className="text-[#A6B6C4] text-lg md:text-xl lg:text-2xl text-center lg:text-left leading-normal">
        All Tickets in one place. All Analytics in one place. Unify your
        Customer Care and Marketing
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <NavBar />
      <BlueBackground>
        <Hero>
          <HeroText />
        </Hero>
        <TrustedBy />
      </BlueBackground>
      <Experience />
      <Integrations />
      <Tabs />
      <BlueBackground>
        <Teams />
      </BlueBackground>
      <VideoSection />
      <Testimonials />
      <Footer className="mt-16" />
    </>
  );
}
