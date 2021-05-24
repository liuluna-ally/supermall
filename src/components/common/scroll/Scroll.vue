<template>
    <div class="wrapper" ref='wrapper'>
        <!-- ref:如果是绑定在组件中，this.$refs.refname 获取到的是组件对象 -->
        <div class="content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }

  },
  data(){
      return{
        scroll:null
      }
  },
  methods:{
    //1.回到顶部
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    //2.
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //3.刷新
    refresh(){
      this.scroll && this.scroll.refresh
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  },
  mounted(){
    /** 默认值：0
    可选值：1、2、3
    当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
    当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
    当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，惯性滚动的时候也监听。如果没有设置该值，其默认值为 0，即不派发 scroll 事件
  */
    //创建scroll对象
    this.scroll =  new BScoll(this.$refs.wrapper,{
      // 滚动的内容可点击
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    // 监听滚动的位置
    if (this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll', position => {
        // 发送滚动事件
        this.$emit('scroll',position)
      })
    }
    //监听滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
    
  }
}
</script>

<style scoped>
  
</style> 