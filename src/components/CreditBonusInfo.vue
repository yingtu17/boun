<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
    title: {
        type: String,
        default: ''
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
  <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4 md:p-8 mb-6 md:mb-12 text-sm">
    <h2 class="text-base md:text-lg font-bold text-white mb-3 md:mb-5">{{ t('credit_bonus.title') }}</h2>

    <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
      <li class="flex items-start">
        <div class="text-[#6e44ff] mr-2 text-base md:text-xl mt-0 md:mt-0">•</div>
        <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('credit_bonus.desc1') }}</p>
      </li>
      <li class="flex items-start">
        <div class="text-[#6e44ff] mr-2 text-base md:text-xl mt-0 md:mt-0">•</div>
        <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('credit_bonus.desc2') }}</p>
      </li>
    </ul>

    <div class="space-y-1 md:space-y-2 mb-4 md:mb-6 pl-4 md:pl-6 text-white">
      <div v-for="(item, index) in bonusData" :key="index" class="flex items-center text-xs md:text-sm">
        <p>{{ t('credit_bonus.level', { amount: item.amount, percentage: item.percentage, reward: item.reward }) }}</p>
      </div>
    </div>

    <div class="flex items-center gap-2 mb-4 md:mb-6">
      <span class="bg-[#f8c156] text-[#1e1b3a] p-1 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 md:h-4 md:w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
      </span>
      <p class="text-[#f8c156] text-xs md:text-sm">{{ t('credit_bonus.tip') }}</p>
    </div>

    <ul class="space-y-2 md:space-y-3">
      <li class="flex items-start">
        <div class="text-[#6e44ff] mr-2 text-base md:text-xl mt-0 md:mt-0">•</div>
        <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('credit_bonus.desc3') }}</p>
      </li>
    </ul>
  </div>
</template>
