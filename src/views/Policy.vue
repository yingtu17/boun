<script setup>
import RankingTable from '@/components/RankingTable.vue';
import CreditBonusInfo from '@/components/CreditBonusInfo.vue';
import DefiPoolInfo from '@/components/DefiPoolInfo.vue';
import AccordionFaq from '@/components/AccordionFaq.vue';
</script>

<template>
    <div class="min-h-screen py-16 px-8">
        <div class="flex-1 w-full max-w-10/12 mx-auto px-6">
            <h1 class="text-3xl font-bold text-[#b259ff] mb-4">信息与政策</h1>
            <p class="text-[#b8b8d0] mb-12">提供重要信息、条款、政策和指南。</p>
        </div>
        <div class="max-w-4xl mx-auto">
            <RankingTable />
            <CreditBonusInfo />
            <DefiPoolInfo />
            <AccordionFaq />
        </div>
    </div>
</template>

<style scoped></style>
