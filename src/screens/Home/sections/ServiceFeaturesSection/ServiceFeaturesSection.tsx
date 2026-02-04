import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const buttonData = [
  {
    text: "See Our Reviews",
    backgroundImage: "/rectangle-2.svg",
  },
  {
    text: "Shop Now",
    backgroundImage: "/rectangle-3-1.svg",
  },
];

export const ServiceFeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1450px]">
        <div className="relative min-h-[974px]">
          <div className="relative z-10 mb-8">
            <div className="flex items-start gap-4">
              <div>
                <h3 className="[font-family:'Oswald',Helvetica] font-medium text-[#f7ba00] text-5xl tracking-[0] leading-[normal] mb-4">
                  You Should Know
                </h3>
                <h2 className="[font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] font-normal text-[#355e3b] text-[64px] tracking-[0] leading-[normal]">
                  What is Shilajeet
                </h2>
              </div>
              <div className="[font-family:'Golos_Text',Helvetica] font-extrabold text-[#f7ba00] text-[145px] tracking-[0] leading-[normal] whitespace-nowrap ml-auto">
                ?
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-end mb-[-200px] relative z-20">
              <Card className="w-full max-w-[679px] bg-[#355e3be6] rounded-[15px] shadow-[-11px_0px_24px_#00000029,-44px_0px_44px_#00000024,-99px_0px_59px_#00000014,-176px_0px_70px_#00000005,-275px_0px_77px_transparent] border-0">
                <CardContent className="p-12 space-y-8">
                  <p className="[font-family:'Poppins',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                    Shilajit Is A Natural Substance That Forms Over Centuries
                    From The Slow Decomposition Of Plants, Herbs, And Organic
                    Matter In High-altitude Mountain Ranges Such As The
                    Himalayas Gilgit Baltistan. Raw Shilajit Is Found In Rock
                    Form And Contains Many Impurities. To Make It Consumable, It
                    Goes Through An 8-stage Ultra-filtration And Purification
                    Process And Over 40 Days Of Direct Sunlight Dehydration,
                    Supported By Both Traditional Practices And Scientific
                    Methods. This Process Removes Arsenic, Heavy Metals,
                    Bacteria, Fungi, And Other Impurities, Making It Safe For
                    Human Consumption.
                  </p>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                    After Purification, Shilajit Becomes A Dark, Sticky Resin
                    Rich In Fulvic Acid, Humic Acid, Bioactive Compounds, And
                    More Than 85 Minerals. In The Global Market, Most Available
                    Shilajit Is Sourced From Lower Altitudes, Processed With
                    Outdated Filtration Methods, And Often Mixed With Additives
                    That Compromise Its Safety And Potency. Organic Aprico Is A
                    Native Producer, While Most Others Are Sellers Or Resellers,
                    Making It Difficult For Consumers To Identify Genuine
                    Sources. Organic Aprico, Based In Gilgit-baltistan, Operates
                    A Scientific 8-stage Ultrafiltration And Purification
                    Facility.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative z-10">
              <img
                className="w-full h-auto max-h-[429px] object-cover"
                alt="Mountains"
                src="/mountains-01-1.png"
              />
            </div>
          </div>

          <div className="flex justify-center gap-10 mt-12 relative z-30">
            {buttonData.map((button, index) => (
              <Button
                key={index}
                variant="ghost"
                className="relative w-[231.2px] h-[61.86px] p-0 hover:bg-transparent"
              >
                <img
                  className="absolute inset-0 w-full h-full object-contain"
                  alt="Button background"
                  src={button.backgroundImage}
                />
                <span className="relative z-10 [text-shadow:0px_3.17px_3.17px_#00000040] [font-family:'Poppins',Helvetica] font-normal text-[#1f1c1c] text-[15.9px] tracking-[0.63px] leading-[normal]">
                  {button.text}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
