import HeroSlider from "../utils/HeroSlider";
import heroImg2 from "../../assets/heroImg2.jpeg";

const HeroSection = () => {
  return (
    <div className="my-8">
      <div className="2xl:flex gap-6">
        <div>
          <HeroSlider />
        </div>
        <div className="max-2xl:hidden">
          <img
            className="w-96 max-h-[357px] rounded-lg"
            src={heroImg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
