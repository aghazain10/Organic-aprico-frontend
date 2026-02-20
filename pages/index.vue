<template>
    <div>
        <HeroIntroSection />
        <ServiceFeaturesSection />
        <CertificationHighlightsSection />

        <!-- NEW: Shilajit Products Section -->
        <ProductGrid
            :products="shilajitProducts"
            @open-contact="openContactModal = true"
        />
        <CartSection />
        <BenefitsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <PricingComparisonSection />
        <CallToActionSection />

        <!-- Optional: Contact Modal (placeholder) -->
        <teleport to="body">
            <div
                v-if="openContactModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            >
                <div
                    class="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl"
                >
                    <button
                        @click="openContactModal = false"
                        class="absolute right-5 top-5 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                    <h3 class="text-2xl font-bold text-gray-900">
                        Custom Shilajit Order
                    </h3>
                    <p class="mt-3 text-gray-600">
                        Tell us how much Shilajit you need (grams) and any
                        special requests.
                    </p>
                    <!-- Add real form here (use <ContactForm /> or similar) -->
                    <div class="mt-6 space-y-4">
                        <textarea
                            rows="4"
                            placeholder="Your message..."
                            class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-amber-500 focus:ring-amber-500"
                        ></textarea>
                        <button
                            class="w-full rounded-lg bg-amber-600 py-3 font-medium text-white hover:bg-amber-700"
                        >
                            Send Request
                        </button>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import HeroIntroSection from "~/components/sections/HeroIntroSection.vue";
import ServiceFeaturesSection from "~/components/sections/ServiceFeaturesSection.vue";
import CertificationHighlightsSection from "~/components/sections/CertificationHighlightsSection.vue";
import BenefitsSection from "~/components/sections/BenefitsSection.vue";
import TestimonialsSection from "~/components/sections/TestimonialsSection.vue";
import HowItWorksSection from "~/components/sections/HowItWorksSection.vue";
import PricingComparisonSection from "~/components/sections/PricingComparisonSection.vue";
import CallToActionSection from "~/components/sections/CallToActionSection.vue";

// NEW imports
import ProductGrid from "~/components/product/ProductGrid.vue";
import type { Product } from "~/types/product";
import CartSection from "~/components/sections/CartSection.vue";

const openContactModal = ref(false);

const shilajitProducts = ref<Product[]>([
    {
        id: "sh-10",
        name: "Shilajit Resin 10g",
        image: "/shilajit.jpg", // ← replace with real paths
        price: 29.99,
        description: "Perfect trial size • ~1 month supply",
        badge: "Starter",
    },
    {
        id: "sh-20",
        name: "Shilajit Resin 20g",
        image: "/shilajit.jpg",
        price: 49.99,
        description: "Most popular • ~2 months supply",
        badge: "Best Seller",
    },
    {
        id: "sh-30",
        name: "Shilajit Resin 30g",
        image: "/shilajit.jpg",
        price: 69.99,
        description: "Best value • ~3 months supply",
    },
    {
        id: "sh-custom",
        name: "Custom Shilajit",
        image: "/products/shilajit-custom.png",
        description: "Need a different amount? Let's make it perfect for you.",
        isCustom: true,
    },
]);
</script>
