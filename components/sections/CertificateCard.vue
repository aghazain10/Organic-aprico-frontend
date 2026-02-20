<template>
    <div
        class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 card-shadow"
    >
        <!-- Certificate Image -->
        <div class="relative h-48 bg-gray-100">
            <img
                :src="image"
                :alt="title"
                class="w-full h-full object-cover"
                loading="lazy"
            />
            <!-- Fallback if image fails to load -->
            <div
                v-if="!image"
                class="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"
            >
                <span class="text-sm">Certificate Icon</span>
            </div>
        </div>

        <!-- Content -->
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {{ title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ description }}
            </p>
            <!-- Download Button -->
            <NuxtLink :to="downloadLink" target="_blank" class="inline-block">
                <Button
                    label="View Certificate"
                    variant="secondary"
                    size="sm"
                    class="w-full text-green-600 border-green-600 hover:bg-green-50 transition-colors"
                />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    downloadLink: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
/* Custom styles for exact Figma alignment, e.g., rounded corners or spacing */
</style>
