<script setup>
import NftCard from '@/components/NftCard.vue';
import NFT1 from '@/assets/nft/NFT1.png';
import NFT2 from '@/assets/nft/NFT2.png';
import NFT3 from '@/assets/nft/NFT3.png';
import NFT4 from '@/assets/nft/NFT4.png';
import NFT5 from '@/assets/nft/NFT5.png';
import NFT6 from '@/assets/nft/NFT6.png';
import NFT7 from '@/assets/nft/NFT7.png';
import NFT8 from '@/assets/nft/NFT8.png';
import NFT9 from '@/assets/nft/NFT9.png';
import NFT10 from '@/assets/nft/NFT10.png';
import NFT11 from '@/assets/nft/NFT11.png';
import NFT12 from '@/assets/nft/NFT12.png';
import NFT13 from '@/assets/nft/NFT13.png';
import NFT14 from '@/assets/nft/NFT14.png';
import NFT15 from '@/assets/nft/NFT15.png';
import NFT16 from '@/assets/nft/NFT16.png';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const nfts = [
	{
		id: 1,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.2%' }),
		price: 200,
		usd: 200,
		image: NFT1,
	},
	{
		id: 2,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.2%' }),
		price: 200,
		usd: 200,
		image: NFT2,
	},
	{
		id: 3,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.5%' }),
		price: 500,
		usd: 500,
		image: NFT3,
	},
	{
		id: 4,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.5%' }),
		price: 500,
		usd: 500,
		image: NFT4,
	},
	{
		id: 5,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.8%' }),
		price: 800,
		usd: 800,
		image: NFT5,
	},
	{
		id: 6,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '0.8%' }),
		price: 800,
		usd: 800,
		image: NFT6,
	},
	{
		id: 7,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '1.0%' }),
		price: 1000,
		usd: 1000,
		image: NFT7,
	},
	{
		id: 8,
		name: 'ELON MUSK',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '1.0%' }),
		price: 1000,
		usd: 1000,
		image: NFT8,
	},
	{
		id: 9,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '1.5%' }),
		price: 2000,
		usd: 2000,
		image: NFT9,
	},
	{
		id: 10,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '1.5%' }),
		price: 2000,
		usd: 2000,
		image: NFT10,
	},
	{
		id: 11,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '5.0%' }),
		price: 5000,
		usd: 5000,
		image: NFT11,
	},
	{
		id: 12,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '5.0%' }),
		price: 5000,
		usd: 5000,
		image: NFT12,
	},
	{
		id: 13,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '8.0%' }),
		price: 8000,
		usd: 8000,
		image: NFT13,
	},
	{
		id: 14,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '8.0%' }),
		price: 8000,
		usd: 8000,
		image: NFT14,
	},
	{
		id: 15,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '10.0%' }),
		price: 10000,
		usd: 10000,
		image: NFT15,
	},
	{
		id: 16,
		name: 'DONALD TRUMP',
		benefit: t('nft.benefit'),
		benefitDesc: t('nft.airdrop_bonus', { percent: '10.0%' }),
		price: 10000,
		usd: 10000,
		image: NFT16,
	},
];
</script>

<template>
	<div class="min-h-screen flex flex-col bg-gradient-to-b">
		<div class="flex-1 w-full max-w-10/12 mx-auto px-0 md:px-6 py-6 md:py-10">
			<h1 class="text-2xl md:text-3xl font-bold text-[#7645f6] mb-2">{{ t('nft.title') }}</h1>
			<p class="mb-6 md:mb-8 text-[#b8b8d0] text-xs md:text-sm">{{ t('nft.desc') }}</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7">
				<NftCard v-for="nft in nfts" :key="nft.id" :nft="nft" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
