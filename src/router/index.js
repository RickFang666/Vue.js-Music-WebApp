import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'src/components/recommend/recommend'
import Singer from 'src/components/singer/singer'
import Search from 'src/components/search/search'
import Rank from 'src/components/rank/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }

  ]
})
