<template>
    <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper :cbanners="banners"></home-swiper>
      <home-recommend :cproducts="products"></home-recommend>
      <home-feature-view/>
    </div>
</template>
  
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from "./childComp/HomeSwiper";
  import HomeRecommend from "./childComp/HomeRecommend";
  import HomeFeatureView from "./childComp/HomeFeatureView";
  import {getHomeMultidata} from 'network/home.js'
  export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
  },
  data(){
    return{
      banners:[],
      products:[]
    }
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      this.banners = res.data.banners
      this.products = res.data.products
    })
  },
}
</script>
  
<style>
    .home-nav{
      background-color: var(--color-tint);
      color: white;
    }
</style>
  