import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Marquee />
        <Services />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
