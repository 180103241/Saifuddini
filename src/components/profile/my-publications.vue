<template>
  <div class="my-publications">
    <h2 class="my-publications__title">Мои публикации</h2>
    <ul class="my-publications__list">
      <li class="my-publications__item" v-for="(item,index) in 6" :key="index">
        <p class="my-publications__text">
          <strong class="my-publications__text-topic">Философия</strong>
          01.01.2022
        </p>
        <p class="my-publications__text">
          Список книг user-a, возможность редактировать данный список (удалять, добавлять, изменять
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.my-publications{
  background: #FFFFFF;
  border-radius: 50px;
  padding: 43px 51px;
  margin-bottom: 68px;
}
.my-publications__title{
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
}
.my-publications__item{
  margin-top: 38px;
}
.my-publications__text-topic{
  font-weight: 500;
  margin-right: 28px;
}
.my-publications__text{
  font-weight: 400;
  font-size: 19.745px;
  line-height: 24px;
  color: #000000;
}
.my-publications__text:not(:last-child){
  margin-bottom: 17px;
}
</style>