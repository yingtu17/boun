<script setup>
import RankingTable from '@/components/RankingTable.vue';
import CreditBonusInfo from '@/components/CreditBonusInfo.vue';
import DefiPoolInfo from '@/components/DefiPoolInfo.vue';
import AccordionFaq from '@/components/AccordionFaq.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div class="min-h-screen py-8 md:py-16 px-4 md:px-8">
        <div class="flex-1 w-full max-w-10/12 mx-auto px-3 md:px-6">
            <h1 class="text-2xl md:text-3xl font-bold text-[#b259ff] mb-2 md:mb-4">{{ t('policy.title') }}</h1>
            <p class="text-[#b8b8d0] text-sm md:text-base mb-6 md:mb-12">{{ t('policy.desc') }}</p>
        </div>
        <div class="max-w-4xl mx-auto px-2 md:px-0">
            <RankingTable />
            <CreditBonusInfo />
            <DefiPoolInfo />
            <AccordionFaq />
        </div>
    </div>
</template>

<style scoped></style>
