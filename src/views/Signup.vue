<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <router-link :to="{name: 'login'}">
                            Have an account?
                        </router-link>
                    </p>
                    <snc-validation-errors v-if="validationErrors" :validation-errors="validationErrors">
                        <!--
                            <div  v-for="(item, index) in validationErrors" v-bind:key="index" >
                               {{ item }}
                            </div>
                        </ul>-->
                    </snc-validation-errors>
                        <!--<li v-for="validationError in validationErrors.props" >
                            {{validationError}}
                        </li>-->
                    
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Username"
                            v-model="username" />
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="text" placeholder="Email"
                            v-model="email" />
                        </fieldset><fieldset class="form-group">
                            <input class="form-control form-control-lg" type="password" placeholder="Password"
                            v-model="password" />
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
import SncValidationErrors from "@/components/ValidationErrors.vue"
import {actionTypes} from "@/store/modules/auth"
    export default {
  created () {
  },
        name: "SncRegister",
        components: {
            SncValidationErrors
        },
        data(){
            return {
                username: "",
                email: "",
                password: "",
            }
        },
        computed: {
            ...mapState({
            isSubmitting: state => state.auth.isSubmitting,
            validationErrors: state => state.auth.validationErrors
        })
            /*isSubmitting(){
                return this.$store.state.auth.isSubmitting
            },
            validationErrors(){
                return this.$store.state.auth.validationErrors
            }*/
        },
        methods:{
            onSubmit(){
                console.log("On submit")
                this.$store
                .dispatch(actionTypes.register, {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
                .then(()=> {
                    this.$router.push({name: "dashboard"})
                })
            }
        }

    }
</script>
<style>
.auth-page {
    margin-bottom: 100px;
}
</style>