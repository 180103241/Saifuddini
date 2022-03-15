<template>
  <div class="my-book">
    <div class="flex">
      <h2 class="my-book-title">Мои книги</h2>
      <div class="my-book__btn-group">
        <button class="my-book__btn add-btn">Добавить</button>
        <button class="my-book__btn change-btn">Изменить</button>
        <button class="my-book__btn delete-btn">Удалить</button>
      </div>
    </div>
    <!-- <div class="close" v-if="authorizationShow || registrationShow" @click="authorizationShow=false, registrationShow=false"></div> -->
    <ul class="my-book-list">
      <li class="review-block__box flex-only"  v-for="(item,index) in 20" :key="index">
        <img class="review-block__box-img" src="../../assets/svg/review-avatar.svg" alt="">
        <div class="review-block__box-right">
          <div class="review-block__box-info">
            <h3 class="review-block__box-name strong-text">Наруто</h3>
            <p class="review-block__box-text block-text">Масаси Кисимото</p>
          </div>
          <div class="product-rating flex">
            <img class="product-rating__icon" src="../../assets/svg/star.svg" alt="">
            <p class="product-rating__count">5,0</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.my-book{
  width: 100%;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 50px 50px 0px 0px;
  padding: 36px 16px 16px 36px;
  height: 687px;
}
.my-book-title{
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
}
.my-book-list{
  height: 82%;
  overflow-y: auto;
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 38px;
}
  .review-block__box{
    margin-top: 15px;
  }
  .review-block__box-img{
    margin-right: 30px;
  }
  .review-block__box-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .review-block__box-name{
    margin-bottom: 3px;
    font-weight: 500;
  }
  .review-block__box-text{
    font-weight: normal;
    font-size: 20px;
  }
.my-book__btn{
  width: 147px;
  height: 59px;
  background: #45A37B;
  border-radius: 7px;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 19.745px;
  line-height: 25px;
  color: #FFFFFF;
}
.my-book__btn:not(:last-child){
  margin-right: 24px;
}
.change-btn{
  background: #5458A3;
}
.delete-btn{
  background: #FF5C5C;
}
</style>