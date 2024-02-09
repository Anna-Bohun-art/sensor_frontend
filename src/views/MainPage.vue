<template>
    <div class="container">
        
            <h1 class="text-secondary google-font my-5 mx-auto lh-lg"> Some Info about this App</h1>
        
        <div class="row">
            <div class="col col-lg-8">
                <h5 class="text-secondary google-font lh-lg">
                    For this App DHT11 sensors connected to NodeMCU V3 were used. The Backend is  written on Node.js with the help of Express Framework. The Frontend is written on Javascript with the help of Vue.js Framework. The Backend service has two APIs -  one to receive the API call from Rasberry Pie and another one to send this data to the Frontend service.  The FrontEnd service consists of two parts - Authentication part and Sensor part itself. The non sequel databank MongoDB is used for both Authentication and Sensor's data. Authentication is made with JSON Web Tokens. Only Authenticated people can see the sensor's Chart and table. The table consists of different filter available to filter sensor 's output.
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
<style>
.google-font {
    font-family: 'Playfair Display', serif;
}
</style>