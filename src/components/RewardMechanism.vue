<template>
    <section class="w-full py-12 md:py-24 px-0 bg-[#211e38]">
        <div class="max-w-[1400px] mx-auto px-4">
            <div class="flex flex-col items-center mb-8 md:mb-14">
                <h2 class="text-3xl md:text-4xl font-bold mb-2 text-[#b259ff] text-center">奖励运作机制</h2>
                <div class="w-32 h-1 rounded-full bg-gradient-to-r from-[#a259ff] to-[#c94fff]"></div>
            </div>
            <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12 bg-[#26234a] rounded-2xl p-6 md:p-12">
                <!-- 左侧图片 -->
                <div class="flex-1 flex justify-center items-center md:min-w-[320px] order-2 lg:order-1">
                    <img src="@/assets/home/airdrop.png" alt="airdrop" class="max-w-full w-[250px] md:w-[400px]" />
                </div>
                <!-- 右侧内容 -->
                <div class="flex-1 flex flex-col justify-center items-start order-1 lg:order-2">
                    <h3 class="text-3xl font-extrabold text-white mb-6">每 60 分钟自动获得 $BOUNTY 奖励</h3>
                    <p class="text-[#b8b8d0] text-base mb-8">
                        BOUNTY 协议对所有买入、卖出和转账征收 8% 的交易税，并将其 100% 按持有比例分发给所有 USDT 持有者。
                    </p>
                    <ul class="flex flex-col gap-6">
                        <li class="flex items-start gap-4">
                            <span
                                class="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6e44ff] to-[#ff44a4] text-white font-bold text-lg">1</span>
                            <div>
                                <p class="text-white font-bold text-lg">加入并持有</p>
                                <p class="text-[#b8b8d0] text-sm">在你的钱包中获取并持有 USDT</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <span
                                class="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6e44ff] to-[#ff44a4] text-white font-bold text-lg">2</span>
                            <div>
                                <p class="text-white font-bold text-lg">创造收入</p>
                                <p class="text-[#b8b8d0] text-sm">从所有交易中征收的 8% 税将转换为 $BOUNTY</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <span
                                class="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#6e44ff] to-[#ff44a4] text-white font-bold text-lg">3</span>
                            <div>
                                <p class="text-white font-bold text-lg">接收奖励</p>
                                <p class="text-[#b8b8d0] text-sm">$BOUNTY 每 60 分钟自动分发至你的钱包</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
