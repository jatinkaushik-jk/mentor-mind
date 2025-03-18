import AboutSection from "./components/about";
import FeatureSection from "./components/features";
import Footer from "./components/footer";
import GettingStartedSection from "./components/gettingStarted";
import { HeroSection } from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <GettingStartedSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
