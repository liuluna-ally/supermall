<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll" :probe-type="3"  :pullUpLoad="true">
            <detail-swiper :images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop-info :shop="shop"></detail-shop-info>
            <detail-goods-info :detailInfo="detailInfo" @imgLoad = 'imgLoad'></detail-goods-info>
            <detail-param-info :paramInfo = 'paramInfo' ref="params"></detail-param-info>
        </scroll>
    </div>
</template>
  
<script>
  import DetailSwiper from './childComp/DetailSwiper.vue'
  import DetailNavBar from './childComp/DetailNavBar.vue'
  import DetailBaseInfo from './childComp/DetailBaseInfo.vue'
  import DetailShopInfo from './childComp/DetailShopInfo.vue'
  import DetailGoodsInfo from './childComp/DetailGoodsInfo.vue'
  import DetailParamInfo from './childComp/DetailParamInfo.vue'
  import {getDetail,Goods,Shop,GoodsParam} from 'network/detail.js'

  import Scroll from 'components/common/scroll/Scroll.vue'
  
  export default {
  name: 'Detail',
  data(){
    return {
        iid:null,
        topImages:null,
        goods:{},
        shop: {},
        detailInfo:{},
        paramInfo: {}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,

    Scroll
  },
  created(){
      // 获取请求的参数
      this.iid = this.$route.params.iid
      //2.根据iid请求详情数据
      this.getDetail()
  },
  methods:{
    //------------网络请求---------------------------
      getDetail(){
        getDetail(this.iid).then(res=>{
            console.log(res);
            //1.获取轮播图片
            this.topImages = res.data.result.itemInfo.topImages
            //2.获取商品信息
            this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
            //3.获取店铺信息
            this.shop = new Shop(res.data.result.shopInfo)
            //4.保存商品详情数据
            this.detailInfo = res.data.result.detailInfo
            //5.获取参数信息
            this.paramInfo = new GoodsParam(res.data.result.itemParams.info, res.data.result.itemParams.rule)
        })
      },
    //----------------------------------------------------

    //---------事件监听------------------------------------
    //1.监听图片加载完成
    imgLoad(){
      this.$refs.scroll.refresh()
    }
    
  }
}
</script>
  
<style>
  /* 将底部tabbar隐藏 */
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>