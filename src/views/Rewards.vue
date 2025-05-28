<template>
	<div class="min-h-screen py-2 px-4 md:px-8 text-sm">
		<!-- 标题区 -->
		<div class="m-auto w-full md:w-10/12 py-4">
			<h2 class="text-xl md:text-2xl font-bold text-[#b259ff] mb-2">{{ t('rewards.title') }}</h2>
			<p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('rewards.desc') }}</p>
		</div>
		<div class="m-auto w-full md:w-10/12 flex flex-col lg:flex-row gap-6 md:gap-8">
			<!-- 左侧 -->
			<div class="flex-1 flex flex-col gap-6 md:gap-8">
				<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
					<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a]">
						<div class="px-4 md:px-8 py-3 md:py-4 rounded-t-xl bg-[#6e44ff1a] text-center">
							<span class="text-white text-xs md:text-sm">{{ t('rewards.current_usdt') }}</span>
						</div>
						<div class="flex flex-col items-center justify-center py-6 md:py-8">
							<span class="text-xs md:text-sm font-bold text-white mb-1">0.00 <span
									class="text-[#2ee6d6] font-semibold">USDT</span></span>
						</div>
					</div>
					<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a]">
						<div class="px-4 md:px-8 py-3 md:py-4 rounded-t-xl bg-[#6e44ff1a] text-center">
							<span class="text-white text-xs md:text-sm">{{ t('rewards.claimable') }}</span>
						</div>
						<div class="flex flex-col items-center justify-center py-6 md:py-8">
							<span class="text-xs md:text-sm font-bold text-white mb-1">0.0000 <span
									class="text-[#2ee6d6] font-semibold">$BOUNTY</span></span>
						</div>
					</div>
				</div>
				<div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] p-0 overflow-hidden">
					<div class="px-4 md:px-8 py-3 md:py-4 flex flex-col">
						<span class="text-base md:text-lg font-bold text-[#b259ff]">{{ t('rewards.my_rewards') }}</span>
						<div class="w-24 md:w-32 h-[2px] bg-gradient-to-r from-[#6e44ff] to-[#ff44a4]"></div>
					</div>
					<div class="flex flex-col gap-3 md:gap-4 px-4 md:px-8 py-3 md:py-4">
						<div
							class="bg-[#6e44ff1a] border border-[#393a5a] rounded-lg px-3 md:px-6 py-3 md:py-4 flex justify-between items-center">
							<span class="text-white font-medium text-xs md:text-sm">{{ t('rewards.hourly') }}</span>
							<span class="text-[#2ee6d6] font-bold text-xs md:text-sm">0.0000 $BOUNTY</span>
						</div>
						<div
							class="bg-[#6e44ff1a] border border-[#393a5a] rounded-lg px-3 md:px-6 py-3 md:py-4 flex justify-between items-center">
							<span class="text-white font-medium text-xs md:text-sm">{{ t('rewards.daily') }}</span>
							<span class="text-[#2ee6d6] font-bold text-xs md:text-sm">0.0000 $BOUNTY</span>
						</div>
						<div
							class="border-b border-[#393a5a] px-3 md:px-6 py-3 md:py-4 flex justify-between items-center">
							<span class="text-white font-medium text-xs md:text-sm">{{ t('rewards.weekly') }}</span>
							<span class="text-[#2ee6d6] font-bold text-xs md:text-sm">0.0000 $BOUNTY</span>
						</div>
						<div
							class="border-b border-[#393a5a] px-3 md:px-6 py-3 md:py-4 flex justify-between items-center">
							<span class="text-white font-medium text-xs md:text-sm">{{ t('rewards.monthly') }}</span>
							<span class="text-[#2ee6d6] font-bold text-xs md:text-sm">0.0000 $BOUNTY</span>
						</div>
						<div class="px-3 md:px-6 py-3 md:py-4 flex justify-between items-center">
							<span class="text-white font-medium text-xs md:text-sm">{{ t('rewards.yearly') }}</span>
							<span class="text-[#2ee6d6] font-bold text-xs md:text-sm">0.0000 $BOUNTY</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 右侧 -->
			<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] flex flex-col overflow-hidden">
				<div class="px-4 md:px-8 py-3 md:py-4 rounded-t-xl flex flex-col">
					<span class="text-base md:text-lg font-bold text-[#b259ff]">{{ t('rewards.record') }}</span>
					<div class="w-32 md:w-48 h-[2px] bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] "></div>
				</div>
				<div class="flex flex-1 flex-col items-center justify-center min-h-[200px] md:min-h-[300px]">
					<img src="@/assets/logo.webp" alt="empty"
						class="w-16 md:w-24 h-16 md:h-24 mb-3 md:mb-4 opacity-80" />
					<span class="text-[#b8b8d0] text-xs md:text-sm">{{ t('rewards.no_data') }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>