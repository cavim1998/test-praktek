<template>
  <header class="header">
    <div class="header__box">
      <div class="header__title">KerjaYuk!</div>
      <iconNotif @click="showNotif" />
    </div>
  </header>
</template>

<script setup>
/* eslint-disable no-undef */
import iconNotif from '@/components/home/headerHome/iconNotif.vue'

const emits = defineEmits(['showNotif'])

const showNotif = () => {
  emits('showNotif')
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/home/header.scss';
</style>