import { HeroSection } from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="my-14">
        <HeroSection></HeroSection>
      </main>
      <footer></footer>
    </>
  );
}
