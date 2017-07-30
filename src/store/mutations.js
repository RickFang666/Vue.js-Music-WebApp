import * as types from './mutation-types.js'

const mutations = {
  [types.SET_SINGER](state,singer) {
    state.singer = singer
  }
}

export default mutations
