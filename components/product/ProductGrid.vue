<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-12 md:py-16 lg:py-20">
            <div class="text-center">
                <h2
                    class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Our Shilajit Products
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                    Pure Himalayan Shilajit Resin – Choose your perfect size
                </p>
            </div>

            <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    @open-contact="emit('open-contact')"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductCard from "./ProductCard.vue";

defineProps<{
    products: Product[];
}>();

defineEmits<{
    "open-contact": [];
}>();
</script>
