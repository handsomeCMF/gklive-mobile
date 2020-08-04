<template>
    <div>
        <h1>关注</h1>
        <button @click="back" >1222</button>
    </div>
</template>
<script>
export default {
  name: 'star',
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  }
}
</script>
