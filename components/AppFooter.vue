<template>
  <footer class="relative w-full bg-white py-12">
    <div class="max-w-[1440px] mx-auto px-4 md:px-8">
      <div class="flex justify-end">
        <div class="relative w-full max-w-[366px]">
          <Input
            type="email"
            placeholder="Enter your email"
            class="w-full h-[42px] pr-[120px] rounded-[26.58px] border border-black bg-white"
          />
          <Button class="absolute right-[3px] top-[3px] h-[35px] w-28 bg-[#355e3b] hover:bg-[#2d4f32] rounded-[24.36px] text-white text-[12.5px] font-poppins font-normal">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
    <div class="w-full h-7 bg-[#5a9f64] mt-8" />
  </footer>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'
import Input from '~/components/ui/Input.vue'
</script>
