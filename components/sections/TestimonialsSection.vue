<template>
    <section class="relative w-full bg-white overflow-hidden py-12 lg:py-32">
        <div class="relative max-w-[1440px] mx-auto px-4">
            <!-- Decorative vectors (visible only on desktop, repositioned slightly for better overflow handling) -->
            <img
                class="hidden lg:block absolute -top-32 -left-48 w-[300px] h-auto pointer-events-none"
                alt="Vector"
                src="/vector.svg"
            />
            <img
                class="hidden lg:block absolute -top-48 -left-64 w-[200px] h-auto pointer-events-none"
                alt="Vector"
                src="/vector-1.svg"
            />

            <!-- Main heading -->
            <div class="text-center mb-12 lg:mb-20">
                <h2
                    class="inline-block font-oswald font-normal text-[40px] lg:text-[55.9px] tracking-[0.94px] lg:tracking-[1.68px]"
                >
                    <span class="font-medium text-[#f7ba00]">Our</span>
                    <span
                        class="font-medium text-[#f7ba00] text-[56px] lg:text-[59.7px]"
                        >8</span
                    >
                    <span class="font-medium text-[#f7ba00]"
                        >-Steps<br class="lg:hidden"
                    /></span>
                    <span
                        class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b]"
                    >
                        Purification Process
                    </span>
                </h2>

                <p
                    class="font-poppins font-normal text-black text-base lg:text-[17.1px] tracking-[0.68px] leading-relaxed mt-8 max-w-[690px] mx-auto"
                >
                    Every batch goes through a carefully controlled,
                    chemical-free purification method designed to ensure maximum
                    purity, safety, and mineral richness. Our 8-step process
                    guarantees consistent, high-quality Shilajit you can trust.
                </p>
            </div>

            <!-- Subheading (assumed completion; changed to dark text as white on white bg doesn't make sense) -->
            <h3
                class="text-center font-oswald font-semibold text-[#355e3b] text-4xl lg:text-5xl mt-16 lg:mt-24 mb-16 lg:mb-32"
            >
                How Can Shilajit Be So Pure?
            </h3>

            <!-- Process Steps - Responsive zigzag layout -->
            <div class="space-y-24 lg:space-y-48">
                <div
                    v-for="(step, index) in processSteps"
                    :key="index"
                    class="flex flex-col gap-12 lg:gap-24 items-center"
                    :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
                >
                    <!-- Text Content -->
                    <div
                        class="relative w-full lg:w-1/2 text-center lg:text-left"
                        :class="{ 'lg:text-right': index % 2 === 1 }"
                    >
                        <!-- Big faded number (overlaps toward the image on desktop) -->
                        <div
                            class="absolute top-1/2 -translate-y-1/2 pointer-events-none text-[#f7ba00] font-epilogue font-extrabold opacity-20"
                            :class="[
                                'text-[100px] lg:text-[173px]',
                                step.numberSize ? `lg:${step.numberSize}` : '',
                                step.numberTracking
                                    ? `lg:${step.numberTracking}`
                                    : '',
                                step.numberLeading
                                    ? `lg:${step.numberLeading}`
                                    : '',
                                index % 2 === 0
                                    ? 'right-0 lg:-right-12'
                                    : 'left-0 lg:-left-12',
                            ]"
                        >
                            {{ step.number }}
                        </div>

                        <div class="relative z-10">
                            <div
                                class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[36px] lg:text-[40.3px] tracking-[0.40px] leading-tight"
                            >
                                Step
                            </div>

                            <div
                                class="font-poppins font-bold text-black text-xl lg:text-sm mt-4 lg:mt-6 max-w-[300px] mx-auto lg:mx-0"
                            >
                                {{ step.title }}
                            </div>

                            <div
                                class="font-poppins font-normal text-black text-base lg:text-[15.5px] tracking-[0.62px] leading-relaxed mt-6 lg:mt-8 max-w-[300px] mx-auto lg:mx-0"
                            >
                                <template
                                    v-if="typeof step.description === 'string'"
                                >
                                    {{ step.description }}
                                </template>
                                <template v-else>
                                    <span>High-altitude </span>
                                    <span class="font-bold">Shilajit</span>
                                    <span>
                                        is sourced directly from the mountains
                                        to maintain purity from the very
                                        beginning.</span
                                    >
                                </template>
                            </div>
                        </div>
                    </div>

                    <!-- Image / Card -->
                    <div class="relative w-full lg:w-1/2">
                        <Card
                            class="w-full h-[300px] lg:h-[283px] bg-[#d9d9d9] rounded-[12px] shadow-lg border-0"
                        >
                            <CardContent class="p-0 w-full h-full" />
                        </Card>

                        <!-- Per-step decor image (example for step 1; adjust/add as needed) -->
                        <img
                            v-if="step.decorSrc"
                            class="hidden lg:block absolute"
                            :class="[
                                step.decorTop || 'top-full',
                                step.decorLeft || 'left-1/2',
                                step.decorWidth,
                                step.decorHeight,
                            ]"
                            alt="Objects"
                            :src="step.decorSrc"
                        />
                    </div>
                </div>
            </div>

            <!-- Bottom decorative images (desktop only) -->
            <img
                class="hidden lg:block absolute bottom-0 right-0 w-[344px] h-[357px] pointer-events-none"
                alt="Objects"
                src="/objects.svg"
            />
            <img
                class="hidden lg:block absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[515px] h-[250px] pointer-events-none"
                alt="Group"
                src="/group-75.png"
            />
            <img
                class="hidden lg:block absolute top-0 right-0 w-[401px] h-full pointer-events-none"
                alt="Bg"
                src="/bg-01-3-1.png"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from "~/components/ui/Card.vue";
import CardContent from "~/components/ui/CardContent.vue";

const processSteps = [
    {
        number: "1",
        title: "Raw Shilajit Collection",
        description: null, // Triggers the special multi-span description
        numberSize: "text-[201.7px]",
        numberTracking: "tracking-[2.02px]",
        numberLeading: "leading-[256.0px]",
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
    },
    {
        number: "3",
        title: "Low-Heat Extraction",
        description:
            "Gentle heating preserves minerals without burning or damaging nutrients.",
        numberSize: "text-[173px]",
        numberTracking: "tracking-[1.73px]",
        numberLeading: "leading-[219.6px]",
    },
    // Add remaining steps here with similar structure when ready
];
</script>
