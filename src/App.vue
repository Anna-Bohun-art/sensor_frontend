<template>
    <div id="app">
        <snc-topbar />
        <router-view></router-view>
        <!--<BarChart aria-label="sendor datas" ref="bar" />-->
        <footer-page />
    </div>
</template>

<script>
import SncTopbar from "@/components/Topbar.vue"
import FooterPage from "@/components/FooterPage.vue"
//import  { actionTypes } from "@/store/modules/auth"
//import BarChart from "path/to/component/BarChart"

//const chartInstance = this.$refs.bar.chart

export default {
    name: "App",
    components: {SncTopbar, FooterPage },
   
}
</script>
