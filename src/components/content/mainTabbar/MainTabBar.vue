<template>
    <TabBar>
        <TabBarItem path="/home" activeColor="deeppink">
          <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/image/tabbar/ac-home.svg" alt="">
          <div slot="item-text">首页</div>
        </TabBarItem>
        <TabBarItem path="/category" activeColor="deeppink">
          <img  slot="item-icon" src="~assets/image/tabbar/category.svg">
          <img slot="item-icon-active" src="~assets/image/tabbar/ac-category.svg" alt="">
          <div slot="item-text" >分类</div>
        </TabBarItem>
        <TabBarItem path="/cart" activeColor="deeppink">
          <img slot="item-icon" src="~assets/image/tabbar/cart.svg">
          <img slot="item-icon-active" src="~assets/image/tabbar/ac-cart.svg" alt="">
          <div slot="item-text" >购物车</div>
        </TabBarItem>
        <TabBarItem path="/user" activeColor="deeppink">
          <img slot="item-icon" src="~assets/image/tabbar/user.svg">
          <img slot="item-icon-active" src="~assets/image/tabbar/ac-user.svg" alt="">
          <div slot="item-text" >我的</div>
        </TabBarItem>
      </TabBar>
</template>
<script>
// 导入组件
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
<style scoped>

</style>