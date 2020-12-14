<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
    };
  },

  watch: {
    $route: {
      handler(newval, oldval) {
        console.log(newval);
        this.item = newval.meta.title;
      },
    },
  },
};
</script>