import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Gallery from "../components/Gallery";
import Directors from "@/components/Directors";
import ContactForm from "@/components/ContactForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Gallery />
      <Directors />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
