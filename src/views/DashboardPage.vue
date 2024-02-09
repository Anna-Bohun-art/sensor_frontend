<template>
    <div class="sensor-table">
        <h1 class="text-secondary google-font">Sensor's Data</h1>
        <div id="chart-wrapper">
            <canvas id="my-chart"></canvas>
        </div>
        <main>
            <!--<ChartSensorsData :sensorData="sensorData"/>-->
            <TablePagination
            @sensorData="sensorData"
            @onPageChanged="onPageChanged" 
            :totalPages="10"
            :perPage="10"
            :currentPage="currentPage"
            />  
            <table class="table table-hover table-striped  my-auto text-sm google-font text-center text-gray-500">
                <thead class="text-xs text-gray-700 google-font uppercase bg-gray-50">
                    <tr>
                        <th class="text-center px-4 py-3 google-font">#</th>
                        <th class="text-center px-4 py-3 google-font">Temperature</th>
                        <th class="text-center px-4 py-3 google-font">Humidity</th>
                        <th class="text-center px-4 py-3 google-font">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b" v-for="(item, index) in filteredEntries()" :key="item.__id" >
                        <td class="px-4 py-3 font-medium google-font text-gray-900">{{ index + 1 }}</td>
                        <td class="px-4 py-3 font-medium google-font text-gray-900">{{ item.temperature }}</td>
                        <td class="px-4 py-3 font-medium google-font text-gray-900">{{ item.humidity }}</td>
                        <td class="px-4 py-3 font-medium google-font text-gray-900">{{ item.location }}</td>
                        <td class="px-4 py-3 font-medium google-font text-gray-900">
                            <a href="#" class="text-success hover: underline">Details</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>
<script setup>
import {  onMounted, reactive, ref, watch } from 'vue';
import  { actionTypes } from '@/store/modules/sensorData'

import TablePagination from "@/components/TablePagination";
//import ChartSensorsData from "@/components/ChartSensorsData";
import store from "@/store"
import Chart from 'chart.js/auto';


//const isLoading = computed(()=> store.getterTypes.isLoading);
//const error = computed(()=> store.getterTypes.error);
//initializing reactive data for the App
const currentPage = ref(1);
const sensorData = reactive({value: []});

const data = reactive({value: {}});
const config = reactive({value: {}});


async function onFetch() {
    try {
        await store.dispatch(actionTypes.getSensorData)
            .then((sensors) => {
                sensorData.value = sensors;
                console.log("sensorData inside the Fetch function", sensorData.value);
                //return sensorData.value;
            });
    }
    catch(error) {
        console.log(error.message);
    }
}
onMounted(async () => {
    await onFetch();
    console.log("sensorData.value from onMount", sensorData.value);
    console.log("config.value: ",data.value)
    new Chart(
    document.getElementById("my-chart"),
    config.value
  )
})
function onPageChanged(page) {
    console.log('Page: ', page);
    currentPage.value = page;
}

function filteredEntries() {
    console.log("sensorData.value from filtereEntries function", sensorData.value)
    return sensorData.value.slice(currentPage.value*10 -10, currentPage.value*10);
}
console.log("sensorData from Dashboard", sensorData.value);

const getTemperatureArray =()=>{
    let temperatureArr = [];
    for(const item of sensorData.value){
        temperatureArr.push(item.temperature);
    }
    console.log("temperatureArr", temperatureArr);
    return temperatureArr;
    
}

const getHumidityArray =()=>{
    let humidityArr = [];
    for(const item of sensorData.value){
        humidityArr.push(item.humidity);
    }
    console.log("humidityArr", humidityArr);
    return humidityArr;
}
const getDate = () => {
    let dateArr = [];
    for(const date of sensorData.value){
        const newDate = new Date(date.createdAt);
        const pad=(n)=> {return n < 10 ? "0"+n : n;}
        let formattedDate = pad(newDate.getDate())+"/"+pad(newDate.getMonth()+1)+"/"+newDate.getFullYear();
        dateArr.push(formattedDate);
    }
    console.log("dateArr", dateArr);
    return dateArr;
}

data.value = {
  labels: getTemperatureArray(),
  datasets: [{
    label: "Temperature",
    backgroundColor: "rgb(255, 127, 127)",
    borderColor: "rgb(255, 127, 127)",
    data: getTemperatureArray(),
    tention: 0.4
  },
  {
    label: "Humidity",
    backgroundColor: "rgb( 144,238, 144)",
    borderColor: "rgb( 144,238, 144)",
    data: getHumidityArray(),
    tention: 0.4
  }]
}
console.log(data.value)
/*config.value = {
  type: "line",
  data: data.value,
  options: {}
}*/
watch(sensorData, (newSensorData) => {
    console.log("New sensor: ", newSensorData)
    data.value = {
        labels: getDate(),
        datasets: [{
            label: "Temperature",
            yAxisID: 'y',
            backgroundColor: "rgb(255, 127, 127)",
            borderColor: "rgb(255, 127, 127)",
            data: getTemperatureArray(),
        },
        {
            label: "Humidity",
            yAxisID: 'y1',
            backgroundColor: "rgb( 144,238, 144)",
            borderColor: "rgb( 144,238, 144)",
            data: getHumidityArray(),

        }]
    }, 
    /*config.value = {
        type: "line",
        data: data.value,
        options: {}
    }*/
    config.value = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    type: 'line',
    data: data.value,
    options: {
        scales: {
           
            y: {
                position: 'left',
                type: 'linear',
                display: true,
                beginAtZero: false,
                
                ticks: {
                    padding: 1
                }
            },
            y1: {
                position: 'right',
                type: 'linear',
                display: true,
                beginAtZero:false,
                max: 100,
                grid: {
                    drawOnChartArea: false
                },
                ticks: {
                    padding: 5,
                    callback: function(value){
                        return `${value}.0%`;
                    }
                }
            }
        }
    }
}
},{ deep: true });





    


</script>
<style>
.sensor-table > h1 {
    
    text-align: center;
}
 #chart-wrapper {
    display: inline-block;
    position: relative;
    width: 100vw;
  }
  #my-chart {
    width: 80%;
    margin: 0 10vw;
  }
.google-font {
    font-family: 'Playfair Display', serif;
}
</style>