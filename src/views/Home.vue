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
        <div id="main" style="width: 100vw - 200px; height: 400px"></div>
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
      allAdminCount: 0
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
    }
  },
  mounted() {
    this.djz();
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "走势图"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
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
