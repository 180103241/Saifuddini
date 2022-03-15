<template>
  <div class="profile">
    <HeaderBlock />
    <div class="profile__block container">
      <StaticBlock class="profile__static"/>
      <AddProductBlock/>
      <MyPublications/>
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
    StaticBlock: () => ({
      component: import('../../components/profile/static')
    }),
    AddProductBlock: () => ({
      component: import('../../components/profile/add-product')
    }),
    MyPublications: () => ({
      component: import('../../components/profile/my-publications')
    }),
    Footer: () => ({
      component: import('../../components/footer')
    })
  }
    
}
</script>

<style scoped>
  .profile__block{
    background: #C3C5E9;
    border-radius: 15px 15px 0px 0px;
    padding: 50px 49px 43px 55px;
  }
  .profile__static{
    margin-bottom: 13px;
  }
</style>