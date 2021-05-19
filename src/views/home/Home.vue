<template>
    <div id="home" class="wrapper">
       <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <scroll class="content">
        <home-swiper :cbanners="banners"></home-swiper>
        <home-recommend :crecommends="recommends"></home-recommend> 
        <home-feature-view/>
        <tab-control class="tab-control" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
        <goods-list :goods='showGoods'></goods-list>
      </scroll>
        
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

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'

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
    }
  },
  components:{
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,

    NavBar,
    Scroll,

    TabControl,
    GoodsList
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
      
    }

  }
}
</script>
  
<style scoped>
    #home{
      padding-top:44px;
      height: 100vh;
      position:relative;
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
    .tab-control{
      position: sticky;
      top:44px;
      z-index: 9;
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
  