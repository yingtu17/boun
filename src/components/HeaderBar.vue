<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LangSelect from '@/components/LangSelect.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const showLangSelector = ref(false)
const { t, locale } = useI18n()

const onScroll = () => {
    isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    if (isMenuOpen.value === false) {
        showLangSelector.value = false
    }
}

const closeMenu = () => {
    isMenuOpen.value = false
    showLangSelector.value = false
}

const toggleLangSelector = () => {
    showLangSelector.value = !showLangSelector.value
}

const closeLangSelector = () => {
    showLangSelector.value = false
}

// 新增：切换语言的方法
const changeLanguage = (lang) => {
    locale.value = lang
    closeLangSelector()
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})
</script>

<template>
    <header class="fixed top-0 left-0 w-full z-50 border-b border-transparent transition-colors duration-300"
        :style="{ backgroundColor: isScrolled || isMenuOpen ? '#13101e' : '#0d0b1600' }">
        <div class="max-w-[1400px] mx-auto flex items-center h-[64px] justify-between px-4">
            <RouterLink to="/" class="flex items-center gap-2 no-underline" @click="closeMenu">
                <img src="@/assets/logo.webp" alt="Bounty Logo" class="w-8 h-8" />
                <span class="text-white text-xs font-semibold tracking-wider">$BOUNTY</span>
            </RouterLink>

            <!-- 桌面导航 -->
            <nav class="hidden md:flex gap-9 ml-10">
                <RouterLink to="/" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/' ? 'text-white font-semibold' : ''">{{ t('nav.home') }}</RouterLink>
                <RouterLink to="/rewards" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/rewards' ? 'text-white font-semibold' : ''">{{ t('nav.rewards') }}</RouterLink>
                <RouterLink to="/nft" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/nft' ? 'text-white font-semibold' : ''">{{ t('nav.nft') }}</RouterLink>
                <RouterLink to="/swap" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/swap' ? 'text-white font-semibold' : ''">{{ t('nav.swap') }}</RouterLink>
                <RouterLink to="/policy" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/policy' ? 'text-white font-semibold' : ''">{{ t('nav.policy') }}</RouterLink>
                <RouterLink to="/referral" exact-active-class="active"
                    class="text-[#abc4ff80] hover:text-white no-underline font-medium text-xs transition-colors duration-200"
                    :class="$route.path === '/referral' ? 'text-white font-semibold' : ''">{{ t('nav.referral') }}</RouterLink>
            </nav>

            <div class="flex items-center gap-2 md:gap-5">
                <button
                    class="bg-gradient-to-r from-[#6e44ff] to-[#ff44a4] text-white rounded-full px-4 md:px-6 py-2 text-xs font-medium shadow-[0_2px_16px_0_rgba(201,79,255,0.18)] transition-all duration-200 hover:from-[#ff44a4] hover:to-[#c94fff]">
                    {{ t('home.connect') }}
                </button>
                <LangSelect class="hidden md:flex ml-2" />
                <!-- 汉堡菜单按钮 -->
                <button class="md:hidden p-2" @click="toggleMenu" aria-label="Menu">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- 移动端导航菜单 -->
        <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-[#13101e] z-40">
            <!-- 移动端导航头部 - 添加 logo 和关闭按钮 -->
            <div class="flex items-center justify-between px-4 h-[64px] border-b border-[#393a5a]">
                <div class="flex items-center gap-2">
                    <img src="@/assets/logo.webp" alt="Bounty Logo" class="w-8 h-8" />
                    <span class="text-white text-sm font-semibold tracking-wider">$BOUNTY</span>
                </div>
                <button @click="closeMenu" class="p-2">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <!-- 移动端导航链接 -->
            <div class="flex flex-col">
                <RouterLink @click="closeMenu" to="/"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.home') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <RouterLink @click="closeMenu" to="/rewards"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/rewards' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.rewards') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <RouterLink @click="closeMenu" to="/nft"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/nft' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.nft_market') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <RouterLink @click="closeMenu" to="/swap"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/swap' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.swap') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <RouterLink @click="closeMenu" to="/policy"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/policy' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.policy') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <RouterLink @click="closeMenu" to="/referral"
                    class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a]"
                    :class="$route.path === '/referral' ? 'bg-[#1e1b3a33]' : ''">
                    {{ t('nav.referral') }}
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </RouterLink>
                <button @click="toggleLangSelector" 
                     class="flex items-center justify-between px-6 py-6 text-white font-medium border-b border-[#393a5a] w-full text-left">
                    {{ t('nav.language') }}
                    <div class="text-[#ff44a4]">{{ t('nav.language_current') }}</div>
                </button>
                
                <!-- 移动端语言选择器 - 参照图片样式修改 -->
                <div v-if="showLangSelector" class="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-end">
                    <div class="bg-[#2a2838] w-full rounded-t-[20px] pb-4">
                        <!-- 顶部标题和关闭按钮 -->
                        <div class="flex items-center justify-between px-5 py-4">
                            <div class="text-white font-medium text-lg">系统语言</div>
                            <button @click="closeLangSelector" class="p-2">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- 两列语言选项布局 -->
                        <div class="px-5 grid grid-cols-2 gap-4">
                            <!-- 每种语言选项 -->
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('en')">
                                <img src="@/assets/us.png" alt="English" class="w-7 h-7 rounded-full" />
                                <span class="text-white">English</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('de')">
                                <img src="@/assets/de.png" alt="Deutsch" class="w-7 h-7 rounded-full" />
                                <span class="text-white">Deutsch</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('fr')">
                                <img src="@/assets/fr.png" alt="Français" class="w-7 h-7 rounded-full" />
                                <span class="text-white">Français</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('pt')">
                                <img src="@/assets/pt.png" alt="Português" class="w-7 h-7 rounded-full" />
                                <span class="text-white">Português</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('zh-CN')">
                                <img src="@/assets/cn.png" alt="简体中文" class="w-7 h-7 rounded-full" />
                                <span class="text-white">简体中文</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('zh-TW')">
                                <img src="@/assets/tw.png" alt="繁体中文" class="w-7 h-7 rounded-full" />
                                <span class="text-white">繁體中文</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('ja')">
                                <img src="@/assets/jp.png" alt="日本語" class="w-7 h-7 rounded-full" />
                                <span class="text-white">日本語</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('ko')">
                                <img src="@/assets/kr.png" alt="한국어" class="w-7 h-7 rounded-full" />
                                <span class="text-white">한국어</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('hi')">
                                <img src="@/assets/in.png" alt="हिंदी" class="w-7 h-7 rounded-full" />
                                <span class="text-white">हिंदी</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('id')">
                                <img src="@/assets/id.png" alt="Indonesia" class="w-7 h-7 rounded-full" />
                                <span class="text-white">Indonesia</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('th')">
                                <img src="@/assets/th.png" alt="ภาษาไทย" class="w-7 h-7 rounded-full" />
                                <span class="text-white">ภาษาไทย</span>
                            </button>
                            <button class="flex items-center space-x-3 py-3" @click="changeLanguage('vi')">
                                <img src="@/assets/vn.png" alt="tiếng Việt" class="w-7 h-7 rounded-full" />
                                <span class="text-white">tiếng Việt</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="h-[64px]"></div>
</template>
