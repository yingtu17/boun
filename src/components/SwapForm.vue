<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    fromToken: { type: String, default: '$BOUNTY' },
    toToken: { type: String, default: 'USDT' },
    fromAmount: { type: [String, Number], default: '' },
    toAmount: { type: [String, Number], default: '' }
})
const emit = defineEmits(['update:fromToken', 'update:toToken', 'update:fromAmount', 'update:toAmount'])
</script>

<template>
    <div
        class="flex-1 bg-[#1e1b3ab3] rounded-2xl border border-[#393a5a] p-0 flex flex-col w-full lg:min-w-[380px] lg:max-w-[440px]">
        <div class="px-4 md:px-8 pt-4 md:pt-6 pb-1 md:pb-2"></div>
        <div class="flex-1 flex flex-col gap-4 md:gap-6 px-4 md:px-8 pb-6 md:pb-8">
            <!-- 从 -->
            <div class="rounded-xl bg-[#211e38] px-4 md:px-6 py-3 md:py-4 flex flex-col gap-1 md:gap-2">
                <div class="flex justify-between items-center mb-0 md:mb-1">
                    <span class="text-[#b8b8d0] text-[10px] md:text-xs">从</span>
                    <div class="flex items-center gap-1 md:gap-2">
                        <span class="text-[#b8b8d0] text-[10px] md:text-xs">0.0000</span>
                        <button class="bg-[#2e2a42] text-[#b8b8d0] px-1 md:px-2 py-0.5 rounded text-[10px] md:text-xs">最大值</button>
                        <button class="bg-[#2e2a42] text-[#b8b8d0] px-1 md:px-2 py-0.5 rounded text-[10px] md:text-xs">50%</button>
                    </div>
                </div>
                <div class="flex items-center gap-2 md:gap-3">
                    <div class="flex items-center gap-1 md:gap-2 bg-[#18142a] rounded-lg px-2 md:px-3 py-0.5 md:py-1 shrink-0">
                        <img src="../assets/nft/bounty.png" class="w-4 md:w-6 h-4 md:h-6" />
                        <span class="text-white font-bold text-xs md:text-base">{{ props.fromToken }}</span>
                    </div>
                    <input :value="props.fromAmount" @input="emit('update:fromAmount', $event.target.value)"
                        type="number" min="0"
                        class="w-full bg-transparent text-white text-sm md:text-xl text-right outline-none overflow-hidden text-ellipsis hide-number-arrows"
                        placeholder="0" />
                </div>
                <div class="text-right text-[#b8b8d0] text-[10px] md:text-xs mt-0 md:mt-1">~$0.00</div>
            </div>
            <!-- 切换按钮 -->
            <div class="flex justify-center -my-1 md:-my-2">
                <button
                    class="bg-[#23223a] border border-[#393a5a] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-[#b259ff]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3">
                        </path>
                    </svg>
                </button>
            </div>
            <!-- 到 -->
            <div class="rounded-xl bg-[#211e38] px-4 md:px-6 py-3 md:py-4 flex flex-col gap-1 md:gap-2">
                <div class="flex justify-between items-center mb-0 md:mb-1">
                    <span class="text-[#b8b8d0] text-[10px] md:text-xs">到</span>
                </div>
                <div class="flex items-center gap-2 md:gap-3">
                    <div class="flex items-center gap-1 md:gap-2 bg-[#18142a] rounded-lg px-2 md:px-3 py-0.5 md:py-1 shrink-0">
                        <img src="../assets/nft/USDT.png" class="w-4 md:w-6 h-4 md:h-6 rounded-full" />
                        <span class="text-white font-bold text-xs md:text-base">{{ props.toToken }}</span>
                    </div>
                    <input :value="props.toAmount" @input="emit('update:toAmount', $event.target.value)" type="number"
                        min="0"
                        class="w-full bg-transparent text-white text-sm md:text-xl text-right outline-none overflow-hidden text-ellipsis hide-number-arrows"
                        placeholder="0" />
                </div>
                <div class="text-right text-[#b8b8d0] text-[10px] md:text-xs mt-0 md:mt-1">~$0.00</div>
            </div>
            <!-- 额外信息 -->
            <div class="flex flex-col gap-2 md:gap-4 mt-1 md:mt-2 mb-1 md:mb-2 text-[#b8b8d0] text-[10px] md:text-sm">
                <div class="flex justify-between items-center">
                    <span>预计接收</span>
                    <span class="text-white">0.00 USDT</span>
                </div>
                <div class="flex justify-between items-center">
                    <span>价格影响</span>
                    <span class="text-white">0 %</span>
                </div>
            </div>
            <!-- 按钮 -->
            <button
                class="bg-gradient-to-r from-[#8257f9] to-[#ff44a4] text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-lg font-medium w-full mt-1 md:mt-2 shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:brightness-105">
                连接钱包
            </button>
        </div>
    </div>
</template>

<style scoped>
/* 隐藏数字输入框的上下箭头 */
.hide-number-arrows::-webkit-outer-spin-button,
.hide-number-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.hide-number-arrows {
  -moz-appearance: textfield;
}
</style>
