<template>
    <section class="relative w-full bg-white py-16 px-4">
        <img
            class="absolute top-0 left-0 w-full max-w-[970px] h-auto object-cover"
            alt="Background decoration"
            src="/bg-01-2-1.png"
        />

        <div class="relative max-w-7xl mx-auto">
            <div class="text-center mb-12">
                <h2
                    class="font-oswald font-medium text-[#f7ba00] text-5xl tracking-[0] leading-normal mb-4"
                >
                    BENEFITS OF
                </h2>
                <h3
                    class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[64px] tracking-[0] leading-normal"
                >
                    Organic Aprico Shilajeet
                </h3>
            </div>

            <div class="space-y-16 mt-20">
                <Card
                    v-for="(benefit, index) in benefitsData"
                    :key="index"
                    class="border-0 shadow-none bg-transparent"
                >
                    <CardContent class="p-0">
                        <div
                            :class="[
                                'flex flex-col md:flex-row items-center gap-8',
                                benefit.imagePosition === 'right'
                                    ? 'md:flex-row-reverse'
                                    : '',
                            ]"
                        >
                            <div
                                class="w-full md:w-[403px] h-[319px] rounded-[15px] bg-[#d9d9d9] flex-shrink-0"
                            />

                            <div
                                :class="[
                                    'flex-1',
                                    benefit.imagePosition === 'right'
                                        ? 'md:text-right'
                                        : '',
                                ]"
                            >
                                <h4
                                    class="font-oswald font-medium text-[#f7ba00] text-[44px] tracking-[0] leading-normal mb-6"
                                >
                                    {{ benefit.title }}
                                </h4>
                                <p
                                    class="font-oswald font-extralight text-black text-2xl tracking-[0] leading-normal max-w-[697px]"
                                >
                                    {{ benefit.description }}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div class="flex justify-center mt-20">
                <Button
                    variant="outline"
                    class="w-[459px] h-[77px] bg-white rounded-[111px] border-2 border-solid border-black hover:bg-gray-50"
                >
                    <span
                        class="font-poppins font-normal text-black text-[35px] tracking-[-1.40px] leading-normal"
                    >
                        See More Benefits
                    </span>
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import Card from "~/components/ui/Card.vue";
import CardContent from "~/components/ui/CardContent.vue";

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
</script>
