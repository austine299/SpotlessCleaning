
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import Testmoial from "./Testmonial" 

function Home() {
  const {
    homeRef,
    servicesRef,
    aboutRef,
    contactRef,
    portfolioRef,
    testmonialRef,
    scrollToSection,
  } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const map = {
      Home: homeRef,
      Services: servicesRef,
      About: aboutRef,
      Contact: contactRef,
      Portfolio: portfolioRef,
      Testmoial: testmonialRef,
    };

    const target = location.state?.scrollTo;
    const targetRef = map[target];

    if (targetRef?.current) {
      setTimeout(() => {
        scrollToSection(targetRef);
        navigate(".", { replace: true }); // clear scroll state
      }, 200);
    }
  }, [location]);

  return (
    <motion.div
      ref={homeRef} // You can assign homeRef to the container
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <div ref={servicesRef}><Services /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <div ref={testmonialRef}><Testmoial /></div>
    </motion.div>
  );
}

export default Home;
