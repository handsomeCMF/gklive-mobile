<template>
    <div>
    <pagination @loadMore="getLiveList" :finish="loading" >
    <!-- <van-pull-refresh v-model="isLoading" @refresh="getLiveList"> -->
      <div id="liveList">
        <ul>
          <li v-for="item in livedatas" :key="item.id">
            <live-item @click.native="intoLive(item.userinfoId.userId)" :name="item.userinfoId.nickname" :field="item.fields[0]" :title="item.title" :avator="item.coverImage?item.coverImage.url:require('../../assets/beauty.jpg')"></live-item>
          </li>
        </ul>
      </div>
    <!-- </van-pull-refresh> -->
    </pagination>
    </div>
</template>

<style scoped>

ul{
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li{
  width:46%;
  margin: 2px 0 8px 0;
}
</style>

<script>
import liveItem from '../../components/liveItem'
import pagination from '../../components/pagination'
import { Dialog } from 'vant'
import { roomList } from '../../utils/liveroom/liveroom'
export default {
  name: 'home',
  data () {
    return {
      offset: 1,
      limit: 2,
      total: -1,
      loading: false,
      livedatas: null
    }
  },
  components: {
    pagination,
    liveItem,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    intoLive: function (userid) {
      this.$router.push({ path: '/liveroom', query: { userId: userid } })
    },
    getLiveList: function () {
      var params = { page: this.offset, pageSize: this.limit }

      if (this.total > 0 && this.total <= this.limit * (this.offset - 1)) {
        this.loading = true
        return
      }
      var that = this
      roomList(params, this).then(
        function (res) {
          that.total = res.total
          if (!that.livedatas) {
            that.livedatas = res.data
          } else {
            that.livedatas = that.livedatas.concat(res.data)
          }
          that.offset += 1
        },
        function (err) {
          Dialog.alert({ message: err.message })
        })
    }
  }
}
</script>
