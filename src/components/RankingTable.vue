<script setup>
// 方法1: 使用外部变量并在defineProps后引用
const props = defineProps({
    bonusData: {
        type: Array,
        required: false,
        default: () => [
            { rank: '冠军', range: '100,000 - 299,999', percentage: '15 %' },
            { rank: '精英', range: '50,000 - 99,999', percentage: '12.5 %' },
            { rank: '专业', range: '30,000 - 49,999', percentage: '11 %' },
            { rank: '新星', range: '10,000 - 29,999', percentage: '9 %' },
            { rank: '探索者', range: '5,000 - 9,999', percentage: '7.5 %' },
            { rank: '初学者', range: '1,000 - 4,999', percentage: '5 %' }
        ]
    },
    title: {
        type: String,
        default: 'Ranking Bonus'
    }
});
</script>

<template>
    <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4 md:p-8 mb-6 md:mb-12 text-sm">
        <h2 class="text-base md:text-lg text-white mb-3 md:mb-5">{{ title }}</h2>

        <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
                <p class="text-[#b8b8d0] text-xs md:text-sm">每位用户只能有一次排名奖金的资格。奖金金额将根据所达到的排名级别确定。</p>
            </li>
            <li class="flex items-center">
                <div class="text-[#6e44ff] mr-2 text-base md:text-xl">•</div>
                <p class="text-[#b8b8d0] text-xs md:text-sm">奖金百分比将根据总金额计算。</p>
            </li>
        </ul>

        <div class="overflow-x-auto -mx-4 md:mx-0">
            <div class="min-w-[500px] md:min-w-0 px-4 md:px-0">
                <table class="w-full border-collapse">
                    <tbody>
                        <tr v-for="item in bonusData" :key="item.rank">
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
