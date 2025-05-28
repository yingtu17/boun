<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const airdropData = [
  { rank: t('defi.rank1'), range: '100,000 - 299,999', percentage: '3.89 %' },
  { rank: t('defi.rank2'), range: '50,000 - 99,999', percentage: '3.39 %' },
  { rank: t('defi.rank3'), range: '30,000 - 49,999', percentage: '3.00 %' },
  { rank: t('defi.rank4'), range: '10,000 - 29,999', percentage: '2.89 %' },
  { rank: t('defi.rank5'), range: '5,000 - 9,999', percentage: '2.59 %' },
  { rank: t('defi.rank6'), range: '1,000 - 4,999', percentage: '2.31 %' },
  { rank: t('defi.rank7'), range: '100 - 999', percentage: '2.00 %' }
];

defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4 md:p-8 mb-6 md:mb-12 text-sm">
    <h2 class="text-base md:text-lg text-white mb-3 md:mb-5">{{ t('defi.title') }}</h2>

    <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
      <li class="flex items-center">
        <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
        <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('defi.desc1') }}</p>
      </li>
      <li class="flex items-center">
        <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
        <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('defi.desc2') }}</p>
      </li>
    </ul>

    <div class="overflow-x-auto -mx-4 md:mx-0">
      <div class="min-w-[500px] md:min-w-0 px-4 md:px-0">
        <table class="w-full border-collapse">
          <tbody>
            <tr v-for="item in airdropData" :key="item.rank">
              <td class="py-2 md:py-3 text-[#b8b8d0] font-medium text-xs w-1/3 text-center">{{ item.rank }}</td>
              <td class="py-2 md:py-3 text-[#b8b8d0] text-center text-xs w-1/3">{{ item.range }}</td>
              <td class="py-2 md:py-3 text-[#b8b8d0] text-center font-bold text-xs w-1/3">{{ item.percentage }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
