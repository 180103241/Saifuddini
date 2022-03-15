<template>
  <div class="reaction">
    <ul class="reaction__items flex">
      <li class="reaction__item book-item">
        <img class="reaction__img" src="@/assets/svg/img.svg" alt="">
        <div class="reaction__info">
          <p class="reaction__text default-text">Лучшие книги Фридриха Ницше</p>
        </div>
      </li>
      <li class="reaction__item book-item">
        <img class="reaction__img" src="@/assets/svg/img2.svg" alt="">
        <div class="reaction__info">
          <p class="reaction__text default-text">Лучшие книги Фридриха Ницше</p>
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
.reaction__items{
  margin: 24px 0 87px 0;
  overflow-y: hidden;
}
.reaction__item{
  width: 49%;
  height: 535px;
  background: #FFFFFF;
  border-radius: 22px;
  overflow: hidden;
}
.reaction__info{
  padding: 9px 0px 17px 21px;
}
</style>