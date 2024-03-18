import HeroSection from "../components/ui/HeroSection";
import ProductSection from "../components/ui/ProductSection";

const Home = () => {
  return (
    <div className="container max-w-[1175px] mx-auto max-xl:px-5 bg-[#F8F9FA]">
      <div>
        <HeroSection />
      </div>
      <div>
        <ProductSection />
      </div>
    </div>
  );
};

export default Home;
