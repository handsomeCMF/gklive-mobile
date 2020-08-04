<template>
    <div id="page">
        <div id="scrollContain">
          <slot></slot>
        </div>
        <div v-if="loading">
          <div class="load" v-if="finish">
            <span>没有厨师做菜了。。</span>
          </div>
          <div class="load" v-else>
            <van-loading size="24px">做菜中...</van-loading>
          </div>
        </div>

    </div>
</template>

<style scoped>

#page{
  height: inherit;
  overflow-y:scroll
}
.load{
  text-align: center;
}
</style>

<script>
export default {
  name: 'page',

  props: {
    finish: Boolean
  },
  data () {
    return {
      container: null,
      loading: false
    }
  },
  methods: {
    scrollPage: function () {
      const scrollTop = this.container.scrollTop
      if (this.$el.scrollHeight - scrollTop - this.container.clientHeight <= 0 && !this.loading && !this.finish) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 500)

        this.$emit('loadMore')
      }
    },
    bindScroll: function () {
      this.unscroll()
      this.container.addEventListener('scroll', this.scrollPage, true)
    },
    unscroll: function () {
      this.container.removeEventListener('scroll', this.scrollPage)
    },
    switchBottom: function () {
      this.$nextTick(() => {
        const containHeigth = this.container.childNodes[0].scrollHeight
        if (containHeigth < this.container.clientHeight && !this.loading && !this.finish) {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 1000)

          this.$emit('loadMore')
        }
      })
    }
  },
  mounted () {
    this.container = this.$el
    this.switchBottom()
    this.bindScroll()
  },
  updated () {
    this.switchBottom()
  },
  destroyed () {
    this.unscroll()
  }
}
</script>
