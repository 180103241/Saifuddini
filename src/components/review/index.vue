<template>
  <div class="review">
    <ul class="review__items flex">
      <li class="review__item review-block">
        <div class="review-block__head flex-only">
          <img class="review-block__avatar avatar" src="@/assets/svg/avatar.svg" alt="">
          <p class="review-block__title">
            <strong class="review-block__strong">Itachi Uchiha</strong>
            разместил в цитатах
          </p>
        </div>
        <div class="review-block__info">
          <p class="review-block__text default-text">
            Жизнь человека определяться тем, что он считает истинным и правильным. Это и формирует нашу реальность. Вот только что такое истина? Всего-лишь понятие, и реальность может оказаться миражем. А быть может люди живут в мире собственных иллюзий?
          </p>
          <div class="review-block__box flex-only">
            <img class="review-block__box-img" src="@/assets/svg/review-avatar.svg" alt="">
            <div class="review-block__box-right">
              <div class="review-block__box-info">
                <h3 class="review-block__box-name strong-text">Наруто</h3>
                <p class="review-block__box-text block-text">Масаси Кисимото</p>
              </div>
              <div class="product-rating flex">
                <img class="product-rating__icon" src="@/assets/svg/star.svg" alt="">
                <p class="product-rating__count">5,0</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="review__item review-block">
        <div class="review-block__head flex-only">
          <img class="review-block__avatar avatar" src="@/assets/svg/avatar.svg" alt="">
          <p class="review-block__title">
            <strong class="review-block__strong">Itachi Uchiha</strong>
            разместил в цитатах
          </p>
        </div>
        <div class="review-block__info">
          <p class="review-block__text default-text">
            Жизнь человека определяться тем, что он считает истинным и правильным. Это и формирует нашу реальность. Вот только что такое истина? Всего-лишь понятие, и реальность может оказаться миражем. А быть может люди живут в мире собственных иллюзий?
          </p>
          <div class="review-block__box flex-only">
            <img class="review-block__box-img" src="@/assets/svg/review-avatar.svg" alt="">
            <div class="review-block__box-right">
              <div class="review-block__box-info">
                <h3 class="review-block__box-name strong-text">Наруто</h3>
                <p class="review-block__box-text block-text">Масаси Кисимото</p>
              </div>
              <div class="product-rating flex">
                <img class="product-rating__icon" src="@/assets/svg/star.svg" alt="">
                <p class="product-rating__count">5,0</p>
              </div>
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
  .review__items{
    margin: 24px 0 87px 0;
    overflow-y: hidden;
  }
  .review__item{
    width: 49%;
    height: 535px;
    height: auto;
    background: transparent;
    border-radius: 22px;
    overflow: hidden;
  }
  .review-block__head{
    align-items: center;
  }
  .review-block__title{
    font-weight: 400;
    font-size: 24px;
    /* font-size: 30px; */
    line-height: 37px;
    color: #000000;
  }
  .review-block__strong{
    font-weight: 600;
  }
  .review-block__info{
    padding: 30px;
    margin-top: 13px;
    background: #FFFFFF;
    border-radius: 22px;
    box-shadow: inset 0 0 20px 7px #cacacf;;
    /* filter: blur(1px); */
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