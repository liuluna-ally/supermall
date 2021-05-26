<template>
    <div id="home" class="wrapper">
       <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control class="tab-control"  ref="tabControl1" :titles='["流行","新款","精选"]' @tabClick="tabClick" v-show="isShowTabControl"></tab-control>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadMore">
        <home-swiper :cbanners="banners" @swiperLoadImage="swiperLoadImage"></home-swiper>
        <home-recommend :crecommends="recommends"></home-recommend> 
        <home-feature-view/>
        <tab-control ref="tabControl2" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
        <goods-list :goods='showGoods'></goods-list>
      </scroll>
      <!-- 组件监听点击事件 @click.native  -->
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
        
    </div>
</template>
  
<script>
  import HomeSwiper from "./childComp/HomeSwiper";
  import HomeRecommend from "./childComp/HomeRecommend";
  import HomeFeatureView from "./childComp/HomeFeatureView";

  import NavBar from 'components/common/navbar/NavBar';
  import Scroll from 'components/common/scroll/Scroll';

  import TabControl from 'components/content/tabControl/TabControl';
  import GoodsList from 'components/content/goods/GoodsList';
  import BackTop from 'components/content/backTop/BackTop';

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'

  import{debounce} from 'common/utils.js'

  export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType: 'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isShowTabControl:false,
      saveY: 0,
      itemListener:null
    }
  },
  components:{
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,

    NavBar,
    Scroll,

    TabControl,
    GoodsList,
    BackTop
  },
  computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
  },
  created(){
    // 1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    // 1.监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.itemListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemLoadImage',this.itemListener)
  },
  methods:{
    //-------------------网络请求---------------------------
    // 1.请求多个数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        console.log(res)
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    
    //2.请求商品数据
    getHomeGoods(type){
      const pp = this.goods[type].page + 1
      getHomeGoods(type,pp).then(res=>{
        console.log(res);
        this.goods[type].page = pp
        this.goods[type].list.push(...res.data.data.list)
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    //--------------------------------------------------------

    //-----------------------事件监听--------------------------
    //3.监听tabControl点击执行的方法
    tabClick(index){
      switch(index){
        case 0:
            this.currentType = 'pop'
            break
        case 1:
            this.currentType = 'new'
            break
        case 2:
            this.currentType = 'sell'
            break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      
    },
    //4.监听点击回到顶部
    backTop(){
      //回到顶部
      this.$refs.scroll.scrollTo(0,0,500)
    },

    // 5.监听滚动
    contentScroll(position){
      console.log(position);
      // 1）判断backTop是否显示
      if(position.y > -1000){
        this.isShowBackTop = false
      }else{
        this.isShowBackTop = true
      }

      //2）决定tabBar是否吸顶
      this.isShowTabControl = (-position.y) > this.tabOffsetTop
    },
    // 6.加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    //7.swiper图片加载完成
    swiperLoadImage(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // $el: 获取组件中的元素
      console.log(this.$refs.tabControl2.$el.offsetTop);
    }

  },

  activated() {
      // 返回页面时滚动到离开时记录的位置并刷新
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
  },

  deactivated(){
    // 1.离开页面时记录页面离开时的滚动位置
      this.saveY = this.$refs.scroll.getScrollY()
    // 2.离开页面时取消全局事件的监听
      this.$bus.$off('itemLoadImage',this.itemListener)
  }
}
</script>
  
<style scoped>
    #home{
      padding-top:44px;
      height: 100vh;
      position:relative;
    }
    .tab-control{
      position: relative;
      z-index: 9;
    }
    .home-nav{
      background-color: var(--color-tint);
      color: white;

      position:fixed;
      left:0;
      top:0;
      right:0;
      z-index:9;
    } 
    .content{
      overflow: hidden;
      position:absolute;
      top:44px;
      bottom:49px;
      left:0;
      right:0;
    }
</style>
  