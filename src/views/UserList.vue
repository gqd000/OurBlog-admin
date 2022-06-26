<template>
  <div class="userlist">
    <Header></Header>
    <section>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="#" width="100"> </el-table-column>
        <el-table-column prop="registe_time" label="注册日期" width="200">
        </el-table-column>
        <el-table-column prop="username" label="用户姓名" width="200">
        </el-table-column>
        <el-table-column prop="city" label="注册地址"> </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="pagenum"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "userlist",
  components: { Header },
  data() {
    return {
      tableData: [],
      pagenum: 1,
      pagesize: 10,
      total: 0,
      num: 0
    };
  },
  mounted() {
    this.getUserList();
    this.$axios.users().then(res => {
      console.log(res);
      this.total = res.data.count;
    });
  },
  methods: {
    // 获取数据
    async getUserList() {
      let { data: res } = await this.$axios.userlist({
        offset: this.num,
        limit: "20"
      });
      console.log(res);
      this.tableData = res;
    },
    // 点击页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = (val - 1) * 20;
      console.log(this.num);
      this.getUserList();
    }
  }
};
</script>

<style lang="scss">
.el-table td,
.el-table th {
  padding: 8px 0;
}
</style>
