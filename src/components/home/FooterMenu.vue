<template>
  <footer class="footer">
    <div class="footer__box">
      <div class="footer__menu active">
        <i class="fa-solid fa-house footer__icon"></i>
        <p class="footer__name">Home</p>
      </div>
      <div class="footer__menu">
        <i class="fa-regular fa-calendar-check footer__icon"></i>
        <p class="footer__name">Attendance</p>
      </div>
      <div class="footer__menu">
        <div class="footer__box-icon-middle">
          <i class="fa-solid fa-right-from-bracket footer__icon"></i>
        </div>
        <p class="footer__name active">Check Out</p>
      </div>
      <div class="footer__menu">
        <i class="fa-regular fa-file-lines footer__icon"></i>
        <p class="footer__name">Form</p>
      </div>
      <div class="footer__menu">
        <i class="fa-solid fa-gear footer__icon"></i>
        <p class="footer__name">Setting</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/home/footer.scss';
</style>
