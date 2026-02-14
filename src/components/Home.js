import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Testmoial from "./Testmonial";

import { motion } from "framer-motion";
import { useContext, useEffect, useMemo } from "react";
import { CartContext } from "./CartContext";
import { useLocation, useNavigate } from "react-router-dom";

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

  /* ================= SECTION MAP ================= */
  const sectionMap = useMemo(
    () => ({
      Home: homeRef,
      Services: servicesRef,
      About: aboutRef,
      Contact: contactRef,
      Portfolio: portfolioRef,
      Testmoial: testmonialRef,
    }),
    [
      homeRef,
      servicesRef,
      aboutRef,
      contactRef,
      portfolioRef,
      testmonialRef,
    ]
  );

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const targetRef = sectionMap[target];

    if (targetRef?.current) {
      // small delay ensures page fully renders
      const timer = setTimeout(() => {
        scrollToSection(targetRef);

        // clear router state so refresh doesn't scroll again
        navigate(".", { replace: true });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location, sectionMap, scrollToSection, navigate]);

  /* ================= UI ================= */
  return (
    <motion.div
      ref={homeRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <div ref={portfolioRef}>
        <Portfolio />
      </div>

      <div ref={testmonialRef}>
        <Testmoial />
      </div>
    </motion.div>
  );
}

export default Home;
