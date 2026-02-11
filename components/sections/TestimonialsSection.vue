<template>
    <section
        class="relative w-full bg-gradient-to-b from-white via-stone-50 to-white py-16 lg:py-28 overflow-hidden"
    >
        <div class="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <!-- Soft background blobs -->
            <div class="absolute inset-0 pointer-events-none">
                <div
                    class="absolute -top-20 -left-20 w-80 h-80 bg-amber-50/50 rounded-full blur-3xl"
                ></div>
                <div
                    class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl"
                ></div>
            </div>

            <!-- Heading -->
            <div class="text-center mb-14 lg:mb-20 relative z-10">
                <h2
                    class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                >
                    <span class="text-amber-600 font-semibold">Our 8-Step</span>
                    <span
                        class="text-emerald-800 font-semibold block sm:inline"
                    >
                        Purification Process</span
                    >
                </h2>
                <p
                    class="mt-5 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    From high Himalayan peaks to your hands — gently purified,
                    naturally, without chemicals.
                </p>
            </div>

            <!-- Steps -->
            <div class="relative mt-10 lg:mt-16">
                <div
                    class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 relative z-10"
                >
                    <div
                        v-for="(step, index) in visibleSteps"
                        :key="index"
                        class="group relative bg-white rounded-2xl shadow-sm shadow-slate-200/60 border border-slate-100/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-slate-300/40 hover:-translate-y-1"
                    >
                        <!-- Step number – top left corner of the whole card -->
                        <div class="absolute top-4 left-4 z-20">
                            <div
                                class="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-600/30 border-2 border-white"
                            >
                                <span class="text-white text-xl font-bold">{{
                                    step.number
                                }}</span>
                            </div>
                        </div>

                        <!-- Image container – centered image -->
                        <div
                            class="h-48 sm:h-56 lg:h-60 relative bg-slate-50 flex items-center justify-center overflow-hidden"
                        >
                            <img
                                :src="step.image"
                                :alt="step.title"
                                class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <!-- Text content -->
                        <div class="p-6 sm:p-7 pt-6 text-center">
                            <h3
                                class="text-lg sm:text-xl font-semibold text-emerald-900 mb-3"
                            >
                                {{ step.title }}
                            </h3>
                            <p
                                class="text-slate-600 text-sm sm:text-[15.2px] leading-relaxed"
                            >
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="mt-16 lg:mt-24 text-center relative z-10">
                    <a
                        href="/purification-process"
                        class="inline-flex items-center gap-3 px-8 py-5 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-full text-lg transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5"
                    >
                        See the Complete 8-Step Journey
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const visibleSteps = [
    {
        number: "1",
        title: "High-Altitude Collection",
        description:
            "Raw Shilajit is sustainably hand-harvested from pristine Himalayan regions above 14,000 ft.",
        image: "/shilajit.png",
    },
    {
        number: "2",
        title: "Gentle Washing & Filtering",
        description:
            "Natural mountain water and multi-stage filtration remove dirt, rocks and impurities.",
        image: "/shilajit.png",
    },
    {
        number: "3",
        title: "Low-Temperature Extraction",
        description:
            "Careful slow heating preserves fulvic acid, minerals and heat-sensitive compounds.",
        image: "/shilajit.png",
    },
];
</script>
