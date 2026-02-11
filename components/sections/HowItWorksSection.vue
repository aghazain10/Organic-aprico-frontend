<template>
    <section class="relative w-full bg-white overflow-hidden">
        <div
            class="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-0"
        >
            <!-- Heading -->
            <div class="relative pt-10 md:pt-16 lg:pt-20 text-center">
                <h2
                    class="font-oswald font-semibold text-[#f7ba00] text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-[5.5rem] tracking-tight leading-tight"
                >
                    How Can Shilajeet
                </h2>

                <div class="mt-1 flex justify-center items-baseline gap-2">
                    <h1
                        class="font-['Feeling_Passionate_Personal_Use-Regular'] text-[#355e3b] text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.8rem] tracking-[-0.03em] leading-none"
                    >
                        Power Up Your Day
                    </h1>
                    <span
                        class="font-['Feeling_Passionate_Personal_Use-Regular'] text-white text-3xl sm:text-4xl md:text-5xl"
                        >?</span
                    >
                </div>

                <p
                    class="mt-5 md:mt-7 max-w-2xl lg:max-w-xl mx-auto font-poppins text-black text-sm sm:text-base lg:text-[11.7px] tracking-[0.47px] leading-relaxed text-center px-4 sm:px-0"
                >
                    Stay sharp at work with improved focus and reduced mental
                    fatigue. Boost your performance in sports with enhanced
                    energy and stamina. OrganicAprico® Shilajit gives you the
                    natural edge you need to thrive from morning to night.
                </p>
            </div>

            <!-- Runner + decorative bg -->
            <div class="relative mt-8 md:mt-12 lg:mt-16">
                <div class="relative mx-auto max-w-[1116px] flex justify-start">
                    <img
                        src="/running.png"
                        alt="Runner"
                        class="w-full max-w-[900px] h-auto object-contain"
                        loading="lazy"
                    />

                    <img
                        src="/bg-01-1-2.png"
                        alt="Background decoration"
                        class="absolute -top-12 sm:-top-16 md:-top-20 right-0 lg:right-[-40px] w-40 sm:w-56 md:w-72 lg:w-[287px] h-auto opacity-80 lg:opacity-100 hidden md:block"
                        loading="lazy"
                    />
                </div>
            </div>

            <!-- Pure Mountain Power + mountains + overlays -->
            <div class="relative mt-10 lg:mt-16">
                <!-- Text block - closer spacing -->
                <div class="text-center relative z-10">
                    <h3
                        class="font-oswald font-bold text-[#f7ba00] text-lg sm:text-xl md:text-2xl lg:text-[20.7px]"
                    >
                        ORGANICAPRICO ORIGINAL IS
                    </h3>

                    <h2
                        class="mt-1 font-['Feeling_Passionate_Personal_Use-Regular'] text-[#355e3b] text-4xl sm:text-5xl md:text-6xl lg:text-[41.5px] tracking-[-0.41px] leading-tight"
                    >
                        Pure Mountain Power
                    </h2>

                    <p
                        class="mt-4 md:mt-5 max-w-3xl mx-auto font-poppins text-black text-sm sm:text-[13px] lg:text-[13px] tracking-[0.52px] leading-relaxed px-5 sm:px-8 lg:px-0"
                    >
                        Shilajit is a naturally alkaline superfood packed with
                        vital minerals, trace elements, and nourishing
                        compounds. Formed over thousands of years by the
                        pressure of ancient plant matter, it is one of nature's
                        rarest resources — found only in a few high-altitude
                        mountain ranges around the world.
                    </p>
                </div>

                <!-- Mountains background -->
                <div class="relative mt-6 lg:mt-10">
                    <img
                        src="/mountains-01-1-1.png"
                        alt="Mountains"
                        class="w-full h-auto object-cover"
                        loading="lazy"
                    />

                    <!-- Two product preview images (the missing ones) -->
                    <img
                        src="/-mg-2759-copy-removebg-preview-2.png"
                        alt="Product showcase"
                        class="absolute hidden lg:block w-[220px] xl:w-[260px] 2xl:w-[293px] h-auto object-contain left-[20%] xl:left-[23%] 2xl:left-[22.5%] top-[38%] lg:top-[10%]"
                        loading="lazy"
                    />

                    <img
                        src="/-mg-2759-copy-removebg-preview-2.png"
                        alt="Product showcase"
                        class="absolute hidden lg:block w-[220px] xl:w-[260px] 2xl:w-[293px] h-auto object-contain right-[20%] xl:right-[23%] 2xl:right-[22.5%] top-[38%] lg:top-[10%]"
                        loading="lazy"
                    />

                    <!-- Select your size button - placed on the mountain -->
                    <div
                        class="absolute left-1/2 -translate-x-1/2 top-[2%] lg:top-[56%] xl:top-[56%] z-20"
                    >
                        <button
                            class="group flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-1 sm:py-1 rounded-full border-[1.4px] border-black bg-white/90 backdrop-blur-sm hover:bg-white hover:border-black/80 transition-all duration-300 shadow-md"
                        >
                            <svg
                                class="w-5 h-7 sm:w-6 sm:h-9 rotate-90 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <span
                                class="font-poppins font-medium text-black text-sm sm:text-[13px] tracking-[-0.4px]"
                            >
                                Select your size
                            </span>
                        </button>
                    </div>

                    <!-- Size indicators - smaller, closer to original proportions -->
                    <div
                        class="absolute bottom-[10%] lg:bottom-[11%] left-1/2 -translate-x-1/2 flex items-end justify-center gap-2 sm:gap-2 lg:gap-6 xl:gap-6 z-20"
                    >
                        <div
                            v-for="option in sizeOptions"
                            :key="option.label"
                            class="flex flex-col items-center"
                        >
                            <img
                                :src="option.image"
                                :alt="`${option.label} size`"
                                class="w-[34px] sm:w-[38px] lg:w-[38px] xl:w-[42px] h-auto object-contain drop-shadow-sm"
                                loading="lazy"
                            />
                            <span
                                class="mt-1.5 lg:mt-2 font-poppins font-light text-black text-[10px] sm:text-xs lg:text-[11.6px] tracking-[-0.58px]"
                            >
                                {{ option.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface SizeOption {
    label: string;
    image: string;
}

const sizeOptions: SizeOption[] = [
    { label: "25g", image: "/group-67.png" },
    { label: "45g", image: "/group-66.png" },
    { label: "65g", image: "/group-64.png" },
    { label: "100g", image: "/group-65.png" },
];
</script>
