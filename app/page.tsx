import Hero from "./_components/Hero";
import About from "./_components/About";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";

export default function Home() {


  return (
        <div className="min-h-screen bg-[#051422]">
          <Hero />
          <About />
          <Faq />
          <Footer />
        </div>
  );
}
