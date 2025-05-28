<template>
    <section class="w-full py-4 md:py-8 px-0">
        <div class="max-w-[800px] mx-auto">
            <div>
                <div v-for="(item, idx) in faqItems" :key="item.q" class="mb-3 md:mb-4">
                    <button
                        class="w-full flex justify-between items-center bg-[#1e1b3ab3] border border-[#393a5a] hover:!border-[#6e44ff] rounded-xl px-4 md:px-8 py-3 md:py-5 text-left text-white font-medium focus:outline-none transition"
                        @click="toggle(idx)">
                        <div class="flex flex-col flex-1 text-left">
                            <div class="flex items-center justify-between">
                                <span class="text-sm md:text-base">{{ item.q }}</span>
                                <svg :class="openIndex === idx ? 'rotate-180' : ''"
                                    class="w-5 h-5 md:w-6 md:h-6 text-[#6e44ff] transition-transform duration-200 flex-shrink-0 ml-2" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <transition name="faq-fade">
                                <div v-if="openIndex === idx" class="mt-3 md:mt-4 text-[#b8b8d0] text-xs md:text-sm font-normal block">
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
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const openIndex = ref(-1)
const toggle = idx => {
    openIndex.value = openIndex.value === idx ? -1 : idx
}

const props = defineProps({
    faqData: {
        type: Array,
        required: false,
        default: () => []
    }
});

const defaultFaqData = computed(() => [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') }
]);

const faqItems = computed(() => props.faqData.length ? props.faqData : defaultFaqData.value);
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
