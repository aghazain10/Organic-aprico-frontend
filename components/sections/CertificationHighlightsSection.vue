<template>
  <section class="relative w-full bg-white py-[60px] px-4">
    <div class="relative max-w-[1440px] mx-auto">
      <div class="flex flex-col items-center max-w-[898px] mx-auto mb-[46px]">
        <h2 class="font-oswald font-semibold text-[#f7ba00] text-5xl tracking-[2.88px] leading-[normal] whitespace-nowrap text-center">
          100% Pure, Naturally Powerful
        </h2>

        <h3 class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[64px] tracking-[-0.64px] leading-[normal] mt-[17px] text-center">
          Certified like no others
        </h3>

        <p class="font-poppins font-normal text-black text-[27.9px] text-center tracking-[1.12px] leading-[normal] mt-[39.6px] max-w-[892px]">
          Certified to the highest global standards (GMP, ISO 9001, IFS), our
          Shilajit delivers genuine purity and unmatched authenticity. When it
          comes to quality, we never compromise neither should you.
        </p>
      </div>

      <div class="relative flex justify-center mb-[367px]">
        <img
          class="w-full max-w-[1079px] h-auto object-cover"
          alt="License"
          src="/license-1.png"
        />
      </div>

      <div class="flex flex-col items-center gap-[18px] relative z-10">
        <Button class="relative w-[344px] h-[73px] bg-transparent hover:bg-transparent p-0 border-0">
          <img
            class="absolute inset-0 w-full h-full"
            alt="Rectangle"
            src="/rectangle-2-1.svg"
          />
          <span class="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] font-poppins font-normal text-white text-[17.4px] tracking-[0.70px] leading-[normal]">
            See Laboratory Result
          </span>
        </Button>

        <Button class="relative w-[254px] h-[68px] bg-transparent hover:bg-transparent p-0 border-0">
          <img
            class="absolute inset-0 w-full h-full"
            alt="Rectangle"
            src="/rectangle-3.svg"
          />
          <span class="relative z-10 [text-shadow:0px_3.49px_3.49px_#00000040] font-poppins font-normal text-[#1f1c1c] text-[17.4px] tracking-[0.70px] leading-[normal]">
            See Cetificates
          </span>
        </Button>
      </div>

      <img
        class="absolute top-[592px] right-0 w-[495px] h-[829px] pointer-events-none"
        alt="Bg"
        src="/bg-01-1-1.png"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
</script>
