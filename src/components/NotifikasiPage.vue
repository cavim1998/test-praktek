<template>
  <div class="notification" :class="{
    'show': show
  }">
    <div class="notification__header">
      <div class="notification__btn-back" @click="hideNotif">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <span class="notification__title">Notification</span>
    </div>
    <div class="notification__item-detail">
      <div v-for="item of list" :key="item.id" class="notification__box" :class="{ 'active-notif': !item.read }" @click="item.read = true">
        <div class="notification__picture-box">
          <div class="notification__picture-container">
            <i
              class="notification__icon"
              :class="{
                'fa-solid fa-coins': item.type === 'reimbursement',
                'fa-solid fa-pills': item.type === 'sick',
                'fa-solid fa-clock': item.type === 'overtime'
              }"
            ></i>
          </div>
          <div
            class="notification__status"
            :class="{
              'approved': item.status === 'approved',
              'rejected': item.status === 'rejected',
              'pending': item.status === 'pending'
            }"
          >
            <i
              :class="{
                'fa-solid fa-check': item.status === 'approved',
                'fa-solid fa-xmark': item.status === 'rejected',
                'fa-solid fa-arrow-right': item.status === 'pending'
              }"
            ></i>
          </div>
        </div>
        <div>
          <div class="notification__detail-box">
            <p class="notification__detail-title">{{ item.title }}</p>
            <div class="notification__day">{{ formatDate(item.date) }}</div>
          </div>
          <p class="notification__detail-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { ref } from 'vue'
import moment from 'moment'

defineProps({
  show: Boolean
})

const emits = defineEmits(['hideNotif'])

const list = ref([
  {
    id: 1,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-16',
    type: 'reimbursement',
    status: 'approved',
    read: false
  },
  {
    id: 2,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-15',
    type: 'reimbursement',
    status: 'rejected',
    read: true
  },
  {
    id: 3,
    title: 'Sickness',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-14',
    type: 'sick',
    status: 'pending',
    read: false
  },
  {
    id: 4,
    title: 'Overtime',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-10',
    type: 'overtime',
    status: 'approved',
    read: false
  },
  {
    id: 5,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-9',
    type: 'reimbursement',
    status: 'approved',
    read: false
  },
  {
    id: 6,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-7',
    type: 'reimbursement',
    status: 'rejected',
    read: true
  },
  {
    id: 7,
    title: 'Sickness',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-4',
    type: 'sick',
    status: 'pending',
    read: false
  },
  {
    id: 8,
    title: 'Overtime',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-02-1',
    type: 'overtime',
    status: 'approved',
    read: false
  },
  {
    id: 9,
    title: 'Overtime',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-01-28',
    type: 'overtime',
    status: 'approved',
    read: false
  },
  {
    id: 10,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-01-25',
    type: 'reimbursement',
    status: 'approved',
    read: false
  },
  {
    id: 11,
    title: 'Reimbursement',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-01-20',
    type: 'reimbursement',
    status: 'rejected',
    read: true
  },
  {
    id: 12,
    title: 'Sickness',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-01-17',
    type: 'sick',
    status: 'pending',
    read: false
  },
  {
    id: 13,
    title: 'Overtime',
    description: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    date: '2025-01-15',
    type: 'overtime',
    status: 'approved',
    read: false
  }
])

const hideNotif = () => {
  emits('hideNotif')
}

const formatDate = (date) => {
  const today = moment().startOf('day')
  const inputDate = moment(date).startOf('day')

  if (inputDate.isSame(today, 'day')) {
    return 'Today'
  } else if (inputDate.isSame(today.clone().subtract(1, 'day'), 'day')) {
    return 'Yesterday'
  } else {
    return inputDate.format('YYYY-MM-DD')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/notification.scss';
</style>
