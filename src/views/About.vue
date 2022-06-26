<template>
  <div></div>
</template>

<script>
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
console.log(time.substring(0, 10));
export default {
  data() {
    return {
      time: time
      // time: new Date()
      //   .toLocaleString()
      //   .replace(/下午/g, "")
      //   .replace(/\//g, "-")
      //   .padStart(2, "0")
    };
  }
};
</script>

<style lang="scss" scoped></style>
