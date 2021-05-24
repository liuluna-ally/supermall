<template>
    <div id="detail-nav-bar">
        <nav-bar>
            <div slot='left' class="back" @click="backClick">
                <img src="~assets/image/common/back.svg" alt="">
            </div>
            <div slot='center' class="title">
                <div class="itemTitle" v-for="(item,index) in titles" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</div>
            </div>
            <div slot='right'></div>
        </nav-bar>
    </div>
</template>
  
<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
  name: 'DetailNavBar',
  data(){
      return {
          titles:['商品','参数','评论','推荐'],
          currentIndex:0
      }
  },
  components:{
    NavBar
  },
  methods:{
    //---------监听点击--------------
    //1.导航名称的点击
    itemClick(index){
        this.currentIndex = index
    },
    //2.返回按钮的点击
    backClick(){
        this.$router.back()
    }
  }
}
</script>
<style>
    .title{
      display:flex;
      font-size: 13px;
    }
    .itemTitle{
      flex:1;
    }
    .active{
        color:var(--color-high-text)
    }
    .back img {
        margin-top: 13px;
        margin-left: 5px;
    }
</style>