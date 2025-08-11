import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import ManuProd from "../components/ManuProd";
import VisionMission from "../components/VisionMission";
import WhyChoose from "../components/WhyChoose";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="manuprod">
        <ManuProd title={"Manufacturing Products"} />
      </div>
      <div id="visionmission">
        <VisionMission />
      </div>
      <div id="prods">
        <ManuProd title={"Trading Products"} />
      </div>
      <div id="whyus">
        <WhyChoose />
      </div>
      <div id="contactus">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
