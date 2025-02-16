<template>
  <div class="activity">
    <p class="activity__title">Today's activity</p>
    <div class="activity__clock-box">
      <div class="activity__time-box">
        <img src="@/assets/check_in.png" width="24" height="24" alt="check in" />
        <p class="activity__time">08:30</p>
        <p class="activity__description">Check In</p>
      </div>
      <div class="activity__time-box">
        <img src="@/assets/work_hours.png" width="24" height="24" alt="check in" />
        <p class="activity__time-work">03:00:00</p>
        <p class="activity__description">Working Hours</p>
      </div>
      <div class="activity__time-box">
        <img src="@/assets/check_out.png" width="24" height="24" alt="check in" />
        <p class="activity__time">--:--</p>
        <p class="activity__description">Check Out</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/home/activity.scss';
</style>
