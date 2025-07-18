import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ManuProd from "./components/ManuProd";
import VisionMission from "./components/VisionMission";
import WhyChoose from "./components/WhyChoose";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="aboutus">
        <AboutUs />
      </Element>
      <Element name="manuprod">
        <ManuProd />
      </Element>
      <Element name="visionmission">
        <VisionMission />
      </Element>
      <Element name="prods">
        <ManuProd />
      </Element>
      <Element name="whyus">
        <WhyChoose />
      </Element>
      <Element name="contactus">
        <ContactUs />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
