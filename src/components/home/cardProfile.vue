<template>
  <div class="card">
    <div class="card__info-user">
      <img src="@/assets/user.png" width="24" height="24" alt="thumbnail_user" class="card__picture" />
      <div class="card__info-1">
        <p class="card__name">Tabay</p>
        <p class="card__job">UI/UX Designer</p>
      </div>
      <div class="card__info-2">
        <p class="card__job">Member Since</p>
        <p class="card__name">01 Juni 2001</p>
      </div>
    </div>
    <p class="card__location">Location</p>
    <div class="card__location-box">
      <p class="card__name">Kantor Sahid</p>
      <p class="card__job">ICO</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/home/card.scss';
</style>