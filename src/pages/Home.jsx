import HeroSection from "../components/ui/HeroSection";
import ProductSection from "../components/ui/ProductSection";

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto px-5">
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
