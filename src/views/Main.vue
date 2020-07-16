<template>
    <div id="app">
        <!-- <div id="navBar">
            <van-nav-bar title="背锅侠" left-text="返回" right-text="确定" left-arrow></van-nav-bar>
        </div> -->

        <router-view/>
        <div id="footbar">
            <router-link to="/home" @click.native="choseTab('home')" >
                <tab tabname='主页' iconname='wap-home-o' :style="selectBar=='home'?activeStyle:''"></tab>
            </router-link>
            <router-link to="/star"  @click.native="choseTab('star')">
                <tab tabname='关注' iconname='star-o' :style="selectBar=='star'?activeStyle:''"></tab>
            </router-link>
            <router-link to="/mine"  @click.native="choseTab('mine')">
                <tab tabname='我的' iconname='user-circle-o' :style="selectBar=='mine'?activeStyle:''" ></tab>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
#app{
    background-color: rgb(247, 248, 250);
}
.van-icon{
    size: 20px;
}
#footbar{
    width: 100%;
    position: fixed;
    bottom:0px;
    display: flex;
    justify-content: space-around;
    border-radius: 12px;
    background: #ffffff;
}

a{
  text-decoration: none;
}
a:visited{
  text-decoration: none;
}
</style>
<script>
import tab from '../components/tab'

export default {
  components: { tab },
  data () {
    return {
      selectBar: this.$route.path.replace(/^(\/(\w+))\/?/gi, '$2'),
      activeStyle: { color: 'red' }
    }
  },
  methods: {
    choseTab: function (value) {
      this.selectBar = value
    }
  }

}
</script>
