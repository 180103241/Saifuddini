<template>
  <div class="home">
    <HeaderBlock />
    <div class="home__block container">
      <div class="home__box default-text flex">топ публикации на сайте</div>
      <h1 class="home__title main-title">Новинки книг</h1>
      <BooksBlock />
      <h1 class="home__title main-title">Выбор реакции</h1>
      <ReactionBlock />
      <h1 class="home__title main-title">Популярное</h1>
      <BooksBlock />
      <h1 class="home__title main-title">Лучшие цитаты</h1>
      <ReviewBlock />
      <Footer/>
    </div>
  </div>
</template>
 
<script>
export default {
  components:{
    HeaderBlock: () => ({
      component: import('../../components/header')
    }),
    BooksBlock: () => ({
      component: import('../../components/books')
    }),
    ReactionBlock: () => ({
      component: import('../../components/reaction')
    }),
    ReviewBlock: () => ({
      component: import('../../components/review')
    }),
    Footer: () => ({
      component: import('../../components/footer')
    })
  }
}
</script>
 
 <style scoped>
  .home__block{
    background: #C3C5E9;
    border-radius: 15px 15px 0px 0px;
    padding: 50px 67px 43px 55px;
  }
  .home__box{
    height: 480px;
    background: #FFFFFF;
    border-radius: 22px;
    justify-content: center;
    margin: 0 0 87px 0;
    font-size: 50px;
    line-height: 61px;
  }
 </style>
