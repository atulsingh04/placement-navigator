import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Companies from "../components/home/Companies";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import RoadmapPreview from "../components/home/RoadmapPreview";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-[#030712] text-white">

      <Navbar />

      <Hero />

      <Companies />

      <Features />

      <HowItWorks />

      <RoadmapPreview />

      <Testimonials />

      <FAQ />

      <Footer />

    </div>
  );
}