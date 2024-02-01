<template>
    <div id="app">
        <snc-topbar />
        <router-view></router-view>
        <!--<BarChart aria-label="sendor datas" ref="bar" />-->
    </div>
</template>

<script>
import SncTopbar from "@/components/Topbar.vue"

//import  { actionTypes } from "@/store/modules/auth"
//import BarChart from "path/to/component/BarChart"

//const chartInstance = this.$refs.bar.chart

export default {
    name: "App",
    components: {SncTopbar /*BarChart*/ },
   
}
</script>
