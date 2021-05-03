/*
 * @Description: 整体应用状态参数
 * @Author: John Holl
 * @Github: https://github.com/hzylyh
 * @Date: 2021-04-03 10:04:55
 * @LastEditors: John Holl
 */

const state = {
  sidebar: {
    opened: localStorage.getItem('sidebarStatus') ? !!+localStorage.getItem('sidebarStatus') : true,
    withoutAnimation: false
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      localStorage.setItem('sidebarStatus', 1)
    } else {
      localStorage.setItem('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    localStorage.setItem('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  ACTIVE_MENU: (state, active) => {
    state.sidebar.activeMenu =
      localStorage.setItem('activeMenu', active)
  }
}

const actions = {
  toggleSideBar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar ({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  activeMenu ({ commit }, { activeMenu }) {
    commit('ACTIVE_MENU', activeMenu)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
