<template>
  <div class="layout-d">
    <!-- 路由出口 -->
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item
      v-for="tab in tabbarList"
      :key="tab.id"
      :icon="tab.icon"
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
          icon: 'home-o',
          name: '/choiceness'
        },
        {
          id: 2,
          title: '分类',
          icon: 'search',
          name: '/group'
        },
        {
          id: 3,
          title: '购物车',
          icon: 'friends-o',
          name: '/order'
        },
        {
          id: 4,
          title: '我的',
          icon: 'setting-o',
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
