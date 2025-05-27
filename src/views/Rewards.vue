<template>
	<div class="min-h-screen py-2 px-8 text-sm">
		<!-- 标题区 -->
		<div class="m-auto w-10/12 py-4">
			<h2 class="text-2xl font-bold text-[#b259ff] mb-2">奖励</h2>
			<p class="text-[#b8b8d0]">获取 USDT 并等待空投</p>
		</div>
		<div class="m-auto w-10/12 flex flex-col lg:flex-row gap-8">
			<!-- 左侧 -->
			<div class="flex-1 flex flex-col gap-8">
				<div class="flex gap-6">
					<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a]">
						<div class="px-8 py-4 rounded-t-xl bg-[#6e44ff1a] text-center">
							<span class="text-white">当前USDT持有量</span>
						</div>
						<div class="flex flex-col items-center justify-center py-8">
							<span class="text-sm font-bold text-white mb-1">0.00 <span
									class="text-[#2ee6d6] font-semibold">USDT</span></span>
						</div>
					</div>
					<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a]">
						<div class="px-8 py-4 rounded-t-xl bg-[#6e44ff1a] text-center">
							<span class="text-white">可领取奖励</span>
						</div>
						<div class="flex flex-col items-center justify-center py-8">
							<span class="text-sm font-bold text-white mb-1">0.0000 <span
									class="text-[#2ee6d6] font-semibold">$BOUNTY</span></span>
						</div>
					</div>
				</div>
				<div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] p-0 overflow-hidden">
					<div class="px-8 py-4 flex flex-col">
						<span class="text-lg font-bold text-[#b259ff]">我的奖励</span>
						<div class="w-32 h-[2px] bg-gradient-to-r from-[#6e44ff] to-[#ff44a4]"></div>
					</div>
					<div class="flex flex-col gap-4 px-8 py-4">
						<div class="bg-[#6e44ff1a] border border-[#393a5a] rounded-lg px-6 py-4 flex justify-between items-center">
							<span class="text-white font-medium">每小时:</span>
							<span class="text-[#2ee6d6] font-bold">0.0000 $BOUNTY</span>
						</div>
						<div class="bg-[#6e44ff1a] border border-[#393a5a] rounded-lg px-6 py-4 flex justify-between items-center">
							<span class="text-white font-medium">每日:</span>
							<span class="text-[#2ee6d6] font-bold">0.0000 $BOUNTY</span>
						</div>
						<div class="border-b border-[#393a5a] px-6 py-4 flex justify-between items-center">
							<span class="text-white font-medium">每周:</span>
							<span class="text-[#2ee6d6] font-bold">0.0000 $BOUNTY</span>
						</div>
						<div class="border-b border-[#393a5a] px-6 py-4 flex justify-between items-center">
							<span class="text-white font-medium">每月:</span>
							<span class="text-[#2ee6d6] font-bold">0.0000 $BOUNTY</span>
						</div>
						<div class="px-6 py-4 flex justify-between items-center">
							<span class="text-white font-medium">每年:</span>
							<span class="text-[#2ee6d6] font-bold">0.0000 $BOUNTY</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 右侧 -->
			<div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] flex flex-col overflow-hidden">
				<div class="px-8 py-4 rounded-t-xl flex flex-col">
					<span class="text-lg font-bold text-[#b259ff]">奖励记录</span>
					<div class="w-48 h-[2px] bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] "></div>
				</div>
				<div class="flex flex-1 flex-col items-center justify-center min-h-[300px]">
					<img src="@/assets/logo.webp" alt="empty" class="w-24 h-24 mb-4 opacity-80" />
					<span class="text-[#b8b8d0]">暂无可用数据</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
<script setup></script>