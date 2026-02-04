export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <img
        className="w-full h-[164px] object-cover"
        alt="Untitled"
        src="/untitled-1-3.png"
      />

      <div className="container mx-auto px-[117px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="flex flex-col gap-8">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#f7ba00] text-4xl tracking-[0] leading-normal">
              OrganicAprico
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0] leading-normal max-w-[559px]">
              Discover authentic Shilajit sourced from Skardu&apos;s Himalayan
              mountains at Organic Aprico. We are a pure Shilajit resin and
              wholesale supplier offering premium quality for those looking to
              buy bulk Shilajit in Pakistan.
            </p>

            <img
              className="w-36 h-6"
              alt="Button list"
              src="/button-list.svg"
            />

            <address className="[font-family:'Poppins',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-normal not-italic">
              Organic Aprico, Lahore Organic Village, Main Blvd, D.H.A, Lahore
              <br />
              Production House Address: Lasu House of Production, Skardu, Gilgit
              Baltistan
            </address>
          </div>

          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full -translate-x-1/2">
            <img
              className="w-full h-[395px] object-cover"
              alt="Line"
              src="/line-2.svg"
            />
          </div>

          <div className="flex flex-col"></div>
        </div>
      </div>
    </section>
  );
};
