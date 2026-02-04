<template>
  <section class="relative w-full bg-white py-0">
    <div class="relative w-full h-[1680px] max-w-[1440px] mx-auto">
      <div class="absolute top-0 left-[calc(50.00%_-_173px)] w-[347px] font-oswald font-semibold text-[#f7ba00] text-5xl tracking-[0] leading-[normal]">
        How Can Shilajeet
      </div>

      <div class="absolute top-[25px] left-[calc(50.00%_-_241px)] w-[559px] h-[126px]">
        <div class="absolute top-7 left-[calc(50.00%_-_279px)] w-[528px] font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[58px] tracking-[-0.58px] leading-[normal]">
          Power Up Your Day
        </div>

        <div class="absolute top-0 left-[calc(50.00%_+_221px)] w-[54px] font-[Feeling_Passionate_Personal_Use-Regular] text-white text-[35.6px] tracking-[-0.36px] leading-[normal]">
          ?
        </div>
      </div>

      <div class="absolute top-[148px] left-[calc(50.00%_-_163px)] w-[325px] font-poppins font-normal text-black text-[11.7px] text-center tracking-[0.47px] leading-[normal]">
        Stay sharp at work with improved focus and reduced mental fatigue.
        Boost your performance in sports with enhanced energy and stamina.
        OrganicAprico® Shilajit gives you the natural edge you need to thrive
        from morning to night.
      </div>

      <img
        class="absolute top-[269px] left-[calc(50.00%_-_720px)] w-[1116px] h-[1190px]"
        alt="Runner"
        src="/runner.png"
      />

      <img
        class="absolute top-[102px] left-[1153px] w-[287px] h-[1287px]"
        alt="Bg"
        src="/bg-01-1-2.png"
      />

      <div class="absolute top-[1079px] left-[calc(50.00%_-_156px)] w-[255px] font-oswald font-bold text-[#f7ba00] text-[20.7px] tracking-[0] leading-[normal]">
        ORGANICAPRICO ORIGINAL IS
      </div>

      <div class="absolute top-[1103px] left-[calc(50.00%_-_235px)] w-[413px] font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[41.5px] tracking-[-0.41px] leading-[normal]">
        Pure Mountain Power
      </div>

      <div class="absolute top-[1167px] left-[calc(50.00%_-_340px)] w-[623px] font-poppins font-normal text-black text-[13px] text-center tracking-[0.52px] leading-[normal]">
        Shilajit is a naturally alkaline superfood packed with vital minerals,
        trace elements, and nourishing compounds. Formed over thousands of
        years by the pressure of ancient plant matter, it is one of
        nature's rarest resources — found only in a few high-altitude
        mountain ranges around the world.
      </div>

      <img
        class="absolute top-[1235px] left-0 w-[1440px] h-[445px]"
        alt="Mountains"
        src="/mountains-01-1-1.png"
      />

      <img
        class="absolute left-[324px] top-[1290px] w-[293px] h-[198px] object-cover"
        alt="Mg copy"
        src="/-mg-2759-copy-removebg-preview-2.png"
      />

      <img
        class="absolute left-[705px] top-[1290px] w-[293px] h-[198px] object-cover"
        alt="Mg copy"
        src="/-mg-2759-copy-removebg-preview-2.png"
      />

      <Button
        variant="outline"
        class="absolute top-[1521px] left-[573px] w-[185px] h-[52px] rounded-[28.5px] border-[1.3px] border-black bg-transparent hover:bg-transparent"
      >
        <div class="flex items-center gap-[10.8px]">
          <svg
            class="w-[14.9px] h-[27.08px] rotate-90 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span class="[-webkit-text-stroke:0.65px_#ffffff] font-poppins font-normal text-black text-[13px] tracking-[-0.65px] leading-[normal]">
            Select your size
          </span>
        </div>
      </Button>

      <div class="absolute top-[1584px] left-[554px] w-[244px] h-[65px]">
        <div v-for="(option, index) in sizeOptions" :key="index">
          <img
            :class="[
              'absolute',
              option.top,
              option.left,
              option.width,
              option.height
            ]"
            alt="Group"
            :src="option.image"
          />
          <div
            :class="[
              'absolute top-[49px] [-webkit-text-stroke:0.55px_#ffffff] font-poppins font-extralight text-black text-[11.6px] tracking-[-0.58px] leading-[normal]',
              option.textLeft
            ]"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

const sizeOptions = [
  {
    label: '25g',
    image: '/group-67.png',
    top: 'top-7',
    left: 'left-0',
    width: 'w-[38px]',
    height: 'h-[19px]',
    textLeft: 'left-[9px]',
  },
  {
    label: '45g',
    image: '/group-66.png',
    top: 'top-[21px]',
    left: 'left-[66px]',
    width: 'w-[38px]',
    height: 'h-[26px]',
    textLeft: 'left-[75px]',
  },
  {
    label: '65g',
    image: '/group-64.png',
    top: 'top-[13px]',
    left: 'left-[131px]',
    width: 'w-[38px]',
    height: 'h-[34px]',
    textLeft: 'left-[141px]',
  },
  {
    label: '100g',
    image: '/group-65.png',
    top: 'top-0',
    left: 'left-[197px]',
    width: 'w-[38px]',
    height: 'h-[47px]',
    textLeft: 'left-[207px]',
  },
]
</script>
