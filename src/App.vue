<template>
  <div id="app">
    <el-container>
      <el-header v-show="show">
        <el-menu class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/vip">会员</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/shopin">商品</el-menu-item>
          <el-menu-item @click="logino">退出登录</el-menu-item>
        </el-menu>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  watch: {
    $route: {
      handler(newval, oldval) {
        if (newval.path == "/login") {
          this.show = false;
        } else {
          this.show = true;
        }
      },
    },
  },

  methods: {
    logino(){
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
