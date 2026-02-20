<template>
    <nav class="relative w-full h-[91px] flex justify-center bg-white z-10">
        <div
            class="mt-5 w-full max-w-[1310px] px-4 flex items-start justify-between"
        >
            <img
                class="w-[127px] h-[51px]"
                alt="Logo"
                src="/rectangle-31.png"
            />

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center gap-[86px] mt-[7px]">
                <a
                    v-for="(item, index) in navigationItems"
                    :key="index"
                    :href="item.link"
                    :class="[
                        'h-[29px] font-poppins font-normal text-[#355e3b] text-lg tracking-[0.72px] leading-[normal] hover:opacity-80 transition-opacity',
                        item.width,
                    ]"
                >
                    {{ item.label }}
                </a>
            </div>

            <!-- Icons (Search, Profile, Cart) -->
            <div class="flex items-center gap-6 mt-1">
                <!-- Search Icon (placeholder) -->
                <button
                    class="text-[#355e3b] hover:text-[#355e3b]/80 transition-colors p-1"
                    aria-label="Search"
                >
                    <svg
                        class="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

                <!-- Profile Icon (placeholder) -->
                <button
                    class="text-[#355e3b] hover:text-[#355e3b]/80 transition-colors p-1"
                    aria-label="Profile"
                >
                    <svg
                        class="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </button>

                <!-- Cart Icon + Badge -->
                <button
                    @click="isCartOpen = true"
                    class="relative text-[#355e3b] hover:text-[#355e3b]/80 transition-colors p-1"
                    aria-label="Shopping Cart"
                >
                    <svg
                        class="w-7 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>

                    <span
                        v-if="cart.totalItems > 0"
                        class="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] font-medium flex items-center justify-center px-1"
                    >
                        {{ cart.totalItems }}
                    </span>
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-[#355e3b] p-2">
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    </nav>

    <!-- Cart Modal / Slide-in Drawer -->
    <div
        v-if="isCartOpen"
        class="fixed inset-0 z-50 overflow-hidden"
        @click.self="isCartOpen = false"
    >
        <!-- Backdrop / Overlay -->
        <div
            class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            @click="isCartOpen = false"
        ></div>

        <!-- Drawer Panel (slides from right) -->
        <div
            class="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0"
            :class="{ 'translate-x-full': !isCartOpen }"
        >
            <div class="flex flex-col h-full">
                <!-- Header -->
                <div class="flex items-center justify-between p-6 border-b">
                    <h2 class="text-xl font-semibold text-gray-900">
                        Your Cart
                    </h2>
                    <button
                        @click="isCartOpen = false"
                        class="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <!-- Cart Content -->
                <div class="flex-1 overflow-y-auto p-6">
                    <CartSection />
                </div>

                <!-- Footer / Actions (optional – can move totals here if you prefer) -->
                <div class="p-6 border-t">
                    <button
                        class="w-full py-4 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import CartSection from "~/components/sections/CartSection.vue";
const cart = useCartStore();

const isCartOpen = ref(false);

const navigationItems = [
    { label: "SHOP", width: "w-[51px]", link: "/shop" },
    { label: "CERTIFICATES", width: "w-[126px]", link: "/certificates" },
    {
        label: "PURIFICATION PLANT",
        width: "w-[193px]",
        link: "/purification-plant",
    },
    { label: "WHOLESALE", width: "w-[108px]", link: "/wholesale" },
    { label: "ABOUT", width: "w-[65px]", link: "/about" },
];
</script>
