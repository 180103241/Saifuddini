<template>
  <div class="add-product flex">
    <div class="add-product__left">
      <div class="add-product__publication">
        <p class="add-product__text">Тема</p>
        <input class="add-product__input main-input" type="text" placeholder="FORTINAIT or BABAJ">
        <p class="add-product__text">Описания</p>
        <textarea class="add-product__textarea main-input" name="" id="">
        </textarea>
        <p class="add-product__text">Прикрепить файл</p>
        <div class="add-product__btn-group flex">
          <button class="add-product__btn flex">
            <img src="../../assets/svg/plus.svg" alt="">
          </button>
          <button class="add-product__btn flex">
            <img src="../../assets/svg/plus.svg" alt="">
          </button>
          <button class="add-product__btn flex">
            <img src="../../assets/svg/plus.svg" alt="">
          </button>
        </div>
      </div>
      <button class="add-product__publication-btn">
        Добавить публикацию
      </button>
    </div>
    <div class="add-product__rigth">
      <div class="add-product__book">
        <h2 class="add-product__book-title">Мои книги</h2>
        <ul class="add-product__book-list">
          <li class="review-block__box flex-only"  v-for="(item,index) in 10" :key="index">
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
      <button class="add-product__book-btn">
        Добавить книгу
      </button>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.add-product{
  padding-bottom: 80px;
  margin-block: 29px;
}
.add-product__left,
.add-product__rigth{
  position: relative;
  width: 49%;
}
.add-product__publication,
.add-product__book{
  width: 100%;
  background: #FFFFFF;
  padding: 41px 50px 27px 50px;
  box-sizing: border-box;
  border-radius: 0px 0px 50px 0px;
}
.add-product__book{
  border-radius: 0px 0px 0px 50px;
  padding: 16px 16px 16px 26px;
  height: 500px;
}

.add-product__text{
  font-weight: 400;
  font-size: 19.745px;
  line-height: 24px;
  color: #000000;
}
.add-product__input,
.add-product__textarea{
  margin-bottom: 26px;
  padding: 15px 12px;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}
.add-product__textarea{
  height: 186px;
}
.add-product__btn-group{
  padding: 10px 12px;
  background: var(--background-color);
}
.add-product__btn{
  width: 129px;
  height: 39px;
  background: #FFFFFF;
  border-radius: 7px;
  justify-content: center;
}
.add-product__btn:not(:last-child){
  margin-right: 18px;
}
.add-product__publication-btn,
.add-product__book-btn{
  width: 461px;
  height: 79px;
  background: var(--blue-color);
  border-radius: 0px 0px 50px 50px;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #FFFFFF;
  position: absolute;
  bottom: -79px;
}
.add-product__publication-btn{
  left: 0;
}
.add-product__book-btn{
  right: 0;
}
.add-product__book-title{
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
  color: #000000;
}
.add-product__book-list{
  height: 82%;
  overflow-y: auto;
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(6, 80px); */
  grid-gap: 38px;
  /* grid-row-gap: 20px; */
  /* grid-column-gap: 15px; */
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
</style>