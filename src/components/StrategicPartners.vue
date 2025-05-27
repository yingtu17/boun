<template>
    <section class="w-full py-24 px-0 bg-[#1a1832]">
        <div class="max-w-[1400px] mx-auto px-4">
            <div class="flex flex-col items-center mb-14">
                <h2 class="text-3xl md:text-4xl font-bold mb-2 text-[#b259ff] text-center">Strategic Partners</h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#a259ff] to-[#c94fff]"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div v-for="partner in partners" :key="partner.name"
                    class="bg-white rounded-lg flex items-center justify-center h-24 px-8">
                    <img :src="partner.logo" :alt="partner.name" class="max-h-12 max-w-full object-contain" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import certikLogo from '@/assets/home/certik.png'
import tetherLogo from '@/assets/home/tether.png'
import polygonLogo from '@/assets/home/polygon.png'
import binanceLogo from '@/assets/home/binance.png'
import lloydsLogo from '@/assets/home/lloyds.png'
import pancakeswapLogo from '@/assets/home/pancake.png'
import slowmistLogo from '@/assets/home/slowmist.png'
import coinbaseLogo from '@/assets/home/coinbase.png'
import bitgoLogo from '@/assets/home/bitgo.png'
import unionpayLogo from '@/assets/home/unionpay.png'
import mastercardLogo from '@/assets/home/mastercard.png'
import visaLogo from '@/assets/home/visa.png'


const partners = [
    { name: 'CERTIK', logo: certikLogo },
    { name: 'tether', logo: tetherLogo },
    { name: 'polygon', logo: polygonLogo },
    { name: 'BINANCE', logo: binanceLogo },
    { name: 'LLOYDS', logo: lloydsLogo },
    { name: 'PancakeSwap', logo: pancakeswapLogo },
    { name: 'SLOWMIST', logo: slowmistLogo },
    { name: 'coinbase', logo: coinbaseLogo },
    { name: 'BitGo', logo: bitgoLogo },
    { name: 'UnionPay', logo: unionpayLogo },
    { name: 'MasterCard', logo: mastercardLogo },
    { name: 'VISA', logo: visaLogo },
]
</script>
