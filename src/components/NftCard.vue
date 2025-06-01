<template>
    <div class="flex flex-col rounded-2xl overflow-hidden bg-[#23243a] border border-[#393a5a] shadow-md">
        <div class="relative w-full aspect-square md:h-86 bg-cover bg-center"
            :style="{ backgroundImage: `url('${nft.image}')` }">
            <div class="absolute bottom-0 left-0 right-0 flex-1 flex flex-col px-3 sm:px-5 pt-4 pb-2"
                style="background: linear-gradient(180deg, #0000, #000);">
                <div class="text-xs text-white mb-1">{{ nft.benefit }}</div>
                <div class="flex items-center">
                    <span class="font-bold text-[#6e44ff] text-sm pr-1">•</span>
                    <div class="text-[10px] text-white">{{ nft.benefitDesc }}</div>
                </div>
                <div class="flex items-center mb-1">
                    <span class="font-bold text-white text-sm sm:text-base">{{ nft.name }}</span>
                    <span class="font-bold text-white text-sm sm:text-base px-1">•</span>
                    <img class="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" src="@/assets/nft/bounty.png" alt="">
                    <span class="text-[10px] sm:text-xs text-white font-semibold"> $BOUNTY</span>
                </div>
            </div>
        </div>

        <div class="bg-white px-3 sm:px-5 py-2 sm:py-3">
            <div class="flex items-center gap-1 sm:gap-2">
                <img class="w-3 h-3 sm:w-4 sm:h-4 rounded-full" src="../assets/nft/USDT.png" alt="">
                <span class="text-black text-sm sm:text-base">{{ nft.price }}</span>
            </div>
            <span class="text-[10px] sm:text-xs text-[#6a6b8a]">≈ ${{ nft.usd }}</span>
            <div class="mt-2 w-full">
                <button
                    class="w-full bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] text-white rounded-full px-4 md:px-6 py-2 text-xs font-medium shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:from-[#ff44a4] hover:to-[#c94fff]">
                    {{ $t('nft.buy') }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    nft: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped></style>
