<template>
  <div class="books">
    <ul class="books__items flex-only">
      <li class="books__item book-item" v-for="(item,index) in 10" :key="index">
        <img src="@/assets/svg/book.svg" alt="">
        <div class="book-item__info">
          <p class="book-item__name default-text">Атака титанов</p>
          <p class="book-item__text block-text">Хадзимэ Исаяма</p>
          <div class="book-item__box flex">
            <button class="book-item__btn main-btn">+ Добавить</button>
            <div class="book-item__rating product-rating flex">
              <img class="product-rating__icon" src="@/assets/svg/star.svg" alt="">
              <p class="product-rating__count">5,0</p>
            </div>
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
.books__items{
  margin: 24px 0 87px 0;
  overflow-y: hidden;
}
.books__item{
  width: 320px;
  height: 613px;
  background: #FFFFFF;
  border-radius: 22px;
}
.books__item:not(:last-child){
  margin-right: 50px;
}
.book-item__info{
  padding: 10px 20px 12px 20px;
}
.book-item__box{
  justify-content: flex-start;
}
.book-item__text{
  margin: 8px 0 11px 0;
}
.book-item__btn{
  width: 180px;
  margin-right: 13px;
}

</style>