<template>
  <div class="layout-d">
    <!-- 路由出口 -->
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
      v-for="tab in tabbarList"
      :key="tab.id"
      :class="tab.icon"
      :to="tab.name">
        {{ tab.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout-d',
  data () {
    return {
      active: '/choiceness',
      tabbarList: [
        {
          id: 1,
          title: '精选',
          icon: 'iconfont icon- icon-compass',
          name: '/choiceness'
        },
        {
          id: 2,
          title: '分类',
          icon: 'iconfont icon- icon-yingyong',
          name: '/group'
        },
        {
          id: 3,
          title: '购物车',
          icon: 'iconfont icon- icon-gouwucheman',
          name: '/order'
        },
        {
          id: 4,
          title: '我的',
          icon: 'iconfont icon- icon-31wode',
          name: '/user'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {}
}
</script>

<style scoped></style>
