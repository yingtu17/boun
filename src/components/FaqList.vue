<template>
    <section class="w-full py-12 md:py-24 px-0 bg-[#1a1832]">
        <div class="max-w-3xl mx-auto px-4">
            <div class="flex flex-col items-center mb-8 md:mb-14">
                <h2 class="text-3xl md:text-4xl font-bold mb-2 text-[#b259ff] text-center">常见问题</h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#a259ff] to-[#c94fff]"></div>
            </div>
            <div>
                <div v-for="(item, idx) in faqs" :key="item.q" class="mb-4 md:mb-6">
                    <button
                        class="w-full flex justify-between items-center bg-[#1e1b3ab3] border border-[#393a5a] hover:!border-[#6e44ff] rounded-xl px-4 md:px-8 py-4 md:py-6 text-left text-white font-bold text-lg md:text-xl focus:outline-none transition"
                        @click="toggle(idx)">
                        <div class="flex flex-col flex-1 text-left">
                            <div class="flex items-center justify-between">
                                <span class=" text-base">{{ item.q }}</span>
                                <svg :class="openIndex === idx ? 'rotate-180' : ''"
                                    class="w-7 h-7 text-[#a259ff] transition-transform duration-200" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <transition name="faq-fade">
                                <span v-if="openIndex === idx"
                                    class="mt-4 text-[#b8b8d0] text-base font-normal block">{{ item.a }}</span>
                            </transition>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const openIndex = ref(-1)
const toggle = idx => {
    openIndex.value = openIndex.value === idx ? -1 : idx
}
const faqs = [
    { q: '奖励是如何运作的?', a: '奖励通过协议自动分发，无需手动领取。' },
    { q: '我需要领取奖励吗?', a: '不需要，奖励会自动发放到你的钱包。' },
    { q: '奖励金额是如何计算的?', a: '根据你持有的 USDT 数量占比，系统自动分配。' },
    { q: '$BOUNTY 兼容哪些钱包?', a: '兼容主流去中心化钱包，如 MetaMask、Trust Wallet 等。' },
    { q: '我需要持有多少 USDT 才能获得奖励?', a: '持有任意数量 USDT 即可参与奖励分配。' },
    { q: '我该如何查看我的奖励?', a: '你可以在区块链浏览器或钱包中查看奖励明细。' },
]
</script>

<style scoped>
.faq-fade-enter-active,
.faq-fade-leave-active {
    transition: all 0.5s cubic-bezier(.4, 0, .2, 1);
}

.faq-fade-enter-from,
.faq-fade-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}

.faq-fade-enter-to,
.faq-fade-leave-from {
    opacity: 1;
    max-height: 200px;
    transform: translateY(0);
}
</style>
