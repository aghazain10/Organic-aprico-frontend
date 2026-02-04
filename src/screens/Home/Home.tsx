import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CertificationHighlightsSection } from "./sections/CertificationHighlightsSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { PricingComparisonSection } from "./sections/PricingComparisonSection";
import { PricingTableSection } from "./sections/PricingTableSection";
import { ServiceFeaturesSection } from "./sections/ServiceFeaturesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const navigationItems = [
  { label: "SHOP", width: "w-[51px]" },
  { label: "CERTIFICATES", width: "w-[126px]" },
  { label: "PURIFICATION PLANT", width: "w-[193px]" },
  { label: "WHOLESALE", width: "w-[108px]" },
  { label: "ABOUT", width: "w-[65px]" },
];

export const Home = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white">
      <div className="relative w-full overflow-hidden">
        <nav className="relative w-full h-[91px] flex justify-center bg-white z-10">
          <div className="mt-5 w-[1310px] flex items-start">
            <img
              className="w-[127px] h-[51px]"
              alt="Rectangle"
              src="/rectangle-31.png"
            />

            <div className="flex items-center gap-[86px] ml-[286px] mt-[7px]">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`${item.width} h-[29px] [font-family:'Poppins',Helvetica] font-normal text-[#355e3b] text-lg tracking-[0.72px] leading-[normal] hover:opacity-80 transition-opacity`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <img
          className="absolute top-[467px] right-0 w-[442px] h-[1291px] pointer-events-none"
          alt="Bg"
          src="/bg-01-1.png"
        />

        <img
          className="absolute top-[719px] left-0.5 w-[285px] h-[779px] pointer-events-none"
          alt="Bg"
          src="/bg-01-3.png"
        />

        <main className="relative w-full">
          <HeroIntroSection />
          <ServiceFeaturesSection />
          <CertificationHighlightsSection />
          <PricingTableSection />
          <TestimonialsSection />
          <HowItWorksSection />
          <PricingComparisonSection />
          <CallToActionSection />
        </main>

        <img
          className="absolute bottom-[860px] right-0 w-[308px] h-[860px] pointer-events-none"
          alt="Bg"
          src="/bg-01-2.png"
        />

        <footer className="relative w-full bg-white py-12">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex justify-end">
              <div className="relative w-[366px]">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[42px] pr-[120px] rounded-[26.58px] border border-black bg-white"
                />
                <Button className="absolute right-[3px] top-[3px] h-[35px] w-28 bg-[#355e3b] hover:bg-[#2d4f32] rounded-[24.36px] text-white text-[12.5px] [font-family:'Poppins',Helvetica] font-normal">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full h-7 bg-[#5a9f64] mt-8" />
        </footer>
      </div>
    </div>
  );
};
