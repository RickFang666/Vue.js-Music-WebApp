<template>
  <transition name="slide">
    <div class="singer-detail">

    </div>
  </transition>

</template>

<script type="text/ecmascript-6">

import {mapGetters} from 'vuex'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'

export default {
  data() {
    return {
      songs: []
    }
  },
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created() {
    this._getDetail()
    console.log(this.singer)
  },
  methods: {
    _getDetail() {
      if(!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if(res.code === ERR_OK) {
          console.log(res.data)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach(() => {
        let {musicData} = item
      })
    }
  }
}
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
    transform: translate3d(100%,100%,0)
</style>
