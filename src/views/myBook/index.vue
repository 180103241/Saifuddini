<template>
  <div class="my-book">
    <HeaderBlock />
    <div class="my-book__block container">
      <MyBook/>
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
    MyBook: () => ({
      component: import('../../components/myBook')
    }),
    Footer: () => ({
      component: import('../../components/footer')
    })
  }
    
}
</script>

<style scoped>
  .my-book__block{
    background: #C3C5E9;
    border-radius: 15px 15px 0px 0px;
    padding: 50px 49px 43px 55px;
  }
</style>