<template>
  <div class="auth modal-content flex-column">
    <form class="auth__form">
      <h2 class="auth__title other-text">Вход</h2>
      <input class="auth__input main-input" type="text" placeholder="электронная почта">
      <input class="auth__input main-input" type="text" placeholder="пароль">
      <p class="auth__text">Войти с помощью соцсетей</p>
      <ul class="auth-socials-items flex">
        <li class="auth-socials-item">
          <img src="@/assets/svg/instagram.svg" alt="">
        </li>
        <li class="auth-socials-item">
          <img src="@/assets/svg/facebook.svg" alt="">
        </li>
        <li class="auth-socials-item">
          <img src="@/assets/svg/twetter.svg" alt="">
        </li>
      </ul>
      <button class="auth--btn basic-btn">Войти</button>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
.auth{
  /* padding-top: 93px; */
  padding: 50px 0;
  justify-content: flex-start;
  text-align: center;
}
.auth__title{
  font-size: 30px;
  line-height: 38px;
  color: #626374;
}
.auth__input{
  margin-top: 30px;
}
.auth__text{
  margin-top: 24px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #626374;
}
.auth-socials-items{
  justify-content: center;
}
.auth-socials-item{
  width: 40px;
  height: 40px;
}
.auth-socials-item:not(:last-child){
  margin-right: 15px;
}
.auth--btn{
  margin-top: 24px;
}
</style>