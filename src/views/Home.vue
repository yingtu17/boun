<script setup>
import HomeStats from '@/components/HomeStats.vue'
import AboutBounty from '@/components/AboutBounty.vue'
import RewardMechanism from '@/components/RewardMechanism.vue'
import TokenEconomics from '@/components/TokenEconomics.vue'
import StrategicPartners from '@/components/StrategicPartners.vue'
import FaqList from '@/components/FaqList.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const animateLogo = ref(true)

onMounted(() => {
	animateLogo.value = true
})
</script>

<template>
	<main>
		<div class="container p-5 mx-auto">
			<div class="flex justify-between items-center py-8 px-20">
				<div class="gap-10 flex flex-col items-start">
					<p
						class="font-bold text-7xl bg-gradient-to-r from-[#c94fff] to-[#7a5cff] inline-block text-transparent bg-clip-text">
						$BOUNTY</p>
					<p class="font-bold text-2xl">区块链上最高的 USDT 奖励</p>
					<p class="text-[#b8b8d0]">仅需持有 USDT 代币，每 60 分钟自动赚取 $BOUNTY 奖励</p>
					<button
						class="bg-gradient-to-r from-[#7847f9] to-[#b345c2] text-white rounded-full px-8 py-2 text-sm font-medium shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:from-[#7a5cff] hover:to-[#c94fff]">
						连接钱包
					</button>
				</div>
				<div>
					<img
						src="@/assets/logo.webp"
						alt=""
						class="w-full h-auto transition-transform duration-500"
						:class="{ 'animate-rotate': animateLogo }"
						@animationend="animateLogo = true"
					>
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
  animation: rotate15back 10s cubic-bezier(.4,0,.2,1) infinite;
}
</style>
