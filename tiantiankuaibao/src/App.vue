<template>
  <div class="page page-current">
    <router-view  transition="fade" transition-mode="out-in" keep-alive></router-view>
    <BarBottom v-if="isIndex">
      <BarBottomItem path="/home" label="新闻" icon="home"></BarBottomItem>
       <BarBottomItem path="/tasks" label="推荐" icon="tasks"></BarBottomItem>
       <BarBottomItem path="/list" label="直播" icon="mytask"></BarBottomItem>
       <BarBottomItem path="/user" label="我" icon="me"></BarBottomItem>
    </BarBottom>
  </div>
</template>

<script>
import BarBottom from './components/BarBottom'
import BarBottomItem from './components/BarBottomItem'
export default {
  name: 'app',
  components: {
    BarBottom,
    BarBottomItem
  },
  data () {
    return {
      isIndex: true
    }
  }
}
</script>

<style>
/*v-cloak 隐藏未编译的mustache标签直到实例准备完毕*/
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
