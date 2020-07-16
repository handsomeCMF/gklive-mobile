<template>
    <div>
      <div id="card">
        <img id="avator" v-lazy="require('../../assets/sign.png')"/>
        <div>
          <span>电一最强王者</span>
        </div>
      </div>
        <van-cell-group>
          <van-cell is-link title="主题" v-model="themeName" @click="showTheme=true"></van-cell>
        </van-cell-group>
        <van-action-sheet @select="choseTheme" close-on-click-action cancel-text="取消" v-model="showTheme" :actions="themes"></van-action-sheet>
    </div>
</template>
<style scoped>
#avator{
  width:75px;
  height:75px;
  margin-right:5px;
}
#card{
  margin:15px;
  border-radius: 10px;
  padding:10px;
  box-shadow: 2px 2px 5px #fff;
  background: #fff;
  display: flex;
  justify-content: left;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'mine',
  data () {
    return {
      showTheme: false,
      themes: [{ name: '经典' }, { name: '原谅' }, { name: '骚粉' }]
    }
  },
  computed: {
    ...mapGetters([
      'themeName'
    ])
  },
  methods: {
    choseTheme: function (item) {
      this.theme = item.name
      this.$store.dispatch('updateTheme', item.name)
    }
  }
}
</script>
