<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/vip">
            <i class="el-icon-menu"></i>
            <span slot="title">会员页</span>
          </el-menu-item>
          <el-menu-item index="/vips">
            <i class="el-icon-document"></i>
            <span slot="title">会员列表页</span>
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
import child from "../../components/children";
export default {
  components: {
    child,
  },
};
</script>