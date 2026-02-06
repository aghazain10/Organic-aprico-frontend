<template>
    <section
        class="relative w-full bg-white px-4 md:px-8 lg:pl-16 lg:pr-0 h-auto"
    >
        <div class="relative max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div class="relative z-10">
                    <div class="relative">
                        <img
                            class="absolute -left-32 md:-left-18 top-3 w-[400px] md:w-[621px] h-auto opacity-90 -z-10"
                            alt="Green brush stroke"
                            src="/green-brush-stroke-01-1.png"
                        />

                        <div class="space-y-4 mt-12">
                            <h2
                                class="font-poppins font-bold text-[#355e3b] text-xl md:text-2xl lg:text-[25px] tracking-[1.00px]"
                            >
                                Organic Aprico® Original
                            </h2>

                            <h2
                                class="font-oswald font-bold text-[#f7ba00] text-4xl md:text-5xl lg:text-[65px] tracking-[1.30px] leading-tight lg:leading-[76.3px] pt-6"
                            >
                                SUPERIGNITE
                                <br />
                                INNER STRENGTH
                            </h2>

                            <p
                                class="font-poppins font-extralight text-black text-lg md:text-xl lg:text-[25px] tracking-[1.00px] leading-relaxed max-w-[519px] pt-10"
                            >
                                Discover the purest, lab tested Shilajit resin
                                ethically harvested from the world's highest
                                mountains and delivered to your doorstep.
                            </p>

                            <div class="pt-4">
                                <Button
                                    variant="outline"
                                    class="rounded-full border-[1.54px] border-[#487f50] bg-transparent hover:bg-[#487f50] hover:text-white text-[#233d27] font-poppins font-normal text-[15.4px] tracking-[0.62px] px-8 py-6 h-[59px] min-w-[213px]"
                                >
                                    SHOP NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative flex justify-center lg:justify-end">
                    <img
                        class="w-full max-w-[561px] h-auto object-contain"
                        alt="Download"
                        src="/man.png"
                    />
                </div>
                <img
                    class="absolute top-0 right-0 w-full max-w-[970px] h-auto object-cover"
                    alt="Background decoration"
                    src="/bg-01-3.png"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
</script>
