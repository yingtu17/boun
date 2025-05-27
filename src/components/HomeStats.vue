<template>
    <div class="mt-10">
        <div class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-12 py-14 flex flex-col items-center max-w-8xl mx-auto"
            style="min-height: 260px">
            <p class="text-white text-2xl font-bold mb-6">下次奖励分发时间:</p>
            <div class="flex items-end gap-4 mb-2">
                <span
                    class="text-6xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ String(minutes).padStart(2, '0') }}
                </span>
                <span
                    class="text-6xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ String(seconds).padStart(2, '0') }}
                </span>
            </div>
            <div class="flex gap-16">
                <span class="text-[#b8b8d0] text-lg">分钟</span>
                <span class="text-[#b8b8d0] text-lg">秒</span>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">忠诚收益</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    $126.078009B
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">USDT 持有量</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    2,811.7775M
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">自动奖励</p>
                <p
                    class="text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    60 分钟
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">市值</p>
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
