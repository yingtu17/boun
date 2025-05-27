<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

</script>
<template>
  <div>
    <!-- 背景光斑 -->
    <div class="pointer-events-none fixed inset-0 -z-10">
      <div class="absolute top-0 right-0 w-64 h-64 bg-radial from-purple-500 to-transparent blur-3xl opacity-70 animate-glow-pulse"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-radial from-teal-400 to-transparent blur-3xl opacity-60 animate-glow-pulse"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-radial from-pink-500 to-transparent blur-3xl opacity-70 animate-glow-pulse"></div>
    </div>

    <!-- 页面主要内容 -->
    <div class="relative z-10">
      <HeaderBar />
      <router-view />
      <FooterBar />
    </div>
  </div>
</template>

<style scoped>
@keyframes glow-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 6s ease-in-out infinite;
}
</style>
