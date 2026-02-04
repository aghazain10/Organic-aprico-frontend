<template>
  <section class="relative w-full bg-white overflow-hidden py-6">
    <div class="relative w-full max-w-[1440px] mx-auto">
      <img
        class="w-[21.67%] h-[15.12%] absolute top-[-274.14%] left-[-42.08%]"
        alt="Vector"
        src="/vector.svg"
      />

      <img
        class="w-[6.81%] h-[4.81%] absolute top-[-274.14%] left-[-42.08%]"
        alt="Vector"
        src="/vector-1.svg"
      />

      <div class="absolute top-[23px] left-[calc(50.00%_-_308px)] w-[615px] font-oswald font-normal text-transparent text-[55.9px] text-center tracking-[1.68px] leading-[70.9px]">
        <span class="font-medium text-[#f7ba00] tracking-[0.94px]">Our </span>
        <span class="font-medium text-[#f7ba00] text-[59.7px] tracking-[1.07px] leading-[75.8px]">8</span>
        <span class="font-medium text-[#f7ba00] tracking-[0.94px]">-Steps<br /></span>
        <span class="font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] tracking-[0.94px]">
          Purification Process
        </span>
      </div>

      <div class="absolute top-[198px] left-[calc(50.00%_-_373px)] w-[690px] font-poppins font-normal text-black text-[17.1px] text-center tracking-[0.68px] leading-[normal]">
        Every batch goes through a carefully controlled, chemical-free
        purification method designed to ensure maximum purity, safety, and
        mineral richness. Our 7-step process guarantees consistent,
        high-quality Shilajit you can trust.
      </div>

      <div class="absolute top-96 left-[calc(50.00%_-_88px)] w-[120px] font-oswald font-semibold text-white text-5xl tracking-[0] leading-[normal] whitespace-nowrap">
        How Can Shilajeet
      </div>

      <div v-for="(step, index) in processSteps" :key="index">
        <Card
          :class="[
            'absolute w-[285px] h-[283px] bg-[#d9d9d9] rounded-[11.64px] border-0',
            step.imageTop,
            step.imageLeft
          ]"
        >
          <CardContent class="p-0 w-full h-full" />
        </Card>

        <div
          :class="[
            'absolute',
            step.containerTop,
            step.containerLeft,
            step.containerWidth || 'w-[274px]',
            step.containerHeight || 'h-[330px]'
          ]"
        >
          <div
            :class="[
              'absolute font-poppins font-bold text-black text-sm tracking-[0] leading-[normal]',
              step.titleTop,
              step.titleLeft || 'left-[calc(50.00%_-_52px)]',
              step.titleWidth || 'w-[181px]'
            ]"
          >
            {{ step.title }}
          </div>

          <div
            :class="[
              'absolute top-px font-epilogue font-extrabold text-[#f7ba00] whitespace-nowrap text-center',
              step.numberLeft ? step.numberLeft : 'left-[206px]',
              step.numberWidth || 'w-[54px]',
              step.numberSize,
              step.numberTracking,
              step.numberLeading
            ]"
          >
            {{ step.number }}
          </div>

          <div
            :class="[
              'absolute font-[Feeling_Passionate_Personal_Use-Regular] text-[#355e3b] text-[40.3px] tracking-[0.40px] leading-[normal]',
              step.stepTop,
              step.stepLeft
            ]"
          >
            Step
          </div>

          <div
            :class="[
              'absolute font-poppins font-normal text-black text-[15.5px] tracking-[0.62px] leading-[normal]',
              step.descTop,
              step.descLeft || 'left-px',
              step.descWidth || 'w-[263px]',
              step.descAlign
            ]"
          >
            <template v-if="typeof step.description === 'string'">
              {{ step.description }}
            </template>
            <template v-else>
              <span class="tracking-[0.10px]">High-altitude </span>
              <span class="font-bold tracking-[0.10px]">Shilajit</span>
              <span class="tracking-[0.10px]">
                is sourced directly from the mountains to maintain purity from the
                very beginning.
              </span>
            </template>
          </div>
        </div>

        <img
          v-if="step.decorSrc"
          :class="[
            'absolute',
            step.decorTop,
            step.decorLeft,
            step.decorWidth,
            step.decorHeight
          ]"
          alt="Objects"
          :src="step.decorSrc"
        />
      </div>

      <img
        class="absolute top-[498px] left-[720px] w-[344px] h-[357px]"
        alt="Objects"
        src="/objects.svg"
      />

      <img
        class="absolute top-[1668px] left-[463px] w-[515px] h-[250px]"
        alt="Group"
        src="/group-75.png"
      />

      <img
        class="absolute top-0 left-[1035px] w-[401px] h-[1147px]"
        alt="Bg"
        src="/bg-01-3-1.png"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import CardContent from '~/components/ui/CardContent.vue'

const processSteps = [
  {
    number: '1',
    title: 'Raw Shilajit Collection',
    description: 'object',
    numberSize: 'text-[201.7px]',
    numberTracking: 'tracking-[2.02px]',
    numberLeading: 'leading-[256.0px]',
    stepTop: 'top-[131px]',
    stepLeft: 'left-[calc(50.00%_-_1px)]',
    titleTop: 'top-[199px]',
    descTop: 'top-[228px]',
    descAlign: 'text-right',
    containerTop: 'top-[414px]',
    containerLeft: 'left-[150px]',
    imageTop: 'top-[460px]',
    imageLeft: 'left-[445px]',
    decorTop: 'top-[959px]',
    decorLeft: 'left-[466px]',
    decorSrc: '/objects-1.svg',
    decorWidth: 'w-[222px]',
    decorHeight: 'h-[235px]',
  },
  {
    number: '2',
    title: 'Washing & Filtering',
    description:
      'Organic filtering removes stones, soil, and unwanted particles.',
    numberSize: 'text-[193.9px]',
    numberTracking: 'tracking-[1.94px]',
    numberLeading: 'leading-[246.1px]',
    stepTop: 'top-[119px]',
    stepLeft: 'left-[calc(50.00%_-_118px)]',
    titleTop: 'top-[188px]',
    titleLeft: 'left-[calc(50.00%_-_125px)]',
    titleWidth: 'w-[170px]',
    descTop: 'top-[216px]',
    descLeft: 'left-[7px]',
    descWidth: 'w-[235px]',
    descAlign: 'text-left',
    containerTop: 'top-[838px]',
    containerLeft: 'left-[1022px]',
    containerWidth: 'w-[250px]',
    containerHeight: 'h-[299px]',
    imageTop: 'top-[873px]',
    imageLeft: 'left-[716px]',
    numberLeft: 'left-[88px]',
    numberWidth: 'w-24',
  },
  {
    number: '3',
    title: 'Low-Heat Extraction',
    description:
      'Gentle heating preserves minerals without burning or damaging nutrients.',
    numberSize: 'text-[173px]',
    numberTracking: 'tracking-[1.73px]',
    numberLeading: 'leading-[219.6px]',
    stepTop: 'top-[106px]',
    stepLeft: 'left-[calc(50.00%_-_47px)]',
    titleTop: 'top-[175px]',
    descTop: 'top-[203px]',
    descAlign: 'text-right',
    containerTop: 'top-[1237px]',
    containerLeft: 'left-[140px]',
    containerHeight: 'h-[305px]',
    imageTop: 'top-[1258px]',
    imageLeft: 'left-[435px]',
    numberLeft: 'left-48',
    numberWidth: 'w-[54px]',
  },
]
</script>
