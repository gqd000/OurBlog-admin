<template>
  <div class="foodlist">
    <Header></Header>
    <section>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="食品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="餐馆名称">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="食品 ID">
                <span>{{ props.row.item_id }}</span>
              </el-form-item>
              <el-form-item label="餐馆 ID">
                <span>{{ props.row.restaurant_id }}</span>
              </el-form-item>
              <el-form-item label="食品介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="餐馆地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="食品评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="食品分类">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="月销量">
                <span>{{ props.row.month_sales }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="食品名称" prop="name"></el-table-column>
        <el-table-column label="食品介绍" prop="description"></el-table-column>
        <el-table-column label="评分" prop="rating"></el-table-column>
        <el-table-column label="操作" prop="desc">
          <el-button size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
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
import { _debounce } from "../utils/fetch";
import Header from "../components/Header";
export default {
  name: "foodlist",
  components: { Header },
  data() {
    return {
      tableData: [],
      pagenum: 1,
      pagesize: 20,
      total: 0,
      num: 0,
      input: ""
    };
  },
  mounted() {
    this.getFoodList();
    this.$axios.foodcount().then(res => {
      console.log(res);
      this.total = res.data.count;
    });
  },
  methods: {
    // 防抖
    inp: _debounce(function() {
      console.log(this.input);
    }, 300),
    // 获取数据
    async getFoodList() {
      let { data: res } = await this.$axios.foodlist({
        offset: this.num,
        limit: 20,
        restaurant_id: "undefined"
      });
      console.log(res);
      this.tableData = res;
    },
    // 点击页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = (val - 1) * 20;
      console.log(this.num);
      this.getFoodList();
    }
  }
};
</script>

<style lang="scss">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table td,
.el-table th {
  padding: 0;
}
.el-form-item {
  text-indent: 10em;
}
</style>
