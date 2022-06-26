<template>
  <div class="home">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-main>
        <section class="data_section">
          <header class="section_title">数据统计</header>
          <!-- 总数据 必须显示 -->
          <el-row style="margin: 40px auto" :gutter="20">
            <el-col :span="4">
              <div class="data_list all_head">
                <span class="data_num head">总数据：</span>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ allUserCount }}</span> 总注册用户数
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ allArticleCount }}</span> 总文章数
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data_list">
                <span class="data_num">{{ allAdminCount }}</span> 管理员数
              </div>
            </el-col>
          </el-row>
        </section>
        <!-- 图表 -->
        <el-container>
          <div id="main" style="width:800px;height:400px"></div>
          <div style="display:flex;width:400px;flex-wrap:wrap;justify-content:space-between">
            <el-header style="width:400px">文章标签</el-header>
            <el-tag type="success" v-bind:key="tag" v-for="tag in tags">{{ tag }}</el-tag>
          </div>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/Header";
import * as echarts from "echarts";
// 补0函数
function dateMent(num) {
  return num < 10 ? "0" + num : num;
}
var dateTime = new Date();
var year = dateTime.getFullYear();
var month = dateMent(dateTime.getMonth() + 1);
var day = dateMent(dateTime.getDate());
// var hour = dateTime.getHours();
// var minutes = dateTime.getMinutes();
// var seconds = dateTime.getSeconds();
// var time = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
var time = year + "-" + month + "-" + day;
sessionStorage.setItem("time", time);
console.log(time.substring(0, 10));
export default {
  name: "home",
  components: { Header },
  data() {
    return {
      allUserCount: 0,
      allArticleCount: 0,
      allAdminCount: 0,
      tags: ["Spring", "Java", "JavaScript", "C++", "Python"]
    };
  },
  methods: {
    async djz() {
      const res1 = await this.$axios.users();
      this.allUserCount = res1.data;

      const res2 = await this.$axios.articles();
      this.allArticleCount = res2.data;

      const res3 = await this.$axios.admins();
      this.allAdminCount = res3.data;
    },
  },
  mounted() {
    this.djz();
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    const option = {
      // legend: {
      //   // 图例
      //   data: ["Spring", "JavaScript", "Java", "C++", "Python"],
      //   left: "10%",
      //   top: "30%",
      //   orient: "vertical",
      // },
      title: {
        // 设置饼图标题，位置设为顶部居中
        text: "文章分类",
        top: "0%",
        left: "center",
      },
      series: [
        {
          type: "pie",
          data: [
            {
              value: 463,
              name: "Spring",
            },
            {
              value: 395,
              name: "JavaScript",
            },
            {
              value: 157,
              name: "Java",
            },
            {
              value: 149,
              name: "C++",
            },
            {
              value: 147,
              name: "Python",
            },
          ],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  padding: 0;
  .el-header {
    background-color: #eff2f7;
    color: #97a8be;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    padding: 0;
    height: 100%;
    .el-row {
      display: flex;
      justify-content: center;
    }
  }
}
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 26px;
    }
    .head {
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
#main {
  display: flex;
  justify-content: center;
}
</style>
