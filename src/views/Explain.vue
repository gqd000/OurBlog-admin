<template>
  <div>
    <Header></Header>
    <p>node-elm后台管理系统</p>
    <p>第一次登录的用户自动注册成为普通管理员</p>
    <p>普通管理员可以添加，修改信息</p>
    <p>超级管理员可以删除信息</p>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "explain",
  components: { Header }
};
</script>

<style lang="scss" scoped>
p {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: #333;
}
</style>
