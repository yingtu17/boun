<script setup>
import { ref } from 'vue'

const fromToken = ref('$BOUNTY')
const toToken = ref('USDT')
const fromAmount = ref(0)
const toAmount = ref(0)
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-b">
        <div class="flex-1 w-full max-w-10/12 mx-auto px-6 py-10">
            <h1 class="text-3xl font-bold text-[#7645f6] mb-2">NFT 市场</h1>
            <p class="mb-8 text-[#b8b8d0] text-sm">每个 NFT 在 $BOUNTY 生态系统中为持有者提供独特的奖励和福利。</p>
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- 右侧交换表单 -->
                <div class="flex-1 bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-6">
                    <h2 class="text-lg font-bold text-white mb-4">$BOUNTY / USDT</h2>
                    <div class="bg-[#1e1b3ab3] rounded-lg h-[400px] flex items-center justify-center">
                        <p class="text-[#b8b8d0]">图表区域</p>
                    </div>
                </div>
                <!-- 右侧交换表单 -->
                <div>123</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
