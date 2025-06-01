<template>
  <footer class="bg-[#191735]">
    <div class="m-auto w-10/12 border-t border-[#ffffff1a] p-8 ">
      <p class="text-center text-sm text-[#b8b8d0]">{{ t('footer.copyright') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
