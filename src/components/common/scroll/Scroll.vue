<template>
    <div class="wrapper" ref='wrapper'>
        <!-- ref:如果是绑定在组件中，this.$refs.refname 获取到的是组件对象 -->
         <div ref="wrapper">
            <div class="content">
              <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import BScoll from 'better-scroll'
export default {
  name: 'Scroll',
  data(){
      return{
        scroll:null
      }
  },
  mounted(){
    /** 默认值：0
    可选值：1、2、3
    当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；
    当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；
    当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件
  */
    this.scroll =  new BScoll(this.$refs.wrapper,{
      probeType:2,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position);
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多');
      //删除上一次加载更多
      this.scroll.finishPullUp()
    })
  }
}
</script>

<style scoped>
  
</style> 