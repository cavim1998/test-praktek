<template>
  <div class="user">
    <p class="user__title">Online</p>
    <div class="user__box-online">
      <div v-for="user of list.slice(0, 8)" :key="user.id" class="user__box">
        <img src="@/assets/user.png" width="40" height="40" alt="picture user" class="user__picture" :style="{ backgroundColor: user.color }" />
        <p class="user__name">{{ user.name }}</p>
        <p class="user__location">{{ user.location }}</p>
      </div>
      <div class="user__more-user">
        <p class="user__more-number">{{ list.length - 8 }}</p>
        <p class="user__more-number">More</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = ref([
  {
    id: 1,
    color: 'yellow',
    name: 'Jeffry',
    location: 'Sahid'
  },
  {
    id: 2,
    color: 'red',
    name: 'Zasami',
    location: 'BSD'
  },
  {
    id: 3,
    color: 'green',
    name: 'Budi',
    location: 'Sahid'
  },
  {
    id: 4,
    color: 'yellow',
    name: 'Aldo',
    location: 'Sahid'
  },
  {
    id: 5,
    color: 'blue',
    name: 'Renya',
    location: 'BSD'
  },
  {
    id: 6,
    color: 'pink',
    name: 'Nesha',
    location: 'BSD'
  },
  {
    id: 7,
    color: 'blue',
    name: 'Anto',
    location: 'Sahid'
  },
  {
    id: 8,
    color: 'purple',
    name: 'Erwin',
    location: 'BSD'
  },
  {
    id: 9,
    color: 'gray',
    name: 'Syam',
    location: 'BSD'
  },
  {
    id: 10,
    color: 'purple',
    name: 'Budi',
    location: 'Sahid'
  },
  {
    id: 11,
    color: 'gray',
    name: 'Dian',
    location: 'BSD'
  }
])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/home/user.scss';
</style>
