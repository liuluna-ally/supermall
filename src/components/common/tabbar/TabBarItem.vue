<template>
  <div class="tab-batItem" @click="itemClick">
    <slot v-if='!isActive' name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'TabBar',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    }
  }
  </script>
  
  <style>
    .tab-batItem {
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
    }
    .tab-batItem img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    .active{
      color: red;
    }
  </style>