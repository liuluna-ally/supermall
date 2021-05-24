<template>
    <div id="detail">
       <detail-nav-bar></detail-nav-bar>
       <detail-swiper :images="topImages"></detail-swiper>
       <detail-base-info :goods="goods"></detail-base-info>
    </div>
</template>
  
<script>
  import DetailSwiper from './childComp/DetailSwiper.vue'
  import DetailNavBar from './childComp/DetailNavBar.vue'
  import DetailBaseInfo from './childComp/DetailBaseInfo.vue'

  import {getDetail,Goods} from 'network/detail.js'
  export default {
  name: 'Detail',
  data(){
    return {
        iid:null,
        topImages:[],
        goods:null
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created(){
      // 获取请求的参数
      this.iid = this.$route.params.iid
      //2.根据iid请求详情数据
      this.getDetail()
  },
  methods:{
      getDetail(){
        getDetail(this.iid).then(res=>{
            console.log(res);
            //1.获取轮播图片
            this.topImages = res.data.result.itemInfo.topImages
            //2.获取商品信息
            this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo.services)
        })
      },
    
  }
}
</script>
  
<style>
    
</style>