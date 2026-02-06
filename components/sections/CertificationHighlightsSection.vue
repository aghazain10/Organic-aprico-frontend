<template>
    <section class="relative w-full bg-white py-[60px] px-4 overflow-hidden">
        <div class="relative max-w-[1440px] mx-auto">
            <div
                class="flex flex-col items-center max-w-[898px] mx-auto mb-[46px]"
            >
                <h2
                    class="font-oswald font-semibold text-[#f7ba00] text-4xl lg:text-5xl tracking-[1.44px] lg:tracking-[2.88px] leading-[normal] text-center whitespace-normal lg:whitespace-nowrap"
                >
                    100% Pure, Naturally Powerful
                </h2>

                <h3
                    class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[48px] lg:text-[64px] tracking-[-0.64px] leading-tight mt-4 lg:mt-[17px] text-center"
                >
                    Certified like no others
                </h3>

                <p
                    class="font-poppins font-normal text-black text-lg lg:text-[27.9px] text-center tracking-[0.56px] lg:tracking-[1.12px] leading-relaxed mt-8 lg:mt-[39.6px] max-w-[892px]"
                >
                    Certified to the highest global standards (GMP, ISO 9001,
                    IFS), our Shilajit delivers genuine purity and unmatched
                    authenticity. When it comes to quality, we never compromise
                    neither should you.
                </p>
            </div>

            <div class="relative flex justify-center mb-12 lg:mb-[367px]">
                <!-- Desktop horizontal licenses -->
                <img
                    class="w-full max-w-[1079px] h-auto object-cover hidden lg:block"
                    alt="License"
                    src="/license-1.png"
                />
                <!-- Mobile vertical icons -->
                <img
                    class="w-full max-w-[500px] h-auto object-contain block lg:hidden"
                    alt="Certificates Icons"
                    src="/icons.jpg"
                />
            </div>

            <div class="flex flex-col items-center gap-[18px] relative z-10">
                <Button
                    class="relative w-[300px] lg:w-[344px] h-[62px] lg:h-[73px] bg-transparent hover:bg-transparent p-0 border-0"
                >
                    <img
                        class="absolute inset-0 w-full h-full object-contain"
                        alt="Rectangle"
                        src="/rectangle-2-1.svg"
                    />
                    <span
                        class="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] font-poppins font-normal text-white text-[16px] lg:text-[17.4px] tracking-[0.70px] leading-[normal]"
                    >
                        See Laboratory Result
                    </span>
                </Button>

                <Button
                    class="relative w-[260px] lg:w-[254px] h-[58px] lg:h-[68px] bg-transparent hover:bg-transparent p-0 border-0"
                >
                    <img
                        class="absolute inset-0 w-full h-full object-contain"
                        alt="Rectangle"
                        src="/rectangle-3.svg"
                    />
                    <span
                        class="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] font-poppins font-normal text-[#1f1c1c] text-[16px] lg:text-[17.4px] tracking-[0.70px] leading-[normal]"
                    >
                        See Cetificates
                    </span>
                </Button>
            </div>

            <!-- Decorative background image – visible only on large screens -->
            <img
                class="absolute top-[592px] right-0 w-[495px] h-[829px] pointer-events-none hidden lg:block"
                alt="Bg"
                src="/bg-01-1-1.png"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
</script>
