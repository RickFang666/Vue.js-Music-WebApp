<template>
  <transition class="slide">
    <div class="singer-detail">

    </div>
  </transition>

</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .singer-detail
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 100000
    background #000

  .slide-enter-active, .slide-leave-active
    transition all .3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%,0%,0)
</style>
