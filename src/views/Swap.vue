<script setup>
import { ref } from 'vue'
import SwapForm from '@/components/SwapForm.vue'
import TradeChart from '@/components/TradeChart.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const fromToken = ref('$BOUNTY')
const toToken = ref('USDT')
const fromAmount = ref('')
const toAmount = ref('')
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-1 w-full max-w-10/12 mx-auto px-4 md:px-6 py-6 md:py-10">
            <h1 class="text-2xl md:text-3xl font-bold text-[#b259ff] mb-1 md:mb-2">{{ t('swap.title') }}</h1>
            <p class="mb-4 md:mb-8 text-[#b8b8d0] text-sm md:text-base">{{ t('swap.desc') }}</p>
            <div class="flex flex-col lg:flex-row gap-4 md:gap-8">
                <!-- 左侧K线区域 -->
                <TradeChart pair="$BOUNTY / USDT" />

                <!-- 右侧兑换表单 -->
                <SwapForm v-model:fromToken="fromToken" v-model:toToken="toToken" v-model:fromAmount="fromAmount"
                    v-model:toAmount="toAmount" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
