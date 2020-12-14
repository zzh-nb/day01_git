<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item index="/shop">
            <i class="el-icon-menu"></i>
            <span slot="title">商品</span>
          </el-menu-item>
          <el-menu-item index="/shops">
            <i class="el-icon-document"></i>
            <span slot="title">商品列表</span>
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
  components:{
    child

  }
}
</script>