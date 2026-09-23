import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BrandExperience from "@/sections/BrandExperience";
import BrandStatements from "@/sections/BrandStatements";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import WhyLaCatrina from "@/sections/WhyLaCatrina";

export default function LandingPage() {
  return (
    <div className="font-raleway">
      <Navbar />

      <main>
        <Hero />
        <BrandStatements />
        <Products />
        <BrandExperience />
        <WhyLaCatrina />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
