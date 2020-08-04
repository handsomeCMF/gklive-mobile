<template>
    <div id="app">
        <div id="player">
            <div class="video">
                <iframe class="video-iframe" ref="iframe" :src="'https://api.nulldream.xyz'+liveUrl" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
            </div>
        </div>
        <div id="contact">

        </div>
    </div>
</template>
<style scoped>
#player{
    width:100%;
    height: 57vw;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #ffffff inset,-2px -2px 2px #ffffff inset;
}
.video{
    height: inherit;
    margin:1vw;
    width:98vw;
    overflow: hidden;
}
.video-iframe{
    height: 100%;
    width:100%;
}
</style>

<script>
import { getOwnerRoom } from '../../utils/liveroom/liveroom.js'
import { Dialog } from 'vant'
export default {
  name: 'liveromm',
  components: { [Dialog.Component.name]: Dialog.Component },
  data () {
    return {
      liveUrl: ''
    }
  },
  methods: {
    getLiveroom: function () {
      var that = this
      getOwnerRoom({ id: this.$route.query.userId }, this).then(
        function (res) {
          that.liveUrl = res.data.url
        },
        function (err) { Dialog.alert({ message: err.message }) }
      )
    },
    lanchFullScreenAction: function (doc) {
      if (doc.requestFullScreen) {
        doc.requestFullScreen()
      } else if (doc.mozRequestFullScreen) { // 兼容moz
        doc.mozRequestFullScreen()
      } else if (doc.webkitRequestFullScreen) { // 兼容webkit
        doc.webkitRequestFullScreen()
      }
    },
    exitFullScreenAction: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) { // 兼容moz
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) { // 兼容webkit
        document.webkitExitFullscreen()
      }
    }
  },
  created () {
    this.getLiveroom()
  },
  mounted () {
    var that = this // listener里的指向问题
    // 接受iframe传过来的数据
    window.addEventListener('message', function (event) {
      switch (event.data.event) {
        case 'video-fullscreen':
          var action = event.data.params.action
          if (action === 'enter') {
            that.lanchFullScreenAction(that.$refs.iframe)
          } else if (action === 'exit') {
            that.exitFullScreenAction()
          }
          break
        case 'live-room-state':

          break
        case 'live-room-num':
          that.roomNum = event.data.params.num
          break
        case 'live-room-message':
          var s = Symbol('id')
          var mess = event.data.params.fromNick + ' : ' + event.data.params.message
          that.message.push({ id: s, mess: mess })
          break
      }
    })
  },
  destroyed () {
    window.removeEventListener('message', this.handleMessage)
  }
}
</script>
