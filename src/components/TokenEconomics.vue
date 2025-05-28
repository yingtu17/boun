<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <section class="w-full py-12 md:py-24 px-0 bg-[#23213a]">
        <div class="max-w-[1400px] mx-auto px-4">
            <div class="flex flex-col items-center mb-8 md:mb-14">
                <h2
                    class="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-[#a259ff] to-[#c94fff] text-transparent bg-clip-text">
                    {{ t('token.title') }}
                </h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#a259ff] to-[#c94fff]"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                <div
                    class="rounded-2xl border border-[#393a5a] bg-[#1e1b3ab3] hover:!border-[#6e44ff] px-8 py-10 flex flex-col items-center min-h-[180px]">
                    <p
                        class="text-2xl font-bold mb-3 bg-gradient-to-r from-[#a259ff] to-[#c94fff] text-transparent bg-clip-text">
                        {{ t('token.total') }}</p>
                    <p class="text-white text-sm font-semibold text-center">1,000,000,000 $BOUNTY</p>
                </div>
                <div
                    class="rounded-2xl border border-[#393a5a] bg-[#1e1b3ab3] hover:!border-[#6e44ff] px-8 py-10 flex flex-col items-center min-h-[180px]">
                    <p
                        class="text-2xl font-bold mb-3 bg-gradient-to-r from-[#a259ff] to-[#c94fff] text-transparent bg-clip-text">
                        {{ t('token.tax') }}</p>
                    <p class="text-white text-sm font-semibold text-center">{{ t('token.tax_desc') }}</p>
                </div>
                <div
                    class="rounded-2xl border border-[#393a5a] bg-[#1e1b3ab3] hover:!border-[#6e44ff] px-8 py-10 flex flex-col items-center min-h-[180px]">
                    <p
                        class="text-2xl font-bold mb-3 bg-gradient-to-r from-[#a259ff] to-[#c94fff] text-transparent bg-clip-text">
                        {{ t('token.distribution') }}</p>
                    <p class="text-white text-sm font-semibold text-center">{{ t('token.distribution_desc') }}</p>
                </div>
                <div
                    class="rounded-2xl border border-[#393a5a] bg-[#1e1b3ab3] hover:!border-[#6e44ff] px-8 py-10 flex flex-col items-center min-h-[180px]">
                    <p
                        class="text-2xl font-bold mb-3 bg-gradient-to-r from-[#a259ff] to-[#c94fff] text-transparent bg-clip-text">
                        {{ t('token.frequency') }}</p>
                    <p class="text-white text-sm font-semibold text-center">{{ t('token.frequency_desc') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
