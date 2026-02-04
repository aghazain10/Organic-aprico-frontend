import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const benefitsData = [
  {
    title: "Male Infertility",
    description:
      "Shilajit naturally boosts male fertility by enhancing testosterone levels and improving sperm quality and count. Its rich mineral content and fulvic acid promote hormonal balance and vitality, supporting overall reproductive health.",
    imagePosition: "left",
  },
  {
    title: "Energy & Stamina",
    description:
      "Shilajit helps reduce physical and mental fatigue by supporting cellular energy production in the body. It enhances stamina and endurance, making daily activities and workouts more sustainable.",
    imagePosition: "right",
  },
  {
    title: "Testosterone Support",
    description:
      "Shilajit aids in maintaining healthy testosterone levels which are essential for strength, libido, and vitality. It supports hormonal stability and overall male wellness.",
    imagePosition: "left",
  },
];

export const PricingTableSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 px-4">
      <img
        className="absolute top-0 left-0 w-full max-w-[970px] h-auto object-cover"
        alt="Background decoration"
        src="/bg-01-2-1.png"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Oswald',Helvetica] font-medium text-[#f7ba00] text-5xl tracking-[0] leading-normal mb-4">
            BENEFITS OF
          </h2>
          <h3 className="[font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] font-normal text-[#355e3b] text-[64px] tracking-[0] leading-normal">
            Organic Aprico Shilajeet
          </h3>
        </div>

        <div className="space-y-16 mt-20">
          {benefitsData.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    benefit.imagePosition === "right"
                      ? "md:flex-row-reverse"
                      : ""
                  }`}
                >
                  <div className="w-full md:w-[403px] h-[319px] rounded-[15px] bg-[#d9d9d9] flex-shrink-0" />

                  <div
                    className={`flex-1 ${
                      benefit.imagePosition === "right" ? "md:text-right" : ""
                    }`}
                  >
                    <h4 className="[font-family:'Oswald',Helvetica] font-medium text-[#f7ba00] text-[44px] tracking-[0] leading-normal mb-6">
                      {benefit.title}
                    </h4>
                    <p className="[font-family:'Oswald',Helvetica] font-extralight text-black text-2xl tracking-[0] leading-normal max-w-[697px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Button
            variant="outline"
            className="w-[459px] h-[77px] bg-white rounded-[111px] border-2 border-solid border-black hover:bg-gray-50"
          >
            <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-[35px] tracking-[-1.40px] leading-normal">
              See More Benefits
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
