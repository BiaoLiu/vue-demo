<template>
  <div id="app" :title="hello">
    {{ hello }}

    <p v-text="hello"></p>
    <p v-html="hello"></p>

    <p v-html="word"></p>
    <p v-text="word"></p>

    {{num+1}}
    {{status ? 'success':'fail'}}

    <p v-for="item in goods">
      {{item.name}}- {{item.price}}
    </p>

    <p v-for="(item,index) in goods">
      {{item.name}}- {{item.price}} - {{index}}
    </p>

    <p v-for="value in objList"> <!-- 遍历对象-->
      {{value}}
    </p>

    <p v-for="(value,key) in objList">
      {{key}}-{{value}}
    </p>

    <componentA></componentA>

    <!--组件渲染-->
    <componentA v-for="(value,key) in objList">
    </componentA>

    <button v-on:click="addItem">显示列表</button>
  </div>
</template>

<script>
  import componentA from './components/a'

  export default {
    components: {  //注册
      componentA   //相当于 componentA:componentA
    },
    data() {
      return {
        hello: 'hello world',
        word: '<span>test</span>',
        num: 1,
        status: true,
        goods: [
          {
            name: 'apple',
            price: 31
          },
          {
            name: 'apple2',
            price: 55
          }
        ],
        objList: {
          name: 'banana1',
          price: 21,
          color: 'yellow'
        }
      }
    },
    methods:{
      addItem:function(){
        console.log(this.goods)
        this.goods[1]={name:''}

        this.goods.push({name:'lbi2',price:22,color:'yellow11'})
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
