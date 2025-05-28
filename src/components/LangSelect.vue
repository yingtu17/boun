<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import deFlag from '@/assets/DE.png'
import enFlag from '@/assets/US.png'
import frFlag from '@/assets/FR.png'
import ptFlag from '@/assets/PT.png'
import cnFlag from '@/assets/CN.png'
import twFlag from '@/assets/TW.png'
import jpFlag from '@/assets/JP.png'
import krFlag from '@/assets/KR.png'
import inFlag from '@/assets/IN.png'
import idFlag from '@/assets/ID.png'
import thFlag from '@/assets/TH.png'
import vnFlag from '@/assets/VN.png'
const { locale } = useI18n()
const showLangMenu = ref(false)

const languages = [
    { code: 'en', name: 'English', flag: enFlag },
    { code: 'de', name: 'Deutsch', flag: deFlag },
    { code: 'fr', name: 'Français', flag: frFlag },
    { code: 'pt', name: 'Português', flag: ptFlag },
    { code: 'zh', name: '简体中文', flag: cnFlag },
    { code: 'zht', name: '繁體中文', flag: twFlag },
    { code: 'ja', name: '日本語', flag: jpFlag },
    { code: 'ko', name: '한국어', flag: krFlag },
    { code: 'hi', name: 'हिंदी', flag: inFlag },
    { code: 'id', name: 'Indonesia', flag: idFlag },
    { code: 'th', name: 'ภาษาไทย', flag: thFlag },
    { code: 'vi', name: 'tiếng Việt', flag: vnFlag }
]

const currentLang = () => languages.find(l => l.code === locale.value) || languages[0]

// 切换语言
function selectLang(code) {
    locale.value = code
    closeDropdown()
}

// 点击按钮切换下拉显示
function toggleDropdown() {
    showLangMenu.value = !showLangMenu.value
}
// 点击外部关闭
function closeDropdown() {
    showLangMenu.value = false
}

function handleClickOutside(e) {
    if (showLangMenu.value) {
        // 检查点击是否在当前组件外部
        const root = document.getElementById('__lang_select_root')
        if (root && !root.contains(e.target)) {
            closeDropdown()
        }
    }
}

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
})
onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<template>
    <div class="relative items-center" id="__lang_select_root">
        <button class="bg-none border-0 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
            @click="toggleDropdown">
            <img :src="currentLang().flag" :alt="currentLang().name" class="w-7 h-7 rounded-full object-cover" />
        </button>
        <div v-if="showLangMenu"
            class="absolute top-12 right-0 bg-white rounded-xl shadow-lg py-4 px-4 z-50 min-w-[340px] animate-fade-in">
            <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                <template v-for="lang in languages" :key="lang.code">
                    <button
                        class="flex items-center gap-2 py-1 px-2 rounded hover:bg-[#f5f5fa] transition text-black w-full text-left"
                        @click="selectLang(lang.code)">
                        <img :src="lang.flag" :alt="lang.name" class="w-5 h-5 rounded-full" />
                        <span :class="{'font-bold': locale.value === lang.code}">{{ lang.name }}</span>
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fade-in 0.18s;
}
</style>
