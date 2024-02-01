<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link :to="{name:'home'}">
                <img class="logo" src="@/assets/logo.png" alt="sensor" />
            </router-link>
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'home'}">Home
                    </router-link>
                </li>
                <template v-if="isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'SncSensorData'}">
                            <i class="ion-compose" />
                            &nbsp; Dashboard
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'settings'}">
                            <i class="ion-gear-a" />
                            &nbsp; Settings
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{name: 'userProfile', params: {slug: currentUser}}"
                        >
                            {{ currentUser.currentUser }}
                        </router-link>
                    </li>
                    <!--<li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{name: 'SncChart', params: {slug: SncChart}}"
                        >
                            Sensor Chart
                        </router-link>
                    </li>-->
                </template>
                <template v-if="isAnonymous">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'signup'}">
                            Sign In
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login'}">
                            Login
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>
<script>

import { mapGetters } from "vuex"
import { getterTypes } from "@/store/modules/auth";

export default {
  methods: {
  },
    name: "SncTopbar",
    computed: {
        ...mapGetters({
            currentUser: getterTypes.currentUser,
            isLoggedIn: getterTypes.isLoggedIn,
            isAnonymous: getterTypes.isAnonymous
        })
    },
    mounted() {
        console.log("getterTypes.currentUser1: ", this.currentUser)
    }
}
</script>
<style>
.logo {
 width: 100px;
}
</style>