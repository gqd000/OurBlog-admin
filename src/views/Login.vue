<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
    <el-form-item><h1 style="font-size: 24px;text-align: center">OurBlog 后台管理系统</h1></el-form-item>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "111111"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
          // {
          //   min: 6,
          //   max: 16,
          //   message: '长度在 6 到 16 个字符',
          //   trigger: 'blur',
          // },
        ]
      }
    };
  },
  methods: {

    // 异步函数写法
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (!valid) return;
        let { data: res } = await this.$axios.login(this.ruleForm);
        if (res.code != 1) {
          this.$message.error(res.msg);
        } else {
          this.$message.success(res.msg);
          this.$router.push("/index");
        }
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #324057;
  & > p {
    color: #fff;
    font-size: 34px;
    text-align: center;
    padding-top: 260px;
  }
  & > .el-form {
    width: 370px;
    height: 270px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 5px;
    .el-input,
    .el-button {
      width: 100%;
    }
    & > p {
      font-size: 12px;
      color: red;
      text-align: center;
    }
  }
}
</style>
