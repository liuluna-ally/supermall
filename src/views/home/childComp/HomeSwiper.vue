<template>
  <swiper class='home-swiper'>
    <swiper-item v-for="item in cbanners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadImage">
      </a>
    </swiper-item>
  </swiper>
  </template>
  
  <script>
      import {Swiper, SwiperItem} from 'components/common/swiper';
      export default {
          name: "HomeSwiper",
          data(){
            return{
              isLoad:false
            }
          },
          props: {
              cbanners:{
                  type:Array,
                  default() {
                      return []
                  }
              }
          },
          components:{
              Swiper,SwiperItem
          },
          methods:{
            loadImage(){
              if(!this.isLoad){
                this.$emit('swiperLoadImage')
                this.isLoad = true
              }
              
            }
          }
      }
  </script>
  
  <style scoped>
  
  
  </style>
  