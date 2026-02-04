<template>
  <nav class="relative w-full h-[91px] flex justify-center bg-white z-10">
    <div class="mt-5 w-full max-w-[1310px] px-4 flex items-start justify-between">
      <img
        class="w-[127px] h-[51px]"
        alt="Rectangle"
        src="/rectangle-31.png"
      />

      <div class="hidden md:flex items-center gap-[86px] mt-[7px]">
        <button
          v-for="(item, index) in navigationItems"
          :key="index"
          :class="[
            'h-[29px] font-poppins font-normal text-[#355e3b] text-lg tracking-[0.72px] leading-[normal] hover:opacity-80 transition-opacity',
            item.width
          ]"
        >
          {{ item.label }}
        </button>
      </div>

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
</template>

<script setup lang="ts">
const navigationItems = [
  { label: 'SHOP', width: 'w-[51px]' },
  { label: 'CERTIFICATES', width: 'w-[126px]' },
  { label: 'PURIFICATION PLANT', width: 'w-[193px]' },
  { label: 'WHOLESALE', width: 'w-[108px]' },
  { label: 'ABOUT', width: 'w-[65px]' },
]
</script>
