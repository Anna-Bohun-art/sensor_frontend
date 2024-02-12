<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center mb-5">Sign in</h1>

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
                            <input class="form-control form-control-lg mb-5" type="text" placeholder="Email"
                            v-model="email" />
                        </fieldset><fieldset class="form-group">
                            <input class="form-control form-control-lg mb-5" type="password" placeholder="Password"
                            v-model="password" />
                        </fieldset>
                        <button class="btn btn-lg btn-success pull-xs-right" :disabled="isSubmitting">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
import SncValidationErrors from "@/components/ValidationErrors.vue"
import { actionTypes } from "@/store/modules/auth"
    export default {
  created () {
  },
        name: "SncLogin",
        components: {
            SncValidationErrors
        },
        data(){
            return {
                email: "annabohun83@gmail.com",
                password: "Ak980006,",
            }
        },
        computed: {
            ...mapState({ isSubmitting: state => state.auth.isSubmitting,
                validationErrors: state => state.auth.validationErrors
            })
        },
        methods:{
            onSubmit(){
                try{
                    this.$store.dispatch(actionTypes.login, {
                    email: this.email,
                    password: this.password
                    }).then(()=> {
                        this.$router.push({name: "SncSensorData"})
                    })
                } catch(error){
                    console.log(error.message);
                }
                
            }
        }

    }
</script>