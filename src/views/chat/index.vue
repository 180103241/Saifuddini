<template>
  <div class="chat">
    <HeaderBlock />
    <div class="chat__block container">
      <MessageBlock/>
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
    MessageBlock: () => ({
      component: import('../../components/chat')
    }),
    Footer: () => ({
      component: import('../../components/footer')
    })
  }
  }
</script>

<style scoped>
.chat__block{
  background: #C3C5E9;
  border-radius: 15px 15px 0px 0px;
  padding: 50px 49px 43px 55px;
}
</style>