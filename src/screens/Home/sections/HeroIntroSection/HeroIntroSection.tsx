import { Button } from "../../../../components/ui/button";

export const HeroIntroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 space-y-6">
            <div className="relative">
              <img
                className="absolute -left-8 md:-left-16 top-0 w-[400px] md:w-[621px] h-auto opacity-90 -z-10"
                alt="Green brush stroke"
                src="/green-brush-stroke-01-1.png"
              />

              <div className="space-y-4">
                <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#355e3b] text-xl md:text-2xl lg:text-[25px] tracking-[1.00px]">
                  Organic Aprico® Original
                </h2>

                <h1 className="[font-family:'Oswald',Helvetica] font-bold text-[#f7ba00] text-4xl md:text-5xl lg:text-[65px] tracking-[1.30px] leading-tight lg:leading-[76.3px]">
                  SUPERIGNITE
                  <br />
                  INNER STRENGTH
                </h1>

                <p className="[font-family:'Poppins',Helvetica] font-extralight text-black text-lg md:text-xl lg:text-[25px] tracking-[1.00px] leading-relaxed max-w-[519px]">
                  Discover the purest, lab tested Shilajit resin ethically
                  harvested from the world&apos;s highest mountains and
                  delivered to your doorstep.
                </p>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="rounded-full border-[1.54px] border-[#487f50] bg-transparent hover:bg-[#487f50] hover:text-white text-[#233d27] [font-family:'Poppins',Helvetica] font-normal text-[15.4px] tracking-[0.62px] px-8 py-6 h-[59px] min-w-[213px]"
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative pt-8">
              <img
                className="w-full max-w-[491px] h-auto"
                alt="Mg copy"
                src="/-mg-1795-copy-removebg-preview-1.png"
              />
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[561px] h-auto object-contain"
              alt="Download"
              src="/download-6-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
