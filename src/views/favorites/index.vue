<template>
  <div class="favorites">
    <HeaderBlock />
    <div class="favorites__block container">
      <div class="favorites__box default-text flex">
        <h1 class="favorites__title">Избранные</h1>
        потом толтырам
      </div>
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
    Footer: () => ({
      component: import('../../components/footer')
    })
  }
}
</script>
 
<style scoped>
  .favorites__block{
    background: #C3C5E9;
    border-radius: 0px 0px 15px 15px;
    padding: 50px 67px 43px 55px;
  }
  .favorites__box{
    height: 480px;
    background: #FFFFFF;
    border-radius: 22px;
    justify-content: center;
    font-size: 50px;
    line-height: 61px;
    border-radius: 50px;
    position: relative;
  }
  .favorites__title{
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #000000;
    position: absolute;
    top: 36px;
    left: 36px;
  }
</style>
