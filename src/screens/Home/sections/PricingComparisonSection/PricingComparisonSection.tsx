export const PricingComparisonSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <h2 className="[font-family:'Oswald',Helvetica] font-medium text-[#f7ba00] text-4xl md:text-[44px] tracking-[0] leading-normal">
            How
          </h2>
          <h3 className="[font-family:'Feeling_Passionate_Personal_Use-Regular',Helvetica] font-normal text-[#0c7f1b] text-5xl md:text-[58px] tracking-[0] leading-normal">
            Organic Aprico
          </h3>
          <h2 className="[font-family:'Oswald',Helvetica] font-medium text-[#f7ba00] text-4xl md:text-[44px] tracking-[0] leading-normal">
            Different from Others
          </h2>
          <span className="[font-family:'Golos_Text',Helvetica] font-extrabold text-black text-6xl md:text-7xl tracking-[0] leading-normal whitespace-nowrap">
            ?
          </span>
        </div>

        <div className="flex justify-center">
          <img
            className="w-full max-w-[1119px] h-auto object-cover"
            alt="Pricing comparison table"
            src="/table-1.png"
          />
        </div>
      </div>
    </section>
  );
};
