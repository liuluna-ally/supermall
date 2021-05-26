<template>
  <!-- <div id="category" class="wrapper">
    <scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad="true">
      <home-swiper :cbanners="banners" @swiperLoadImage="swiperLoadImage"></home-swiper>
      <home-recommend :crecommends="recommends"></home-recommend> 
      <home-feature-view/>
      <tab-control ref="tabControl2" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
      <goods-list :goods='showGoods'></goods-list> 
    </scroll>
  </div> -->

  <div id="category" class="wrapper">
    <!-- <nav-bar class="home-nav">
     <div slot="center">购物街</div>
   </nav-bar>
   <tab-control class="tab-control"  ref="tabControl1" :titles='["流行","新款","精选"]' @tabClick="tabClick" v-show="isShowTabControl"></tab-control> -->
   <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
     <!-- <home-swiper :cbanners="banners" @swiperLoadImage="swiperLoadImage"></home-swiper>
     <home-recommend :crecommends="recommends"></home-recommend> 
     <home-feature-view/>
     <tab-control ref="tabControl2" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
     <goods-list :goods='showGoods'></goods-list> -->
   </scroll>
   <!-- 组件监听点击事件 @click.native  -->
   <!-- <back-top @click.native="backTop" v-show="isShowBackTop"></back-top> -->
     
 </div>
   
</template>
  
<script>
  import Scroll from 'components/common/scroll/Scroll';
  export default {
  name: 'Category',
  data(){
    return {
      scroll:null
    }
  },
  components:{
    Scroll
  },
  methods:{
    // 5.监听滚动
    contentScroll(position){
      console.log(position);
      

     
    },
    // 6.加载更多
    loadMore(){
     
    },
  }
}
</script>
  
<style>
  #category{
      padding-top:44px;
      height: 100vh;
      position:relative;
  }
  .content{
    overflow: hidden;
    height: 300px;
    background-color: antiquewhite;
  }
</style>