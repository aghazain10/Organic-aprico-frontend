<template>
    <section class="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 class="text-3xl font-bold text-gray-900">Your Cart</h2>

        <div
            v-if="cart.items.length === 0"
            class="mt-6 text-center text-gray-600"
        >
            Your cart is empty.
            <p class="mt-2 text-sm">
                <NuxtLink to="/" class="text-amber-600 hover:underline">
                    Continue shopping →
                </NuxtLink>
            </p>
        </div>

        <div v-else class="mt-8 space-y-6">
            <!-- Cart Items -->
            <div
                v-for="item in cart.items"
                :key="item.id"
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-6 last:border-b-0"
            >
                <!-- Product Info -->
                <div class="flex items-center gap-4 flex-1 min-w-0">
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="h-20 w-20 sm:h-24 sm:w-24 object-contain rounded-md bg-gray-50 border border-gray-100"
                        loading="lazy"
                    />
                    <div class="min-w-0">
                        <h3 class="font-semibold text-gray-900 truncate">
                            {{ item.name }}
                        </h3>
                        <p class="mt-1 text-sm text-gray-600">
                            {{ formatPrice(item.price ?? 0) }}
                        </p>
                    </div>
                </div>

                <!-- Quantity Controls + Remove -->
                <div
                    class="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto"
                >
                    <!-- Quantity -->
                    <div
                        class="flex items-center border border-gray-300 rounded-md overflow-hidden"
                    >
                        <button
                            type="button"
                            @click="decrementQuantity(item)"
                            :disabled="item.quantity <= 1"
                            class="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            −
                        </button>

                        <input
                            type="number"
                            v-model.number="item.quantity"
                            min="1"
                            class="w-16 text-center border-x border-gray-300 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            @change="
                                cart.updateQuantity(item.id, item.quantity)
                            "
                        />

                        <button
                            type="button"
                            @click="incrementQuantity(item)"
                            class="px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                        >
                            +
                        </button>
                    </div>

                    <!-- Subtotal for this item + Remove -->
                    <div class="text-right min-w-[100px]">
                        <p class="font-medium text-gray-900">
                            {{ formatPrice((item.price ?? 0) * item.quantity) }}
                        </p>
                        <button
                            @click="cart.removeItem(item.id)"
                            class="mt-1 text-sm text-red-600 hover:text-red-800"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <!-- Summary -->
            <div class="pt-6 border-t border-gray-200">
                <div class="flex justify-between text-lg">
                    <span class="font-medium text-gray-700">Subtotal</span>
                    <span class="font-medium text-gray-900">{{
                        formatPrice(cart.subtotal)
                    }}</span>
                </div>
                <div
                    v-if="cart.total !== cart.subtotal"
                    class="flex justify-between mt-2 text-lg"
                >
                    <span class="font-medium text-gray-700"
                        >Total (incl. tax)</span
                    >
                    <span class="font-bold text-gray-900">{{
                        formatPrice(cart.total)
                    }}</span>
                </div>

                <button
                    class="mt-6 w-full sm:w-auto px-8 py-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors shadow-sm"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();
console.log("CartSection mounted - items count:", cart.items.length);
watch(
    () => cart.items.length,
    (newLen) => {
        console.log("Cart items changed to:", newLen);
    },
);

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

// Helper methods for cleaner template
const incrementQuantity = (item: any) => {
    cart.updateQuantity(item.id, item.quantity + 1);
};

const decrementQuantity = (item: any) => {
    if (item.quantity > 1) {
        cart.updateQuantity(item.id, item.quantity - 1);
    }
};
</script>

<style scoped>
/* Hide number input arrows in most browsers */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
