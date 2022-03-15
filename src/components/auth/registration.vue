<template>
  <div class="auth modal-content flex-column">
    <form class="auth__form">
      <h2 class="auth__title other-text">Регистрация</h2>
      <input class="auth__input main-input" type="text" placeholder="электронная почта">
      <input class="auth__input main-input" type="text" placeholder="никнейм">
      <input class="auth__input main-input" type="text" placeholder="пароль">
      <div class="auth__policy flex">
        <input class="auth__policy-input" type="checkbox">
        <p class="auth__policy-text">Я согласен с условиями пользовательского соглашения</p>
      </div>
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
      <button class="auth--btn basic-btn">Зарегистрироваться </button>
    </form>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
.auth{
  padding: 50px 0;
  justify-content: flex-start;
  text-align: center;
}
.auth__form{
  display: flex;
  flex-direction: column;
}
.auth__title{
  font-size: 30px;
  line-height: 38px;
  color: #626374;
}
.auth__input{
  margin-top: 30px;
}
.auth__policy{
  margin: 17px 0;
  justify-content: flex-start;
}
.auth__policy-input{
  width: 22px;
  margin-right: 7px;
}
.auth__policy-text{
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #626374;
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