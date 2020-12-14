<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input type="text" v-model="ruleForm.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        pass: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", {
          username: this.ruleForm.user,
          password: this.ruleForm.pass,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.data.token);
          this.$router.push({ path: "/home" });
        })
        .catch((err) => {
          alert("登录失败");
        });
    },
  },
};
</script>

<style lang="scss">
</style>
