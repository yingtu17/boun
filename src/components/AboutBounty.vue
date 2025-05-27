<template>
    <section class="w-full py-24 mt-10">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-col items-center mb-14">
                <h2 class="text-4xl font-bold mb-2 bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] text-transparent bg-clip-text">
                    关于 BOUNTY 奖励
                </h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#6e44ff] to-[#ff44a4]"></div>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <!-- 左侧内容 -->
                <div class="flex-1 min-w-[380px]">
                    <h2 class="text-4xl font-bold mb-8">
                        <span class="text-white">以 $BOUNTY 赚取被动收入</span>
                    </h2>
                    <p class="text-[#b8b8d0] text-base mb-6">
                        BOUNTY 协议正在革新加密持有者赚取被动收入的方式。通过我们验证的奖励系统，8% 的交易税将 100% 自动分发给 USDT 持有者，每 60 分钟一次。
                    </p>
                    <p class="text-[#b8b8d0] text-base mb-10">
                        你持有的 USDT 越多，获得的 $BOUNTY 奖励越多——就是这么简单。无需质押，无需锁仓，只需持有即可赚取。我们的协议将根据系统设计自动分发。
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                            <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <p class="text-white font-bold text-lg mb-1">60 分钟奖励</p>
                            <p class="text-[#b8b8d0] text-sm text-center">每 60 分钟自动接收 $BOUNTY 奖励</p>
                        </div>
                        <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                            <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M12 8v8m0 0l-3-3m3 3l3-3"></path>
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <p class="text-white font-bold text-lg mb-1">最高回报</p>
                            <p class="text-[#b8b8d0] text-sm text-center">8% 交易税重新分配给所有持有者</p>
                        </div>
                        <div class="rounded-xl bg-[#1e1b3ab3] border border-[#393a5a] px-8 py-8 flex flex-col items-center">
                            <svg class="w-8 h-8 text-[#a259ff] mb-2" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 8v4l3 3"></path>
                            </svg>
                            <p class="text-white font-bold text-lg mb-1">安全 & 透明</p>
                            <p class="text-[#b8b8d0] text-sm text-center">100% 链上验证分发，无任何例外</p>
                        </div>
                    </div>
                </div>
                <!-- 右侧卡片 -->
                <div class="flex-1 flex justify-center">
                    <div class="relative rounded-2xl bg-[#1e1b3ab3] border border-[#393a5a] shadow-lg px-12 py-10 min-w-[340px] max-w-[400px] w-full"
                        style="box-shadow:0 0 40px 0 #7a5cff44;">
                        <img src="@/assets/logo.webp" alt="wallet" class="w-20 h-20 mx-auto mb-6" />
                        <p class="text-[#c94fff] text-2xl font-bold text-center mb-2">$BOUNTY</p>
                        <p class="text-[#b8b8d0] text-center mb-8">区块链上终极奖励代币</p>
                        <div class="flex flex-col gap-4">
                            <div class="flex justify-between items-center bg-[#23243a] rounded-lg px-4 py-2">
                                <span class="text-[#b8b8d0]">每隔:</span>
                                <span class="text-[#2ee6d6] font-bold">60 分钟</span>
                            </div>
                            <div class="flex justify-between items-center bg-[#23243a] rounded-lg px-4 py-2">
                                <span class="text-[#b8b8d0]">无需领取:</span>
                                <span class="text-[#2ee6d6] font-bold">自动</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
