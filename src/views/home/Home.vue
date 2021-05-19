<template>
    <div id="home">
       <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <scroll class="content">
        <home-swiper :cbanners="banners"></home-swiper>
        <home-recommend :crecommends="recommends"></home-recommend> 
        <home-feature-view/>
        <tab-control class="tab-control" :titles='["流行","新款","精选"]' @tabClick="tabClick"></tab-control>
        <goods-list :goods='showGoods'></goods-list>
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
        <li>分类列表11</li>
        <li>分类列表12</li>
        <li>分类列表13</li>
        <li>分类列表14</li>
        <li>分类列表15</li>
        <li>分类列表16</li>
        <li>分类列表17</li>
        <li>分类列表18</li>
        <li>分类列表19</li>
        <li>分类列表20</li>
        <li>分类列表21</li>
        <li>分类列表22</li>
        <li>分类列表23</li>
        <li>分类列表24</li>
        <li>分类列表25</li>
        <li>分类列表26</li>
        <li>分类列表27</li>
        <li>分类列表28</li>
        <li>分类列表29</li>
        <li>分类列表30</li>
        <li>分类列表31</li>
        <li>分类列表32</li>
        <li>分类列表33</li>
        <li>分类列表34</li>
        <li>分类列表35</li>
        <li>分类列表36</li>
        <li>分类列表37</li>
        <li>分类列表38</li>
        <li>分类列表39</li>
        <li>分类列表40</li>
        <li>分类列表41</li>
        <li>分类列表42</li>
        <li>分类列表43</li>
        <li>分类列表44</li>
        <li>分类列表45</li>
        <li>分类列表46</li>
        <li>分类列表47</li>
        <li>分类列表48</li>
        <li>分类列表49</li>
        <li>分类列表50</li>
        <li>分类列表51</li>
        <li>分类列表52</li>
        <li>分类列表53</li>
        <li>分类列表54</li>
        <li>分类列表55</li>
        <li>分类列表56</li>
        <li>分类列表57</li>
        <li>分类列表58</li>
        <li>分类列表59</li>
        <li>分类列表60</li>
        <li>分类列表61</li>
        <li>分类列表62</li>
        <li>分类列表63</li>
        <li>分类列表64</li>
        <li>分类列表65</li>
        <li>分类列表66</li>
        <li>分类列表67</li>
        <li>分类列表68</li>
        <li>分类列表69</li>
        <li>分类列表70</li>
        <li>分类列表71</li>
        <li>分类列表72</li>
        <li>分类列表73</li>
        <li>分类列表74</li>
        <li>分类列表75</li>
        <li>分类列表76</li>
        <li>分类列表77</li>
        <li>分类列表78</li>
        <li>分类列表79</li>
        <li>分类列表80</li>
        <li>分类列表81</li>
        <li>分类列表82</li>
        <li>分类列表83</li>
        <li>分类列表84</li>
        <li>分类列表85</li>
        <li>分类列表86</li>
        <li>分类列表87</li>
        <li>分类列表88</li>
        <li>分类列表89</li>
        <li>分类列表90</li>
        <li>分类列表91</li>
        <li>分类列表92</li>
        <li>分类列表93</li>
        <li>分类列表94</li>
        <li>分类列表95</li>
        <li>分类列表96</li>
        <li>分类列表97</li>
        <li>分类列表98</li>
        <li>分类列表99</li>
        <li>分类列表100</li>
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
      padding-bottom: 49px;
      height: 100vh;
    }
    .home-nav{
      background-color: var(--color-tint);
      color: white;
    } 
    .tab-control{
      position: relative;
      z-index: 9;
    }
    .content{
      height: calc(100%);
      overflow: hidden;
      position: absolute;
      top:44px;
    }
</style>
  