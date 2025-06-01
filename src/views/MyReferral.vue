<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeTab = ref('share') // 'share' 或 'control'

const copyReferralLink = () => {
    // 实现复制链接功能
    const linkText = "https://bountyaimine.com?inviteCode=5Uom66T0"
    navigator.clipboard.writeText(linkText)
        .then(() => {
            alert(t('referral.copy_success'))
        })
        .catch(err => {
            console.error('无法复制链接: ', err)
        })
}
</script>

<template>
    <div class="min-h-screen px-4 py-6">
        <div class="max-w-[500px] mx-auto">
            <!-- 标题部分 -->
            <h1 class="text-[#b259ff] text-3xl font-bold mb-2">{{ t('referral.title') }}</h1>
            <p class="text-white/60 text-sm mb-6">{{ t('referral.subtitle') }}</p>

            <!-- 标签页切换 -->
            <div class="flex rounded-full bg-[#1e1b3a] p-1 mb-6">
                <button @click="activeTab = 'share'" class="flex-1 py-3 rounded-full text-center transition-colors"
                    :class="activeTab === 'share' ? 'bg-white text-[#1e1b3a] font-semibold' : 'text-white'">
                    {{ t('referral.tabs.share') }}</button>
                <button @click="activeTab = 'control'" class="flex-1 py-3 rounded-full text-center transition-colors"
                    :class="activeTab === 'control' ? 'bg-white text-[#1e1b3a] font-semibold' : 'text-white'">
                    {{ t('referral.tabs.control') }}</button>
            </div>

            <div v-if="activeTab === 'share'">
                <!-- 推荐奖励说明 -->
                <div class="bg-[#1e1b3a] rounded-xl p-5 mb-6">
                    <h3 class="text-white font-semibold text-lg mb-3">{{ t('referral.rewards.title') }}</h3>
                    <p class="text-white/60 text-sm mb-4">{{ t('referral.rewards.description') }}</p>

                    <!-- 冠军 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.champion') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '9%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '4.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '3.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '3%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '2.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '2%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.75%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.5%' }) }}</div>
                        </div>
                    </div>

                    <!-- 精英 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.elite') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '8%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '4%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '3%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '2.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '2%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.75%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.25%' }) }}</div>
                        </div>
                    </div>

                    <!-- 专业 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.professional') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '7%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '3.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '2.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '2%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '0.75%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.25%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.1%' }) }}</div>
                        </div>
                    </div>

                    <!-- 其他等级（可展开更多） -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.rookie') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '6%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '3%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '2%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '0.75%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.25%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.05%' }) }}</div>
                        </div>
                    </div>

                    <!-- 探索者 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.explorer') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '2.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '0.75%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '0.25%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.05%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.02%' }) }}</div>
                        </div>
                    </div>

                    <!-- 初学者 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.beginner') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '4%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '2%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '0.25%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '0.1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.05%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.02%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.01%' }) }}</div>
                        </div>
                    </div>

                    <!-- 新手 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.levels.novice') }}</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>{{ t('referral.rewards.level', { level: 1, percent: '3%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 2, percent: '1.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 3, percent: '1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 4, percent: '0.5%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 5, percent: '0.25%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 6, percent: '0.1%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 7, percent: '0.05%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 8, percent: '0.02%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 9, percent: '0.01%' }) }}</div>
                            <div>{{ t('referral.rewards.level', { level: 10, percent: '0.005%' }) }}</div>
                        </div>
                    </div>

                    <!-- 见证奖励增长 -->
                    <div class="mb-2">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">{{ t('referral.rewards.growth.title') }}</span>
                        </div>
                        <p class="text-white/70 text-sm pl-5">
                            {{ t('referral.rewards.growth.description') }}
                        </p>
                    </div>
                </div>

                <!-- 邀请朋友区块 -->
                <div class="bg-[#1e1b3a] rounded-xl p-5 mb-6">
                    <h3 class="text-white text-lg font-semibold mb-2">{{ t('referral.invite.title') }}</h3>
                    <p class="text-white/60 text-sm mb-4">
                        {{ t('referral.invite.description') }}
                    </p>

                    <div class="mb-4">
                        <p class="text-white text-sm mb-2">{{ t('referral.invite.link') }}</p>
                        <div class="bg-[#2a2838] rounded-lg p-4 break-all text-white/70">
                            https://bountyaimine.com?inviteCode=5Uom66T0
                        </div>
                    </div>

                    <button @click="copyReferralLink"
                        class="w-full py-3 rounded-full bg-gradient-to-r from-[#844aff] to-[#ff44a4] text-white font-medium">
                        {{ t('referral.invite.share') }}
                    </button>
                </div>
            </div>

            <div v-if="activeTab === 'control'">
                <!-- 控制台标签页内容 -->
                <!-- 推荐数据统计卡片 -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-[#1e1b3a] rounded-xl p-4">
                        <p class="text-white font-medium mb-1">{{ t('referral.stats.team') }}</p>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-[#ff6b22] rounded-full flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span class="text-2xl font-bold text-white">3</span>
                        </div>
                    </div>
                    <div class="bg-[#1e1b3a] rounded-xl p-4">
                        <p class="text-white font-medium mb-1">{{ t('referral.stats.invited') }}</p>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-[#ff6b22] rounded-full flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                            <span class="text-2xl font-bold text-white">0</span>
                        </div>
                    </div>
                    <div class="bg-[#1e1b3a] rounded-xl p-4">
                        <p class="text-white font-medium mb-1">{{ t('referral.stats.exchanges') }}</p>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-[#844aff] rounded-full flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span class="text-2xl font-bold text-white">0.0000</span>
                        </div>
                    </div>
                    <div class="bg-[#1e1b3a] rounded-xl p-4">
                        <p class="text-white font-medium mb-1">{{ t('referral.stats.rewards') }}</p>
                        <div class="flex items-center">
                            <div class="w-8 h-8 bg-[#844aff] rounded-full flex items-center justify-center mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span class="text-2xl font-bold text-white">0.0000</span>
                        </div>
                    </div>
                </div>

                <div class="flex-1 rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] flex flex-col overflow-hidden">
                    <div class="px-4 md:px-8 py-3 md:py-4 rounded-t-xl flex flex-col">
                        <span class="text-base md:text-lg font-bold text-white">{{ t('referral.rewards.title') }} <span class="text-[#b8b8d0]">0.0000 $BOUNTY</span></span>
                    </div>
                    <div class="flex flex-1 flex-col items-center justify-center min-h-[200px] md:min-h-[300px]">
                        <img src="@/assets/logo.webp" alt="empty"
                            class="w-16 md:w-24 h-16 md:h-24 mb-3 md:mb-4 opacity-80" />
                        <span class="text-[#b8b8d0] text-xs md:text-sm">{{ t('rewards.no_data') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
