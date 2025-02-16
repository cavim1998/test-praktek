<template>
  <Header @showNotif="showNotif"></Header>
  <div class="homepage">
    Hi, Good Morning!
    <cardProfile></cardProfile>
    <ActivityToday></ActivityToday>
    <PcsNews></PcsNews>
    <UserOnline></UserOnline>
  </div>
  <FooterMenu></FooterMenu>
  <NotifikasiPage :show="show" @hideNotif="hideNotif"></NotifikasiPage>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/home/HeaderHome.vue'
import cardProfile from '@/components/home/cardProfile.vue'
import ActivityToday from '@/components/home/ActivityToday.vue'
import PcsNews from '@/components/home/PcsNews.vue'
import UserOnline from '@/components/home/UserOnline.vue'
import FooterMenu from '@/components/home/FooterMenu.vue'
import NotifikasiPage from '@/components/NotifikasiPage.vue'

const show = ref(false)

const showNotif = () => {
  show.value = true
}

const hideNotif = () => {
  show.value = false
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/homepage.scss';
</style>
