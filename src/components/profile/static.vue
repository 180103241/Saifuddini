<template>
  <div class="static flex-only">
    <div class="static-avatar avatar">
      <img class="avatar-img" src="../../assets/svg/logo.svg" alt="">
    </div>
    <div class="static-info">
      <h1 class="static-info__name">Билли Херрингтон</h1>
      <ul class="static-info__list">
        <li class="static-info__item flex">
          <img src="../../assets/svg/icon-pen.svg" alt="">
          <p class="static-info__item-text strong-text">легенда</p>
        </li>
        <li class="static-info__item flex">
          <img src="../../assets/svg/icon-map.svg" alt="">
          <p class="static-info__item-text strong-text">Нью-Йорк, США</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.static{
  height: 241px;
  background: #FFFFFF;
  border-radius: 50px 50px 50px 0px;
  padding: 47px 50px;
  box-sizing: border-box;
}
.static-avatar{
  width: 148px;
  height: 148px;
  margin-right: 42px;
}
.static-info__name{
  font-weight: 500;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
}
.static-info__item{
  margin-top: 20px;
  justify-content: flex-start
}
.static-info__item-text{
  font-weight: 400;
  margin-left: 10px;
}
</style>