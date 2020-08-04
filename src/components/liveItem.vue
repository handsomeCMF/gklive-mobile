<template>
    <div id="live">
      <div style="position:relative">
        <img id="avator" v-lazy="avator" />
            <span class="anchor anchor-left">{{name}}</span>
            <span class="anchor anchor-right">{{field}}</span>
      </div>

        <div  class="title">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<style scoped>
.anchor {
    color:#ffffff;
    position:absolute;
    margin:2px;
    padding:2px;
    font-size: 12px;
}
.anchor-right{
    bottom: 0px;
    right: 0px;
}
.anchor-left{
    bottom: 0px;
    left: 0px;
}
#avator{
    width: 100%;
    height:25vw;
    border-radius: 6px;
}
#live{
    box-shadow: 2px 2px 2px #ffffff,-2px -2px 2px #ffffff;
    margin:5px;
    padding:2px;
    border-radius: 5px;
    background: #ffffff;
}

.title{
    margin-top:5px;
    font-size: 4.2vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
}
/* .anchor{
    background-color: rgb(95, 94, 94);
    border-radius: 12px;
    color:white;
    padding:0px 8px;
    position: absolute;
} */

</style>

<script>
export default {
  name: 'liveItem',
  props: {
    avator: String,
    name: String,
    title: String,
    field: String
  }
}
</script>
