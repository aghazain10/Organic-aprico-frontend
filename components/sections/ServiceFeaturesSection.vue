<template>
    <section class="relative w-full bg-white overflow-hidden pt-20 pb-20">
        <div class="container mx-auto px-4 max-w-[1450px]">
            <div class="relative">
                <div>
                    <div
                        class="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:gap-12"
                    >
                        <div
                            class="flex flex-col items-center lg:items-start lg:gap-12"
                        >
                            <div class="text-center lg:text-left w-full">
                                <h3
                                    class="font-oswald font-medium text-[#f7ba00] text-4xl md:text-5xl tracking-[0] leading-[normal] -mb-30 lg:-mb-20"
                                >
                                    You Should Know
                                </h3>

                                <div
                                    class="flex flex-col md:flex-row md:items-end md:gap-8 md:justify-between w-full"
                                >
                                    <h2
                                        class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[40px] md:text-[55px] lg:text-[64px] tracking-[0] leading-tight"
                                    >
                                        What is Shilajit
                                    </h2>
                                    <span
                                        class="font-golos font-extrabold text-[#f7ba00] text-[70px] md:text-[110px] lg:text-[145px] tracking-[0] leading-[normal]"
                                    >
                                        ?
                                    </span>
                                </div>
                            </div>

                            <div
                                class="lg:pt-8 w-full flex justify-center lg:justify-start"
                            >
                                <img
                                    class="w-full max-w-[491px] h-auto"
                                    alt="Mg copy"
                                    src="/shilajit.png"
                                />
                            </div>
                        </div>

                        <div
                            class="relative flex justify-center lg:justify-end mb-0 lg:mb-[-200px] relative z-20"
                        >
                            <Card
                                class="w-full max-w-full lg:max-w-[679px] bg-[#355e3be6] rounded-[15px] shadow-[-11px_0px_24px_#00000029,-44px_0px_44px_#00000024,-99px_0px_59px_#00000014,-176px_0px_70px_#00000005,-275px_0px_77px_transparent] border-0"
                            >
                                <CardContent
                                    class="p-8 lg:p-12 space-y-6 lg:space-y-8"
                                >
                                    <p
                                        class="font-poppins font-light text-white text-base lg:text-lg tracking-[0] leading-relaxed"
                                    >
                                        Shilajit Is A Natural Substance That
                                        Forms Over Centuries From The Slow
                                        Decomposition Of Plants, Herbs, And
                                        Organic Matter In High-altitude Mountain
                                        Ranges Such As The Himalayas Gilgit
                                        Baltistan. Raw Shilajit Is Found In Rock
                                        Form And Contains Many Impurities. To
                                        Make It Consumable, It Goes Through An
                                        8-stage Ultra-filtration And
                                        Purification Process And Over 40 Days Of
                                        Direct Sunlight Dehydration, Supported
                                        By Both Traditional Practices And
                                        Scientific Methods. This Process Removes
                                        Arsenic, Heavy Metals, Bacteria, Fungi,
                                        And Other Impurities, Making It Safe For
                                        Human Consumption.
                                    </p>
                                    <p
                                        class="font-poppins font-light text-white text-base lg:text-lg tracking-[0] leading-relaxed"
                                    >
                                        After Purification, Shilajit Becomes A
                                        Dark, Sticky Resin Rich In Fulvic Acid,
                                        Humic Acid, Bioactive Compounds, And
                                        More Than 85 Minerals. In The Global
                                        Market, Most Available Shilajit Is
                                        Sourced From Lower Altitudes, Processed
                                        With Outdated Filtration Methods, And
                                        Often Mixed With Additives That
                                        Compromise Its Safety And Potency.
                                        Organic Aprico Is A Native Producer,
                                        While Most Others Are Sellers Or
                                        Resellers, Making It Difficult For
                                        Consumers To Identify Genuine Sources.
                                        Organic Aprico, Based In
                                        Gilgit-baltistan, Operates A Scientific
                                        8-stage Ultrafiltration And Purification
                                        Facility.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div class="relative z-10 mt-12 lg:mt-0">
                        <img
                            class="w-full h-auto object-cover max-h-[300px] md:max-h-[429px]"
                            alt="Mountains"
                            src="/mountains-01-1.png"
                        />
                    </div>
                </div>

                <div
                    class="flex flex-col md:flex-row justify-center gap-8 mt-16 relative z-30"
                >
                    <Button
                        v-for="(button, index) in buttonData"
                        :key="index"
                        variant="ghost"
                        class="relative w-full md:w-[231.2px] h-[50px] md:h-[61.86px] p-0 hover:bg-transparent"
                    >
                        <img
                            class="absolute inset-0 w-full h-full object-contain"
                            alt="Button background"
                            :src="button.backgroundImage"
                        />
                        <span
                            class="relative z-10 [text-shadow:0px_3.17px_3.17px_#00000040] font-poppins font-normal text-[#1f1c1c] text-[15px] md:text-[15.9px] tracking-[0.63px] leading-[normal]"
                        >
                            {{ button.text }}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import Card from "~/components/ui/Card.vue";
import CardContent from "~/components/ui/CardContent.vue";

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
</script>
