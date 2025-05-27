<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const onScroll = () => {
    isScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50 border-b border-transparent transition-colors duration-300"
        :style="{ backgroundColor: isScrolled ? '#13101e' : '#0d0b1600' }">
        <div class="max-w-[1400px] mx-auto flex items-center h-[64px] justify-between px-4">
            <RouterLink to="/" class="flex items-center gap-2 no-underline">
                <img src="@/assets/logo.webp" alt="Bounty Logo" class="w-8 h-8" />
                <span class="text-white text-xs font-semibold tracking-wider">$BOUNTY</span>
            </RouterLink>
            <nav class="flex gap-9 ml-10">
                <RouterLink to="/" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/' ? 'text-white font-semibold' : ''">首页</RouterLink>
                <RouterLink to="/rewards" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/rewards' ? 'text-white font-semibold' : ''">奖励</RouterLink>
                <RouterLink to="/nft" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/nft' ? 'text-white font-semibold' : ''">NFT</RouterLink>
                <RouterLink to="/swap" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/swap' ? 'text-white font-semibold' : ''">兑换</RouterLink>
                <RouterLink to="/policy" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/policy' ? 'text-white font-semibold' : ''">信息与政策</RouterLink>
            </nav>
            <div class="flex items-center gap-5">
                <button
                    class="bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] text-white rounded-full px-6 py-2 text-xs font-medium shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:from-[#ff44a4] hover:to-[#c94fff]">
                    连接钱包
                </button>
                <button
                    class="bg-none border-0 ml-2 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer">
                    <img src="../assets/CN.png" alt="CN" class="w-7 h-7 rounded-full object-cover" />
                </button>
            </div>
        </div>
    </header>
    <div class="h-[72px]"></div>
    <!-- <RouterView /> -->
</template>
