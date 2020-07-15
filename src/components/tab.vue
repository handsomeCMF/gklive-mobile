<template>
    <div id="tab" :style="theme">
        <van-icon size="30" :name="iconname"></van-icon>
        <span>{{tabname}}</span>
    </div>
</template>

<style scoped>
#tab{
  display: flex;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
}
</style>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'tab',
  props: {
    tabname: String,
    iconname: String
  },
  computed: {
    ...mapState([
      'themeStyle'
    ]),
    ...mapGetters([
      'theme'
    ])
  }
}
</script>
