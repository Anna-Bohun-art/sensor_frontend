<template>
    <nav class="navbar navbar-toggler navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid mb-0">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link :to="{name:'home'}">
                        <img class="nav-link logo" src="@/assets/logo.png" alt="sensor" />
                    </router-link>
                </li>
                <!--<div class=" nav navbar-nav pull-xs-right">-->
                    <li class="nav-item navbar-text active">
                        <router-link class="nav-link active google-font" :to="{name:'home'}">Home
                        </router-link>
                    </li>
                    <template v-if="isAnonymous">
                        <li class="nav-item navbar-text">
                            <router-link class="nav-link text-secondary google-font" :to="{ name: 'signup'}">
                                Sign In
                            </router-link>
                        </li>
                        <li class="nav-item navbar-text">
                            <router-link class="nav-link text-secondary google-font" :to="{ name: 'login'}">
                                Login
                            </router-link>
                        </li>
                    </template>
                    <template v-if="isLoggedIn">
                        <li class="nav-item navbar-text">
                            <router-link class="nav-link google-font" :to="{ name: 'SncSensorData'}">
                                <i class="ion-compose" />
                                &nbsp; Dashboard
                            </router-link>
                        </li>
                        <li class="nav-item navbar-text">
                            <router-link class="nav-link google-font" :to="{ name: 'settings'}">
                                <i class="ion-gear-a" />
                                &nbsp; Settings
                            </router-link>
                        </li>
                        <li class="nav-item navbar-text">
                            <router-link
                                class="nav-link google-font"
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
                <!--</div>-->
                </ul>
        </div>
    </nav>
</template>
<script>

import { mapGetters } from "vuex"
import { getterTypes } from "@/store/modules/auth";

export default {
  props: {
  },
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
        console.log("this.isLoggedIn", this.isLoggedIn);
        console.log("this.isAnonymous", this.isAnonymous);
    }
}
</script>
<style scoped>
.logo {
 width: 100px;
}
.google-font {
    font-family: 'Playfair Display', serif;
}
</style>