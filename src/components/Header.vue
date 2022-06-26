<template>
  <div class="header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="gotoIndex">首页</el-dropdown-item>
        <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { AdminLogoutApi } from "@/api";

export default {
  name: "Header",
  data() {},
  methods: {
    jump() {
      this.$router.push("/login");
    },
    handleLogout() {
      this.$confirm("是否确认退出？", "确定退出", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(() => {
        const res = AdminLogoutApi();
        if (res.data.code == 1) {
          this.$massage.success(res.data.msg);
          this.$store.commit("logout");
          localStorage.removeItem("userInfo");
          this.$router.push("/index");
          this.jump();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: #eff2f7;
  padding-left: 20px;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-avatar {
  margin-top: 10px;
}
.el-breadcrumb {
  cursor: pointer;
  line-height: 60px;
}
</style>
