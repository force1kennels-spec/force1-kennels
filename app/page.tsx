import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Credibility from "@/components/Credibility";
import Difference from "@/components/Difference";
import Breeds from "@/components/Breeds";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Solutions />
      <Credibility />
      <Difference />
      <Breeds />
      <Testimonials />
      <FinalCta />
      <Footer />
      <StickyCta />
    </>
  );
}
