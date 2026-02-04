import { Card, CardContent } from "../../../../components/ui/card";

const processSteps = [
  {
    number: "1",
    title: "Raw Shilajit Collection",
    description: (
      <>
        <span className="tracking-[0.10px]">High-altitude </span>
        <span className="font-bold tracking-[0.10px]">Shilajit</span>
        <span className="tracking-[0.10px]">
          {" "}
          is sourced directly from the mountains to maintain purity from the
          very beginning.
        </span>
      </>
    ),
    numberSize: "text-[201.7px]",
    numberTracking: "tracking-[2.02px]",
    numberLeading: "leading-[256.0px]",
    stepTop: "top-[131px]",
    stepLeft: "left-[calc(50.00%_-_1px)]",
    titleTop: "top-[199px]",
    descTop: "top-[228px]",
    descAlign: "text-right",
    containerTop: "top-[414px]",
    containerLeft: "left-[150px]",
    imageTop: "top-[460px]",
    imageLeft: "left-[445px]",
    decorTop: "top-[959px]",
    decorLeft: "left-[466px]",
    decorSrc: "/objects-1.svg",
    decorWidth: "w-[222px]",
    decorHeight: "h-[235px]",
  },
  {
    number: "2",
    title: "Washing & Filtering",
    description:
      "Organic filtering removes stones, soil, and unwanted particles.",
    numberSize: "text-[193.9px]",
    numberTracking: "tracking-[1.94px]",
    numberLeading: "leading-[246.1px]",
    stepTop: "top-[119px]",
    stepLeft: "left-[calc(50.00%_-_118px)]",
    titleTop: "top-[188px]",
    titleLeft: "left-[calc(50.00%_-_125px)]",
    titleWidth: "w-[170px]",
    descTop: "top-[216px]",
    descLeft: "left-[7px]",
    descWidth: "w-[235px]",
    descAlign: "text-left",
    containerTop: "top-[838px]",
    containerLeft: "left-[1022px]",
    containerWidth: "w-[250px]",
    containerHeight: "h-[299px]",
    imageTop: "top-[873px]",
    imageLeft: "left-[716px]",
    numberLeft: "left-[88px]",
    numberWidth: "w-24",
  },
  {
    number: "3",
    title: "Low-Heat Extraction",
    description:
      "Gentle heating preserves minerals without burning or damaging nutrients.",
    numberSize: "text-[173px]",
    numberTracking: "tracking-[1.73px]",
    numberLeading: "leading-[219.6px]",
    stepTop: "top-[106px]",
    stepLeft: "left-[calc(50.00%_-_47px)]",
    titleTop: "top-[175px]",
    descTop: "top-[203px]",
    descAlign: "text-right",
    containerTop: "top-[1237px]",
    containerLeft: "left-[140px]",
    containerHeight: "h-[305px]",
    imageTop: "top-[1258px]",
    imageLeft: "left-[435px]",
    numberLeft: "left-48",
    numberWidth: "w-[54px]",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-6">
      <div className="relative w-full max-w-[1440px] mx-auto">
        <img
          className="w-[21.67%] h-[15.12%] absolute top-[-274.14%] left-[-42.08%]"
          alt="Vector"
          src="/vector.svg"
        />

        <img
          className="w-[6.81%] h-[4.81%] absolute top-[-274.14%] left-[-42.08%]"
          alt="Vector"
          src="/vector-1.svg"
        />

        <div className="absolute top-[23px] left-[calc(50.00%_-_308px)] w-[615px] [font-family:'Oswald',Helvetica] font-normal text-transparent text-[55.9px] text-center tracking-[1.68px] leading-[70.9px]">
          <span className="font-medium text-[#f7ba00] tracking-[0.94px]">
            Our{" "}
          </span>
          <span className="font-medium text-[#f7ba00] text-[59.7px] tracking-[1.07px] leading-[75.8px]">
            8
          </span>
          <span className="font-medium text-[#f7ba00] tracking-[0.94px]">
            -Steps
            <br />
          </span>
          <span className="[font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] text-[#355e3b] tracking-[0.94px]">
            Purification Process
          </span>
        </div>

        <div className="absolute top-[198px] left-[calc(50.00%_-_373px)] w-[690px] [font-family:'Poppins',Helvetica] font-normal text-black text-[17.1px] text-center tracking-[0.68px] leading-[normal]">
          Every batch goes through a carefully controlled, chemical-free
          purification method designed to ensure maximum purity, safety, and
          mineral richness. Our 7-step process guarantees consistent,
          high-quality Shilajit you can trust.
        </div>

        <div className="absolute top-96 left-[calc(50.00%_-_88px)] w-[120px] [font-family:'Oswald',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
          How Can Shilajeet
        </div>

        {processSteps.map((step, index) => (
          <div key={index}>
            <Card
              className={`absolute ${step.imageTop} ${step.imageLeft} w-[285px] h-[283px] bg-[#d9d9d9] rounded-[11.64px] border-0`}
            >
              <CardContent className="p-0 w-full h-full" />
            </Card>

            <div
              className={`absolute ${step.containerTop} ${step.containerLeft} ${step.containerWidth || "w-[274px]"} ${step.containerHeight || "h-[330px]"}`}
            >
              <div
                className={`absolute ${step.titleTop} ${step.titleLeft || "left-[calc(50.00%_-_52px)]"} ${step.titleWidth || "w-[181px]"} [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[0] leading-[normal]`}
              >
                {step.title}
              </div>

              <div
                className={`${step.numberLeft ? `${step.numberLeft}` : "left-[206px]"} ${step.numberWidth || "w-[54px]"} ${step.numberSize} text-center ${step.numberTracking} ${step.numberLeading} absolute top-px [font-family:'Epilogue',Helvetica] font-extrabold text-[#f7ba00] whitespace-nowrap`}
              >
                {step.number}
              </div>

              <div
                className={`${step.stepTop} ${step.stepLeft} absolute [font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] font-normal text-[#355e3b] text-[40.3px] tracking-[0.40px] leading-[normal]`}
              >
                Step
              </div>

              <div
                className={`absolute ${step.descTop} ${step.descLeft || "left-px"} ${step.descWidth || "w-[263px]"} [font-family:'Poppins',Helvetica] font-normal text-black text-[15.5px] ${step.descAlign} tracking-[0.62px] leading-[normal]`}
              >
                {step.description}
              </div>
            </div>

            {step.decorSrc && (
              <img
                className={`absolute ${step.decorTop} ${step.decorLeft} ${step.decorWidth} ${step.decorHeight}`}
                alt="Objects"
                src={step.decorSrc}
              />
            )}
          </div>
        ))}

        <img
          className="absolute top-[498px] left-[720px] w-[344px] h-[357px]"
          alt="Objects"
          src="/objects.svg"
        />

        <img
          className="absolute top-[1668px] left-[463px] w-[515px] h-[250px]"
          alt="Group"
          src="/group-75.png"
        />

        <img
          className="absolute top-0 left-[1035px] w-[401px] h-[1147px]"
          alt="Bg"
          src="/bg-01-3-1.png"
        />
      </div>
    </section>
  );
};
