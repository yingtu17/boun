<script setup>
defineProps({
    title: {
        type: String,
        default: 'One-time Credit Bonus Enhancement Event'
    },
    bonusData: {
        type: Array,
        required: false,
        default: () => [
            { amount: '500 USDT', percentage: '2.5%', reward: '125 $BOUNTY' },
            { amount: '1,000 USDT', percentage: '5%', reward: '500 $BOUNTY' },
            { amount: '2,500 USDT', percentage: '10%', reward: '2,500 $BOUNTY' },
            { amount: '5,000 USDT', percentage: '15%', reward: '7,500 $BOUNTY' },
            { amount: '10,000 USDT', percentage: '20%', reward: '20,000 $BOUNTY' }
        ]
    }
});
</script>

<template>
    <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-8 mb-12 text-sm">
        <h2 class="text-lg text-white mb-5">{{ title }}</h2>

        <ul class="space-y-3 mb-6">
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-xl">•</div>
                <p class="text-[#b8b8d0]">我们很高兴推出一次性信用奖金增强活动。用户进行单笔存款后，将根据存款金额获得即时奖金。</p>
            </li>
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-xl">•</div>
                <p class="text-[#b8b8d0]">奖金级别如下:</p>
            </li>
        </ul>

        <div class="space-y-2 mb-6 pl-6 text-[#b8b8d0]">
            <div v-for="(item, index) in bonusData" :key="index" class="flex items-center">
                <p>存入 {{ item.amount }} — 获得 {{ item.percentage }} 奖金 = 估计 {{ item.reward }}</p>
            </div>
        </div>

        <div class="flex items-center gap-2 mb-6">
            <span class="bg-[#f8c156] text-[#1e1b3a] p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd" />
                </svg>
            </span>
            <p class="text-[#f8c156]">每个奖金级别每位用户只能申请一次。</p>
        </div>

        <ul class="space-y-3">
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-xl">•</div>
                <p class="text-[#b8b8d0]">进行一次性存款，享受额外奖励 — 简单而丰厚。</p>
            </li>
        </ul>
    </div>
</template>
