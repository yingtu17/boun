<template>
    <section class="w-full py-8 px-0">
        <div class="max-w-[800px] mx-auto">
            <div class="flex flex-col items-center mb-14">
                <h2 class="text-4xl font-bold mb-2 text-[#b259ff] text-center">常见问题</h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#6e44ff] to-[#ff44a4]"></div>
            </div>
            <div>
                <div v-for="(item, idx) in faqItems" :key="item.q" class="mb-4">
                    <button
                        class="w-full flex justify-between items-center bg-[#1e1b3ab3] border border-[#393a5a] hover:!border-[#6e44ff] rounded-xl px-8 py-5 text-left text-white font-medium focus:outline-none transition"
                        @click="toggle(idx)">
                        <div class="flex flex-col flex-1 text-left">
                            <div class="flex items-center justify-between">
                                <span>{{ item.q }}</span>
                                <svg :class="openIndex === idx ? 'rotate-180' : ''"
                                    class="w-6 h-6 text-[#6e44ff] transition-transform duration-200" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <transition name="faq-fade">
                                <div v-if="openIndex === idx" class="mt-4 text-[#b8b8d0] text-sm font-normal block">
                                    {{ item.a }}
                                </div>
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

defineProps({
    faqItems: {
        type: Array,
        required: true,
        default: () => [
            { 
                q: 'PoS Vol 是一个质押池服务，提供用户...', 
                a: 'PoS Vol 是一个由社区驱动的质押池服务。用户可以参与质押，并从中获取收益。我们的协议确保所有交易公平透明，并且在区块链上可以验证。' 
            },
            { 
                q: '申计费根据总金额计算...', 
                a: '费用计算基于您参与的总金额。我们采用累进制费率结构，资金量越大，费率越优惠。具体费率表可以在平台上查询，所有费用都会在交易前明确显示。' 
            },
            { 
                q: '用户在获得一定利息后...', 
                a: '用户在达到特定收益门槛后，可以获得额外的忠诚度奖励。这些奖励会自动计入您的账户，并可以随时提取或复投。' 
            },
            { 
                q: '建议用户持续跟踪其收益...', 
                a: '我们提供全面的收益跟踪工具，让您实时了解收益情况。通过仪表板，您可以查看历史性能、当前收益率和预测分析。' 
            },
            { 
                q: '我们保留随时修改或更新...', 
                a: '我们可能会不时更新服务条款和政策，以反映市场变化或监管要求。任何重大变更都会提前通知用户，并给予合理的过渡期。' 
            },
            { 
                q: '使用本平台即表示您承认并同意...', 
                a: '使用我们的平台即表示您同意我们的服务条款、隐私政策和相关法规。用户需对自己的账户安全和交易决策负责。' 
            },
        ]
    }
});
</script>

<style scoped>
.faq-fade-enter-active, .faq-fade-leave-active {
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.faq-fade-enter-from, .faq-fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
.faq-fade-enter-to, .faq-fade-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}
</style>
