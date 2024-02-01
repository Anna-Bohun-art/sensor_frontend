<template>
    <ul class="error-messages">
        <li v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>
<script>
    export default {
        name: "SncValidationErrors",
        props: {
            validationErrors: {
                type: Object,
                required: true
            }
        },
        computed:{
            errorMessages(){
                const errors = [];
                for(const [ key, value] of Object.entries(this.validationErrors)){
                    errors.push(value.message);
                    console.log("errors: ", errors, " - key: ", key);
                }
                return errors;
            }
        }
    }
</script>