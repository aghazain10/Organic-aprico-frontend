import { Button } from "../../../../components/ui/button";

export const CertificationHighlightsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-[60px] px-4">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center max-w-[898px] mx-auto mb-[46px]">
          <h2 className="[font-family:'Oswald',Helvetica] font-semibold text-[#f7ba00] text-5xl tracking-[2.88px] leading-[normal] whitespace-nowrap text-center">
            100% Pure, Naturally Powerful
          </h2>

          <h3 className="[font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] font-normal text-[#355e3b] text-[64px] tracking-[-0.64px] leading-[normal] mt-[17px] text-center">
            Certified like no others
          </h3>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-[27.9px] text-center tracking-[1.12px] leading-[normal] mt-[39.6px] max-w-[892px]">
            Certified to the highest global standards (GMP, ISO 9001, IFS), our
            Shilajit delivers genuine purity and unmatched authenticity. When it
            comes to quality, we never compromise neither should you.
          </p>
        </div>

        <div className="relative flex justify-center mb-[367px]">
          <img
            className="w-full max-w-[1079px] h-auto object-cover"
            alt="License"
            src="/license-1.png"
          />
        </div>

        <div className="flex flex-col items-center gap-[18px] relative z-10">
          <Button className="relative w-[344px] h-[73px] bg-transparent hover:bg-transparent p-0 border-0">
            <img
              className="absolute inset-0 w-full h-full"
              alt="Rectangle"
              src="/rectangle-2-1.svg"
            />
            <span className="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] [font-family:'Poppins',Helvetica] font-normal text-white text-[17.4px] tracking-[0.70px] leading-[normal]">
              See Laboratory Result
            </span>
          </Button>

          <Button className="relative w-[254px] h-[68px] bg-transparent hover:bg-transparent p-0 border-0">
            <img
              className="absolute inset-0 w-full h-full"
              alt="Rectangle"
              src="/rectangle-3.svg"
            />
            <span className="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] [font-family:'Poppins',Helvetica] font-normal text-[#1f1c1c] text-[17.4px] tracking-[0.70px] leading-[normal]">
              See Cetificates
            </span>
          </Button>
        </div>

        <img
          className="absolute top-[592px] right-0 w-[495px] h-[829px] pointer-events-none"
          alt="Bg"
          src="/bg-01-1-1.png"
        />
      </div>
    </section>
  );
};
