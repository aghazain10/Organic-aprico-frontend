<template>
    <div class="relative w-full bg-white min-h-screen">
        <div class="relative w-full overflow-hidden">
            <AppNavigation />

            <img
                class="absolute top-[467px] right-0 w-[442px] h-[1291px] pointer-events-none hidden lg:block"
                alt="Bg"
                src="/bg-01-1.png"
            />

            <img
                class="absolute top-[719px] left-0.5 w-[285px] h-[779px] pointer-events-none hidden lg:block"
                alt="Bg"
                src="/bg-01-3.png"
            />

            <main class="relative w-full">
                <slot />
            </main>

            <img
                class="absolute bottom-[860px] right-0 w-[308px] h-[860px] pointer-events-none hidden lg:block"
                alt="Bg"
                src="/bg-01-2.png"
            />

            <AppFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppNavigation from "~/components/AppNavigation.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>
