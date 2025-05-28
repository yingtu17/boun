<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const props = defineProps({
    bonusData: {
        type: Array,
        required: false,
        default: () => []
    },
    title: {
        type: String,
        default: ''
    }
});

const defaultBonusData = computed(() => [
    { rank: t('ranking.rank1'), range: '100,000 - 299,999', percentage: '15 %' },
    { rank: t('ranking.rank2'), range: '50,000 - 99,999', percentage: '12.5 %' },
    { rank: t('ranking.rank3'), range: '30,000 - 49,999', percentage: '11 %' },
    { rank: t('ranking.rank4'), range: '10,000 - 29,999', percentage: '9 %' },
    { rank: t('ranking.rank5'), range: '5,000 - 9,999', percentage: '7.5 %' },
    { rank: t('ranking.rank6'), range: '1,000 - 4,999', percentage: '5 %' }
]);

const bonusDataToDisplay = computed(() => props.bonusData.length ? props.bonusData : defaultBonusData.value);
</script>

<template>
    <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4 md:p-8 mb-6 md:mb-12 text-sm">
        <h2 class="text-base md:text-lg text-white mb-3 md:mb-5">{{ t('ranking.title') }}</h2>

        <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
                <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('ranking.desc1') }}</p>
            </li>
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
                <p class="text-[#b8b8d0] text-xs md:text-sm">{{ t('ranking.desc2') }}</p>
            </li>
        </ul>

        <div class="overflow-x-auto -mx-4 md:mx-0">
            <div class="min-w-[500px] md:min-w-0 px-4 md:px-0">
                <table class="w-full border-collapse">
                    <tbody>
                        <tr v-for="item in bonusDataToDisplay" :key="item.rank">
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
