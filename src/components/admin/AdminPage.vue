<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <bar-chart></bar-chart>
      </div>
      <div class="column">
        <h3>User 목록</h3>
        <Users></Users>
      </div>
    </div>
  </section>
</template>
<script>
  import LineChart from '@/components/charts/LineChart'
  import BarChart from '@/components/charts/BarChart'
  import Users from '@/components/admin/Users.vue'

  export default {
    name: 'VueChartJS',
    components: {
      LineChart,
      BarChart,
      Users,
    },
    data() {
      return {
        datacollection: null // instantiating datacollection with null
      }
    },
    created() {
      this.fillData() //anytime the vue instance is created, call the fillData() function.
    },
    methods: {
      fillData() {
        this.datacollection = {
          // Data for the y-axis of the chart
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
          'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              // Data for the x-axis of the chart
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), 
              this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), 
              this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt() {
        // JS function to generate numbers to be used for the chart
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>