<template>
    <section class="w-full py-12 md:py-24 px-0">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-8">
            <!-- 左侧内容 -->
            <div class="flex-1 min-w-0 md:min-w-[380px]">
                <h2 class="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center lg:text-left">
                    <span class="text-white">{{ t('about.title') }}</span>
                </h2>
                <p class="text-[#b8b8d0] text-base mb-6 text-center lg:text-left">
                    {{ t('about.desc1') }}
                </p>
                <p class="text-[#b8b8d0] text-base mb-10 text-center lg:text-left">
                    {{ t('about.desc2') }}
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-0">
                    <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                        <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <p class="text-white font-bold text-lg mb-1">{{ t('about.card1.title') }}</p>
                        <p class="text-[#b8b8d0] text-sm text-center">{{ t('about.card1.desc') }}</p>
                    </div>
                    <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                        <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path d="M12 8v8m0 0l-3-3m3 3l3-3"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p class="text-white font-bold text-lg mb-1">{{ t('about.card2.title') }}</p>
                        <p class="text-[#b8b8d0] text-sm text-center">{{ t('about.card2.desc') }}</p>
                    </div>
                    <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                        <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 8v4l3 3"></path>
                        </svg>
                        <p class="text-white font-bold text-lg mb-1">{{ t('about.card3.title') }}</p>
                        <p class="text-[#b8b8d0] text-sm text-center">{{ t('about.card3.desc') }}</p>
                    </div>
                </div>
            </div>
            <!-- 右侧卡片 -->
            <div class="flex-1 flex justify-center w-full lg:w-auto">
                <div class="relative rounded-2xl bg-[#1e1b3ab3] border border-[#393a5a] shadow-lg px-6 md:px-12 py-8 md:py-10 w-full max-w-[340px] md:min-w-[340px]"
                    style="box-shadow:0 0 40px 0 #7a5cff44;">
                    <img src="@/assets/logo.webp" alt="wallet" class="w-20 h-20 mx-auto mb-6" />
                    <p class="text-[#c94fff] text-2xl font-bold text-center mb-2">$BOUNTY</p>
                    <p class="text-[#b8b8d0] text-center mb-8">{{ t('about.right.desc') }}</p>
                    <div class="flex flex-col gap-4">
                        <div class="flex justify-between items-center bg-[#23243a] rounded-lg px-4 py-2">
                            <span class="text-[#b8b8d0]">{{ t('about.right.every') }}</span>
                            <span class="text-[#2ee6d6] font-bold">60 {{ t('about.right.minute') }}</span>
                        </div>
                        <div class="flex justify-between items-center bg-[#23243a] rounded-lg px-4 py-2">
                            <span class="text-[#b8b8d0]">{{ t('about.right.no_claim') }}</span>
                            <span class="text-[#2ee6d6] font-bold">{{ t('about.right.auto') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
