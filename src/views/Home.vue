<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/img">
            <i class="el-icon-document"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/imgs">
            <i class="el-icon-setting"></i>
            <span slot="title">相册1</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <child></child>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import child from "../components/children";
export default {
  name: "Home",
  components: {
    child,
  },
};
</script>
