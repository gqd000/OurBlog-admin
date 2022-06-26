<template>
  <div class="shoplist">
    <Header></Header>
    <section>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{ props.row.description }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{ props.row.phone }}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{ props.row.rating }}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{ props.row.recent_order_num }}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="店铺名称" prop="name"></el-table-column>
        <el-table-column label="店铺地址" prop="address"></el-table-column>
        <el-table-column label="店铺介绍" prop="description"></el-table-column>
        <el-table-column label="操作" prop="desc">
          <el-button size="mini" @click="dialogFormVisible = true"
            >编辑</el-button
          >
          <el-button size="mini">添加食品</el-button>
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
      <!-- 编辑信息弹出框 -->
      <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="店铺名称" label-width="100px">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" label-width="100px">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店铺介绍" label-width="100px">
            <el-input v-model="form.description" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" label-width="100px">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类" label-width="100px">
            <el-cascader
              v-model="category"
              :options="options"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="商品图片" label-width="100px">
        
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "shoplist",
  components: { Header },
  data() {
    return {
      tableData: [],
      pagenum: 1,
      pagesize: 20,
      total: 0,
      num: 0,
      latitude: null,
      longitude: null,
      offset: 0,
      limit: 20,
      form: {
        name: "",
        address: "",
        description: "",
        phone: ""
      },
      category: "",
      options: [],
      dialogFormVisible: false
    };
  },
  created() {},
  mounted() {
    this.getShopList();
    this.$axios.shopcount().then(res => {
      console.log(res);
      this.total = res.data.count;
    });
  },
  methods: {
    // 获取数据
    getShopList() {
      this.$axios.guess().then(rs => {
        console.log(rs);
        this.latitude = rs.data.latitude;
        this.longitude = rs.data.longitude;
        this.$axios
          .shoplist({
            latitude: this.latitude,
            longitude: this.longitude,
            offset: this.offset,
            limit: this.limit
          })
          .then(res => {
            console.log(res);
            this.tableData = res.data;
          });
      });
    },
    // 点击页码
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.num = (val - 1) * 20;
      console.log(this.num);
      this.getShopList();
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
