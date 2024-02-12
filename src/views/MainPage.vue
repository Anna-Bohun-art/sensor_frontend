<template>
    <div class="container">
        <div class="row">
            <h1 class="text-secondary text-center google-font lh-lg my-">
                Some Info about this App
            </h1>
        </div>
        <div class="row">
            <div class="col col-lg-8 px-5">
                <h5 class="text-secondary google-font lh-lg">
                    For this App DHT11 sensors connected to NodeMCU V3 with Wi-Fi were used. The Backend is  written on Node.js with the help of Express Framework. The Frontend is written on Javascript with the help of Vue.js Framework. The Chart.js library was used for the creating nice and scalable chart. The Backend service has two APIs -  one to receive the API call from NodeMCU V3 and another one to send this data to the Frontend service.  The FrontEnd consists of two parts - Authentication part and Dashboard part that shows sensor's data. The non sequel databank MongoDB is used for both Authentication and Sensor's data. Authentication is made with JSON Web Tokens. Only Authenticated people are allowed to see the sensor's data. The table consists of different filters available to filter sensor's output.
                </h5>
            </div>
            <div class="col">
                <img src="@/assets/img/smart_home.jpg" />
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.google-font {
    font-family: 'Playfair Display', serif;
}
</style>