<template>
    <div
        class="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-amber-200"
    >
        <!-- Image -->
        <div
            class="relative aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100"
        >
            <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-contain p-6 transition-transform group-hover:scale-105"
                loading="lazy"
            />

            <!-- Badge (e.g. bestseller, popular) -->
            <span
                v-if="product.badge"
                class="absolute left-3 top-3 rounded-full bg-amber-500 px-2.5 py-1 text-xs font-medium text-white"
            >
                {{ product.badge }}
            </span>
        </div>

        <!-- Content -->
        <div class="flex flex-1 flex-col p-5">
            <h3 class="mb-1 text-lg font-semibold text-gray-900 line-clamp-2">
                {{ product.name }}
            </h3>

            <p
                v-if="product.description"
                class="mb-4 text-sm text-gray-600 line-clamp-3"
            >
                {{ product.description }}
            </p>

            <!-- Price / Custom -->
            <div class="mt-auto flex items-end justify-between">
                <div
                    v-if="product.isCustom"
                    class="text-sm font-medium text-gray-700"
                >
                    Custom quantity • Get in touch
                </div>
                <div v-else class="text-xl font-bold text-amber-700">
                    {{ formatPrice(product.price) }}
                    <span class="text-sm font-normal text-gray-500">/jar</span>
                </div>

                <!-- Action -->
                <button
                    v-if="product.isCustom"
                    @click="emit('open-contact')"
                    class="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                    Contact Us
                </button>
                <button
                    v-if="!props.product.isCustom"
                    @click="cart.addItem(props.product)"
                    class="rounded-full border border-amber-600 px-5 py-2.5 text-sm font-medium text-amber-700 transition hover:bg-amber-50 hover:text-amber-800"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import type { Product } from "~/types/product"; // ← make sure this file exists

const props = defineProps<{
    product: Product;
}>();

const emit = defineEmits<{
    (e: "open-contact"): void;
}>();

const cart = useCartStore();

const formatPrice = (price: number | undefined) => {
    if (price === undefined) return "—"; // or '$0.00' or throw error, etc.
    return `$${price.toFixed(2)}`;
};
</script>
