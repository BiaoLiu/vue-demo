<template>
  <div>
    {{hello}}

    <p v-for="item in goods">
      {{item.name}}-{{item.price}}
    </p>

    <a v-bind:href="link">百度</a>
    <a :href="link">百度2</a>  <!--缩写-- 动态绑定 --->

    <a v-bind:class="classStr">test</a>
    <a v-bind:class="classObj">test2</a>

    <a v-if="status">为真</a>
    <a v-else>为假</a>

    <a v-show="status">为真的时候</a>

    <button v-on:click="addItem">显示列表</button>
    <button @click="toggle">toggle</button>
    <button v-on:click.stop="toggle">阻止冒泡</button>
    <input @keydown.enter="onKeyDown"></input>  <!--修改器-->
    <br/>
    <input type="text" v-model.number="myValue">
    <input type="text" v-model.lazy="myValue">
    {{myValue}}
    {{typeof myValue}}

    <input type="checkbox" name="fruit" value="apple" v-model="checkBox">
    <input type="checkbox" name="fruit" value="banana" v-model="checkBox">
    {{checkBox}}

    <select v-model="selection">
      <option value="1">apple</option>
      <option value="2">banana</option>
    </select>
    {{selection}}

    <select v-model="selection2">
      <option v-for="item in selectionOptions" :value="item.value">{{item.text}}</option>
    </select>
    {{selection2}}
    <br>
    <input type="text" v-model="computedtest">
    {{computedtestEnd}}  <!--计算属性与方法的区别，计算属性只会加载一次。。时间举例-->
    <component-b @my-event="onMyEvent"></component-b>
  </div>
</template>

<script>
  import Vue from 'vue'
  import componentB from '../components/b'

  export default {
    components: {
      componentB
    },
    data() {
      return {
        myValue: '',
        checkBox: [],
        selection: null,
        selection2: null,
        selectionOptions: [
          {
            text: 'apple',
            value: 0
          },
          {
            text: 'banana',
            value: 1
          }
        ],
        computedtest: '',
        hello: ' i am a component a',
        goods: [{
          name: 'lbi1',
          price: 25
        }],
        link: 'http://www.baidu.com',
        classStr: 'form',
        classObj: {
          'red-font': true,
          'green': false
        },
        status: true
      }
    },
    computed: {
      computedtestEnd() {
        return this.computedtest + ' end'
      }
    },
    watch:{  //监听属性
      computedtest:function(val,oldVal){
        console.log(val,oldVal)
      }
    },
    methods:
      {
        addItem: function () {
          console.log(this.goods)
          Vue.set(this.goods, 0, {name: 'lbi change', price: 25})
//          this.goods.push({name: 'lbi2', price: 22})
        },
        toggle() {
          this.status = !this.status
        },
        onKeyDown() {
          console.log('on key down')
        },
        onMyEvent(msg) {
          console.log('on my event' + msg)
        }
      }
  }
</script>

<style scoped>

</style>
