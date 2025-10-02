import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.tsx";
import About from "./About.tsx";
import Services from "./Services.tsx";
import Process from "./Process.tsx";
import Industries from "./Industries.tsx";
import Contact from "./Contact.tsx";
import Benefits from "./Benefits.tsx";
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import { useSmoothScroll } from "./components/ui/hook.tsx";
import BacktoTop from "./components/ui/BacktoTop.tsx";

function Root() {
  useSmoothScroll();

  return (
    <div className="w-full">
      <Header />
      <div className="pt-24 md:pt-16">
        <div id="home">
          <App />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
      <BacktoTop />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
