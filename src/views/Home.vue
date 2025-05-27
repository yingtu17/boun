<script setup>
import HomeStats from '@/components/HomeStats.vue'
import AboutBounty from '@/components/AboutBounty.vue'
import RewardMechanism from '@/components/RewardMechanism.vue'
import TokenEconomics from '@/components/TokenEconomics.vue'
import StrategicPartners from '@/components/StrategicPartners.vue'
import FaqList from '@/components/FaqList.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const animateLogo = ref(true)
const isMobile = ref(false)

onMounted(() => {
	animateLogo.value = true
	checkMobile()
	window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
	window.removeEventListener('resize', checkMobile)
})

function checkMobile() {
	isMobile.value = window.innerWidth <= 768
}
</script>

<template>
	<main>
		<div class="container p-5 mx-auto">
			<!-- 英雄区域 - 响应式布局 -->
			<div class="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-20">
				<div class="gap-6 md:gap-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto mb-8 md:mb-0">
					<p class="font-bold text-4xl md:text-7xl bg-gradient-to-r from-[#c94fff] to-[#7a5cff] inline-block text-transparent bg-clip-text">
						$BOUNTY
					</p>
					<p class="font-bold text-xl md:text-2xl">区块链上最高的 USDT 奖励</p>
					<p class="text-[#b8b8d0] text-sm md:text-base">仅需持有 USDT 代币，每 60 分钟自动赚取 $BOUNTY 奖励</p>
					<button class="bg-gradient-to-r from-[#7847f9] to-[#b345c2] text-white rounded-full px-6 md:px-8 py-3 md:py-2 text-sm font-medium shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:from-[#7a5cff] hover:to-[#c94fff] w-full md:w-auto max-w-[200px]">
						连接钱包
					</button>
				</div>
				<div class="w-[200px] md:w-auto">
					<img src="@/assets/logo.webp" alt="" class="w-full h-auto transition-transform duration-500"
						:class="{ 'animate-rotate': animateLogo }" @animationend="animateLogo = true">
				</div>
			</div>
			<HomeStats />
			<AboutBounty />
		</div>
		<RewardMechanism />
		<TokenEconomics />
		<StrategicPartners />
		<FaqList />
	</main>
</template>

<style scoped>
@keyframes rotate15back {
	0% {
		transform: rotate(0deg);
	}

	40% {
		transform: rotate(15deg);
	}

	100% {
		transform: rotate(0deg);
	}
}

.animate-rotate {
	animation: rotate15back 10s cubic-bezier(.4, 0, .2, 1) infinite;
}

/* 添加手机适配样式 */
@media (max-width: 768px) {
	.container {
		padding-left: 1rem;
		padding-right: 1rem;
	}
}
</style>
