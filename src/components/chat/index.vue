<template>
  <div class="chat">
    <h2 class="chat__title">Сообщения</h2>
    <ul class="chat__list">
      <li class="chat__item flex" v-for="(item,index) in 5" :key="index">
        <div class="flex">
          <div class="chat-avatar avatar">
            <img class="avatar-img" src="../../assets/svg/logo.svg" alt="">
          </div>
          <div class="chat__item-info">
            <p class="chat__item-name">Adolf Hitler</p>
            <p>01.01.2022  21:21</p>
          </div>
          <div class="chat__item-text">
            <p class="">
              Список книг user-a, возможность редактировать данный список (удалять, добавлять, изменять)
            </p>
          </div>
        </div> 
        <img src="../../assets/svg/basket.svg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.chat{
  background: #FFFFFF;
  border-radius: 50px;
  padding: 43px 51px;
}
.chat__title{
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
}
.chat__item{
  margin-top: 27px;
  height: 84px;
  padding: 12px 17px 12px 28px;
  background: #E5E6FB;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 22px;
  cursor: pointer;
}
.chat-avatar{
  width: 59px;
  height: 59px;
  margin-right: 15px;
}
.chat__item-info{
  margin-right: 36px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}
.chat__item-name{
  margin-bottom: 9px;
  font-family: 'Space Grotesk';
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: #4E4E5A;
}
.chat__item-text{
  width: 523px;
  font-weight: 400;
  font-size: 19.745px;
  line-height: 24px;
  color: #000000;
}
</style>