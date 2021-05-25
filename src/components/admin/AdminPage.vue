P<template>
  <div id="admin">
    <h3 class="m-5">가입자 추이</h3>
    <line-chart :label="joindate" :chart-data="totalUser"></line-chart>
    <h3 class="m-5">사용자 통계 분석</h3>
    <pie-chart :label="gender" :chart-data="genderCnt"></pie-chart>
    <bar-chart :label="region" :chart-data="regionCnt"></bar-chart>
    <Users />
  </div>
</template>

<script>
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Users from "./Users";
import rest from "@/js/httpCommon.js";

export default {
  name: "Admin",
  components: {
    LineChart,
    PieChart,
    BarChart,
    Users,
  },
  data() {
    return {
        joindate : 
        ["January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",],
        totalUser : [],
        gender: ['man', 'woman'],
        genderCnt: [],
        region: [],
        regionCnt: [],
    };
  },
  async created() {
    const { regiondata } = await rest.axios.get("/interest");
    const { data } = await rest.axios.get("/user/admin");
    
    let man = 0;
    let woman = 0;
    let month = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(regiondata);
    for (let i=0; i<data.length; i++) {
      let date = data[i].joindate.substr(3,2);
      switch(+date) {
        case 1: month[1]++; break;
        case 2: month[2]++; break;
        case 3: month[3]++; break;
        case 4: month[4]++; break;
        case 5: month[5]++; break;
        case 6: month[6]++; break;
        case 7: month[7]++; break;
        case 8: month[8]++; break;
        case 9: month[9]++; break;
        case 10: month[10]++; break;
        case 11: month[11]++; break;
        case 12: month[12]++; break;
      }
      
      if (data[i].gender=='남') {
        man++;
      } else {
        woman++;
      }
    }
    for (let i=1; i<=12; i++) {
      this.totalUser.push(month[i]);
    }
    this.genderCnt.push(man);
    this.genderCnt.push(woman);
    
    console.log(this.totalUser);
    console.log(man + ":" + woman);
  },
};
</script>

<style>
</style>
