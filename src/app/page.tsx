import AboutSection from "./components/about";
import FeatureSection from "./components/features";
import Footer from "./components/footer";
import GettingStartedSection from "./components/gettingStarted";
import { HeroSection } from "./components/hero";
import Navbar from "./components/navbar";
import TeamSection from "./components/team";

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
        <TeamSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
