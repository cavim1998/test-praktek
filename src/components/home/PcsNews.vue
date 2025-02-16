<template>
  <div class="news">
    <p class="news__title">PCS News</p>
    <swiper-container slides-per-view="1" loop="true" pagination="true" class="news__swiper-container">
      <swiper-slide v-for="item of data" :key="item.id">
        <div class="news__slide-box">
          <div class="news__user-box">
            <img src="@/assets/user.png" width="32" height="32" alt="user thumbnail" class="news__picture" />
            <p class="news__name">{{ item.name }}</p>
            <div class="news__datetime">
              <p class="news__text-datetime">{{ setDay(item.date) }}</p>
              <p class="news__text-datetime">{{ moment(item.date).format('DD MMM YYYY') }}</p>
            </div>
          </div>
          <div v-html="item.description" class="news__description"></div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { register } from 'swiper/element/bundle'
import moment from 'moment'
register()

const data = ref([
  {
    id: 1,
    name: 'Ana Riswati',
    date: '2022-05-30',
    description: '<p>Kalimat 1 - Lorem Ipsum</p><p>Kalimat 2 - Lorem Ipsum</p><p>Kalimat 3 - Lorem Ipsum</p><p>Kalimat 4 - Lorem Ipsum</p>'
  },
  {
    id: 2,
    name: 'Budi',
    date: '2022-06-15',
    description: '<p>Kalimat 1 - Lorem Ipsum</p><p>Kalimat 2 - Lorem Ipsum</p><p>Kalimat 3 - Lorem Ipsum</p><p>Kalimat 4 - Lorem Ipsum</p>'
  },
  {
    id: 3,
    name: 'Anto',
    date: '2022-07-01',
    description: '<p>Kalimat 1 - Lorem Ipsum</p><p>Kalimat 2 - Lorem Ipsum</p><p>Kalimat 3 - Lorem Ipsum</p><p>Kalimat 4 - Lorem Ipsum</p>'
  }
])

const setDay = (date) => {
  moment.locale('id')
  return moment(date).format('dddd')
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/home/news.scss';
</style>
