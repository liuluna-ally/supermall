<template>
    <div class="home-recommend">
      <div class="home-recommend-item" v-for="item in crecommends" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
</template>
  
  <script>
      export default {
          name: "HomeRecommend",
          props:{
            crecommends:{
                  type:Array,
                  default() {
                      return []
                  }
              }
          }
      }
  </script>
  
  <style scoped>
    .home-recommend{
      display: flex;
      width: 100%;
      text-align: center;
      padding: 15px;
      border-bottom: 10px solid #eee;
    }
  
    .home-recommend-item{
      flex: 1;
    }
  
    .home-recommend-item img{
      width: 70px;
      height: 65px;
      border-radius: 100%;
    }
  </style>
  