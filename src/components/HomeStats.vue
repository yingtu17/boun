<template>
    <div class="mt-10">
        <!-- 倒计时区域 -->
        <div class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-4 md:px-12 py-8 md:py-14 flex flex-col items-center max-w-8xl mx-auto"
            style="min-height: 200px">
            <p class="text-white text-xl md:text-2xl font-bold mb-6">{{ t('stats.next_reward') }}</p>
            <div class="flex items-end gap-4 mb-2">
                <span
                    class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ String(minutes).padStart(2, '0') }}
                </span>
                <span
                    class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ String(seconds).padStart(2, '0') }}
                </span>
            </div>
            <div class="flex gap-12 md:gap-16">
                <span class="text-[#b8b8d0] text-base md:text-lg">{{ t('stats.minute') }}</span>
                <span class="text-[#b8b8d0] text-base md:text-lg">{{ t('stats.second') }}</span>
            </div>
        </div>
        <!-- 统计数据卡片 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-12 max-w-7xl mx-auto">
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">{{ t('stats.loyalty') }}</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    $126.078009B
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">{{ t('stats.usdt_hold') }}</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    2,811.7775M
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">{{ t('stats.auto_reward') }}</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ t('stats.auto_reward_value') }}
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">{{ t('stats.marketcap') }}</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    504.312M
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const minutes = ref(59)
const seconds = ref(59)
let timer = null

const tick = () => {
    if (seconds.value > 0) {
        seconds.value--
    } else if (minutes.value > 0) {
        minutes.value--
        seconds.value = 59
    } else {
        minutes.value = 59
        seconds.value = 59
    }
}

onMounted(() => {
    timer = setInterval(tick, 1000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>
