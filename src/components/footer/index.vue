<template>
  <div class="footer flex-only">
    <div class="footer__socials">
      <ul class="footer__socials-items flex">
        <li class="footer__socials-item">
          <img src="@/assets/svg/instagram.svg" alt="">
        </li>
        <li class="footer__socials-item">
          <img src="@/assets/svg/facebook.svg" alt="">
        </li>
        <li class="footer__socials-item">
          <img src="@/assets/svg/twetter.svg" alt="">
        </li>
        <li class="footer__socials-item">
          <img src="@/assets/svg/vk.svg" alt="">
        </li>
        <li class="footer__socials-item">
          <img src="@/assets/svg/telegram.svg" alt="">
        </li>
      </ul>
      <img class="footer__socials-logo" src="@/assets/svg/logo.svg" alt="">
    </div>
    <ul class="footer__items">
      <li class="footer__item  strong-text">BookRoss</li>
      <li class="footer__item ">Документация</li>
      <li class="footer__item ">О проекте</li>
      <li class="footer__item ">Контакты</li>
    </ul>
    <ul>
      <li class="footer__item strong-text">Поддержка</li>
      <li class="footer__item ">Пожаловаться</li>
      <li class="footer__item ">Техническая поддержка</li>
      <li class="footer__item ">Пользовательское соглашение</li>
      <li class="footer__item ">Политика обработки персональных данных</li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.footer{
  padding: 48px 28px;
  background: #FFFFFF;
  border-radius: 22px;
  margin-top: 53px;
}
.footer__socials-item{
  width: 40px;
  height: 40px;
}
.footer__socials-item:not(:last-child){
  margin-right: 15px;
}
.footer__socials-logo{
  width: 115px;
  height: 21px;
  /* height: 31px; */
  margin-top: 25px;
}
.footer__socials, .footer__items{
  margin-right: 110px;
}
.footer__item{
  margin: 8px 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}
.strong-text{
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
}
</style>
