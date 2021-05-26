<template>
    <swiper class="swiper">
        <swiper-item v-for="item in images" :key="item">
          <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>
  
  <script>
      import {Swiper, SwiperItem} from 'components/common/swiper';
      export default {
          name: "DetailSwiper",
          data(){
            
          },
          props: {
              images:{
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
            
          }
      }
  </script>
  
  <style scoped>
      .swiper{
          height: 300px;
          overflow: hidden;
      }
  
  </style>
  