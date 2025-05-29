<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="min-h-screen py-8 px-4 md:px-8">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-2xl md:text-3xl font-bold text-[#b259ff] mb-4">{{ t('referral.title') }}</h1>
            <p class="text-[#b8b8d0] text-sm md:text-base mb-6">{{ t('referral.desc') }}</p>
            
            <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4 md:p-8">
                <h2 class="text-lg md:text-xl font-bold text-white mb-4">{{ t('referral.link_title') }}</h2>
                <div class="flex items-center gap-4">
                    <input type="text" readonly class="flex-1 bg-[#26234a] text-white px-4 py-2 rounded-lg" value="https://example.com/referral-link" />
                    <button class="bg-gradient-to-r from-[#8257f9] to-[#ff44a4] text-white px-4 py-2 rounded-lg">{{ t('referral.copy') }}</button>
                </div>
            </div>

            <div class="mt-8">
                <h2 class="text-lg md:text-xl font-bold text-white mb-4">{{ t('referral.stats_title') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4">
                        <p class="text-[#b8b8d0] text-sm">{{ t('referral.total_referrals') }}</p>
                        <p class="text-white text-xl font-bold">0</p>
                    </div>
                    <div class="bg-[#1e1b3ab3] rounded-xl border border-[#393a5a] p-4">
                        <p class="text-[#b8b8d0] text-sm">{{ t('referral.total_rewards') }}</p>
                        <p class="text-white text-xl font-bold">0 USDT</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
