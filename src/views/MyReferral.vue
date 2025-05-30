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
            alert('链接已复制')
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
            <p class="text-white/60 text-sm mb-6">分享您的推荐链接，奖励不断增长！</p>

            <!-- 标签页切换 -->
            <div class="flex rounded-full bg-[#1e1b3a] p-1 mb-6">
                <button @click="activeTab = 'share'" class="flex-1 py-3 rounded-full text-center transition-colors"
                    :class="activeTab === 'share' ? 'bg-white text-[#1e1b3a] font-semibold' : 'text-white'">分享中</button>
                <button @click="activeTab = 'control'" class="flex-1 py-3 rounded-full text-center transition-colors"
                    :class="activeTab === 'control' ? 'bg-white text-[#1e1b3a] font-semibold' : 'text-white'">控制台</button>
            </div>

            <div v-if="activeTab === 'share'">
                <!-- 推荐奖励说明 -->
                <div class="bg-[#1e1b3a] rounded-xl p-5 mb-6">
                    <h3 class="text-white font-semibold text-lg mb-3">推荐奖励</h3>
                    <p class="text-white/60 text-sm mb-4">赚取最多 10 级推荐兑换佣金奖励，佣金比例将根据您的当前等级而有所不同。</p>

                    <!-- 冠军 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">冠军（100,000 - 299,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：9%</div>
                            <div>等级 2：4.5%</div>
                            <div>等级 3：3.5%</div>
                            <div>等级 4：3%</div>
                            <div>等级 5：2.5%</div>
                            <div>等级 6：2%</div>
                            <div>等级 7：1.5%</div>
                            <div>等级 8：1%</div>
                            <div>等级 9：0.75%</div>
                            <div>等级 10：0.5%</div>
                        </div>
                    </div>

                    <!-- 精英 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">精英（50,000 - 99,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：8%</div>
                            <div>等级 2：4%</div>
                            <div>等级 3：3%</div>
                            <div>等级 4：2.5%</div>
                            <div>等级 5：2%</div>
                            <div>等级 6：1.5%</div>
                            <div>等级 7：1%</div>
                            <div>等级 8：0.75%</div>
                            <div>等级 9：0.5%</div>
                            <div>等级 10：0.25%</div>
                        </div>
                    </div>

                    <!-- 专业 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">专业（30,000 - 49,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：7%</div>
                            <div>等级 2：3.5%</div>
                            <div>等级 3：2.5%</div>
                            <div>等级 4：2%</div>
                            <div>等级 5：1.5%</div>
                            <div>等级 6：1%</div>
                            <div>等级 7：0.75%</div>
                            <div>等级 8：0.5%</div>
                            <div>等级 9：0.25%</div>
                            <div>等级 10：0.1%</div>
                        </div>
                    </div>

                    <!-- 其他等级（可展开更多） -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">新星（10,000 - 29,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：6%</div>
                            <div>等级 2：3%</div>
                            <div>等级 3：2%</div>
                            <div>等级 4：1.5%</div>
                            <div>等级 5：1%</div>
                            <div>等级 6：0.75%</div>
                            <div>等级 7：0.5%</div>
                            <div>等级 8：0.25%</div>
                            <div>等级 9：0.1%</div>
                            <div>等级 10：0.05%</div>
                        </div>
                    </div>

                    <!-- 探索者 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">探索者（5,000 - 9,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：5%</div>
                            <div>等级 2：2.5%</div>
                            <div>等级 3：1.5%</div>
                            <div>等级 4：1%</div>
                            <div>等级 5：0.75%</div>
                            <div>等级 6：0.5%</div>
                            <div>等级 7：0.25%</div>
                            <div>等级 8：0.1%</div>
                            <div>等级 9：0.05%</div>
                            <div>等级 10：0.02%</div>
                        </div>
                    </div>

                    <!-- 初学者 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">初学者（1,000 - 4,999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：4%</div>
                            <div>等级 2：2%</div>
                            <div>等级 3：1.5%</div>
                            <div>等级 4：1%</div>
                            <div>等级 5：0.5%</div>
                            <div>等级 6：0.25%</div>
                            <div>等级 7：0.1%</div>
                            <div>等级 8：0.05%</div>
                            <div>等级 9：0.02%</div>
                            <div>等级 10：0.01%</div>
                        </div>
                    </div>

                    <!-- 新手 -->
                    <div class="mb-5">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">新手（100 - 999）</span>
                        </div>
                        <div class="text-white/70 text-sm grid grid-cols-2 gap-x-6 gap-y-1 pl-5">
                            <div>等级 1：3%</div>
                            <div>等级 2：1.5%</div>
                            <div>等级 3：1%</div>
                            <div>等级 4：0.5%</div>
                            <div>等级 5：0.25%</div>
                            <div>等级 6：0.1%</div>
                            <div>等级 7：0.05%</div>
                            <div>等级 8：0.02%</div>
                            <div>等级 9：0.01%</div>
                            <div>等级 10：0.005%</div>
                        </div>
                    </div>

                    <!-- 见证奖励增长 -->
                    <div class="mb-2">
                        <div class="flex items-center mb-2">
                            <div class="w-2 h-2 bg-[#844aff] rounded-full mr-3"></div>
                            <span class="text-white font-medium">见证奖励增长</span>
                        </div>
                        <p class="text-white/70 text-sm pl-5">
                            邀请越多，赚得越多！通过推荐控制台跟踪您的成果，奖励将以 GOMINING 代币形式发放到您的虚拟钱包中。
                        </p>
                    </div>
                </div>

                <!-- 邀请朋友区块 -->
                <div class="bg-[#1e1b3a] rounded-xl p-5 mb-6">
                    <h3 class="text-white text-lg font-semibold mb-2">邀请朋友</h3>
                    <p class="text-white/60 text-sm mb-4">
                        朋友使用您的推荐码注册后将成为您的下线推荐人。您将从所有兑换中获得佣金奖励。
                    </p>

                    <div class="mb-4">
                        <p class="text-white text-sm mb-2">推荐链接</p>
                        <div class="bg-[#2a2838] rounded-lg p-4 break-all text-white/70">
                            https://bountyaimine.com?inviteCode=5Uom66T0
                        </div>
                    </div>

                    <button @click="copyReferralLink"
                        class="w-full py-3 rounded-full bg-gradient-to-r from-[#844aff] to-[#ff44a4] text-white font-medium">
                        分享链接
                    </button>
                </div>
            </div>

            <div v-if="activeTab === 'control'">
                <!-- 控制台标签页内容 -->
                <!-- 推荐数据统计卡片 -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-[#1e1b3a] rounded-xl p-4">
                        <p class="text-white font-medium mb-1">我的团队</p>
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
                        <p class="text-white font-medium mb-1">已邀请好友</p>
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
                        <p class="text-white font-medium mb-1">推荐兑换</p>
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
                        <p class="text-white font-medium mb-1">已获得奖励</p>
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
                        <span class="text-base md:text-lg font-bold text-white">推荐奖励 <span class="text-[#b8b8d0]">0.0000 $BOUNTY</span></span>
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
