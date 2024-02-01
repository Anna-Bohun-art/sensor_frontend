<template>
  <div class="chart">
    <canvas id="my-chart"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Chart from 'chart.js/auto';
import sensorData from "@/store/modules/sensorData";

const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
console.log(sensorData);

const data = {
  labels: labels,
  datasets: [{
    label: "My First dataset",
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
    data: [0, 10, 5, 2, 20, 30 ],
  }]
}
const config = {
  type: "line",
  data: data,
  options: {}
};
onMounted(()=> {
   new Chart(
    document.getElementById("my-chart"),
    config
  )
  console.log("sensorData from Chart", sensorData);
})

</script>