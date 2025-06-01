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
                    class="flex items-end text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    ${{ loyaltyMainPart }}<span class="text-sm align-top">{{ loyaltyDecimalPart }}</span>B
                </p>
            </div>
            <div
                class="rounded-xl bg-[#1e1b3ab3] bg-opacity-80 border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                <p class="text-[#b8b8d0] mb-2">{{ t('stats.usdt_hold') }}</p>
                <p
                    class="flex items-end text-2xl font-bold bg-gradient-to-r from-[#c94fff] to-[#7a5cff] text-transparent bg-clip-text">
                    {{ usdtMainPart }}<span class="text-sm align-top">{{ usdtDecimalPart }}</span>M
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const minutes = ref(59)
const seconds = ref(59)
let countdownTimer = null
let incrementTimer = null

// 初始值设定
const loyaltyValue = ref(157.4)
const usdtHolding = ref(3511.3)

// 增加更大的增量值
const loyaltyIncrement = 0.0035
const usdtHoldingIncrement = 0.086

// 增加小数位的随机变化
const addRandomToLastDigit = (value) => {
  // 获取当前值的字符串表示
  let valueStr = value.toFixed(6);
  let parts = valueStr.split('.');
  
  // 分离整数部分和小数部分
  let intPart = parts[0];
  let decPart = parts[1] || '000000';
  
  // 修改最后一位数字（快速变化）
  let lastDigit = Math.floor(Math.random() * 10);
  
  // 有20%的概率修改倒数第二位数字（稍慢变化）
  let secondLastDigit = decPart.charAt(4);
  if (Math.random() < 0.2) {
    secondLastDigit = Math.floor(Math.random() * 10);
  }
  
  // 构建新的小数部分
  let newDecPart = decPart.substring(0, 4) + secondLastDigit + lastDigit;
  
  // 返回新值
  return parseFloat(intPart + '.' + newDecPart);
}

// 格式化数据，保留特定位数
const formattedLoyalty = computed(() => {
    return loyaltyValue.value.toFixed(6)
})

const formattedUsdtHolding = computed(() => {
    return usdtHolding.value.toFixed(3)
})

// 格式化数据，拆分为主要部分和小数部分
const loyaltyMainPart = computed(() => {
    const valueStr = loyaltyValue.value.toString();
    const parts = valueStr.split('.');
    if (parts.length > 1 && parts[1].length > 0) {
        return parts[0] + '.' + parts[1][0];
    }
    return parts[0] + '.0';
})

const loyaltyDecimalPart = computed(() => {
    const valueStr = loyaltyValue.value.toFixed(5);
    const parts = valueStr.split('.');
    if (parts.length > 1 && parts[1].length > 1) {
        return parts[1].substring(1);
    }
    return '';
})

const usdtMainPart = computed(() => {
    const valueStr = usdtHolding.value.toString();
    const parts = valueStr.split('.');
    if (parts.length > 1 && parts[1].length > 0) {
        return parts[0] + '.' + parts[1][0];
    }
    return parts[0] + '.0';
})

const usdtDecimalPart = computed(() => {
    const valueStr = usdtHolding.value.toFixed(3);
    const parts = valueStr.split('.');
    if (parts.length > 1 && parts[1].length > 1) {
        return parts[1].substring(1);
    }
    return '';
})

// 处理倒计时的函数
const tickCountdown = () => {
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

// 处理数值增长的函数
const tickIncrement = () => {
    // 增加数值并添加随机变化
    loyaltyValue.value += loyaltyIncrement;
    usdtHolding.value += usdtHoldingIncrement;
    
    // 对最后几位数字进行随机变化
    loyaltyValue.value = addRandomToLastDigit(loyaltyValue.value);
    usdtHolding.value = addRandomToLastDigit(usdtHolding.value);
}

onMounted(() => {
    // 倒计时每秒更新一次
    countdownTimer = setInterval(tickCountdown, 1000)
    
    // 数值增长每100毫秒更新一次
    incrementTimer = setInterval(tickIncrement, 100)
})

onUnmounted(() => {
    clearInterval(countdownTimer)
    clearInterval(incrementTimer)
})
</script>
