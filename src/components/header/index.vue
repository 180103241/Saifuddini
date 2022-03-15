<template>
  <div class="header flex">
    <ul class="header__left flex">
      <li class="header__left-item">
        <img class="header__logo" src="@/assets/svg/logo.svg" alt="" @click="$router.push('/')">
      </li>
      <li class="header__left-item main-text" @click="$router.push('/message')">Сообщения</li>
      <li class="header__left-item main-text" @click="$router.push('/my-book')">Мои книги</li>
      <li class="header__left-item main-text" @click="$router.push('/favorites')">Избранные</li>
    </ul>
    <ul class="header__right flex">
      <li class="header__right-item header__search flex">
        <input type="text" class="header__input main-input " placeholder="книги, авторы, ...">
        <div class="header__box flex" :class="{'header__box-active': profileActive}">
          <img class="header__icon" src="@/assets/svg/search.svg" alt="">
        </div>
      </li>
      <li class="header__right-item header__auth other-text" v-if="!profileActive">
        <button class="header__right-btn" @click="authorizationShow = true">Войти</button>
      </li>
      <li class="header__right-item other-text" v-if="!profileActive">
        <button class="header__right-btn" @click="registrationShow = true">Регистрация</button>
      </li>
      <li class="header__right-item header__user flex" v-if="profileActive">
          <div class="header__user-avatar avatar">
            <img class="avatar-img" src="../../assets/svg/logo.svg" alt="">
          </div>
          <p class="other-text">Jacque Fresco</p>
      </li>
    </ul>
    <div class="close" v-if="authorizationShow || registrationShow" @click="authorizationShow=false, registrationShow=false"></div>
    <AuthorizationBlock v-if="authorizationShow"/>
    <RegistrationBlock v-if="registrationShow"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        profileActive: false,
        authorizationShow: false,
        registrationShow: false,
      }
    },
    mounted () {
      console.log(this.$route);
      this.$route.name === 'Home'
        ? this.profileActive = false
        : this.profileActive = true
    },
    components:{
      AuthorizationBlock: () => ({
        component: import('../../components/auth/authorization')
      }),
      RegistrationBlock: () => ({
        component: import('../../components/auth/registration')
      }),
    }
  }
</script>

<style scoped>
.header{
  /* height: 147px; */
  background: #FFFFFF;
  padding: 36px 15px 36px 35px;
  box-sizing: border-box;
}
.header__left{
  width: 45%;
}
.header__right{
  width: 50%;
}
.header__logo{
  width: 200px;
}
.header__left-item{
  cursor: pointer;
}
.header__search{
  width: 65%;
  position: relative;
}
.header__input{
  font-family: Space Grotesk;
  font-weight: bold;
  margin-right: 11px;
}
.header__right-btn{
  padding: 0 27px;
  background: transparent;
}
.header__auth{
  border-right: 1px solid #C3C5E9;
}
.header__box{
  width: 21%;
  height: 100%;
  background: #C3C5E9;
  border-radius: 7px;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;    
}
.header__box-active{
  width: 75px;
  height: 59px;
  background: #C3C5E9;
  border-radius: 7px;
  justify-content: center;
  position: static;
}
.header__user{ 
  width: 40%;
  justify-content: flex-start;
}
.header__user-avatar{
  width: 59px;
  height: 59px;
  margin-right: 14px;
  margin-left: 54px;
}
</style>
