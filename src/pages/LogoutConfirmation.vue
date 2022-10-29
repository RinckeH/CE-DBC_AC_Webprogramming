<template>
    <!-- When a startup is logs out it will be linked to a logout confirmation-->
    <div class="logoutconfirmation">
        <start-screen-template-vue>
            <!-- calling / importing the start screen template vue to use the left image with the aqua background color -->
            <h2>FIJNE DAG VERDER</h2>
            <h1>Je bent uitgelogd</h1>
            <p class="introduction"> Je bent afgemeld bij jouw account. <router-link class="back_to_login" to="/login"> Klik hier </router-link> om terug te keren naar de startpagina of sluit dit webvenster. </p>
        </start-screen-template-vue>
        
    </div>
</template>



<script>
import StartScreenTemplateVue from '../components/StartScreenTemplate.vue';
// importing the component to use it in within the template//
export default {
    name: 'LogoutConfirmation',
    components:{
        StartScreenTemplateVue: StartScreenTemplateVue,
    },
    data() {
        return {

        }
    }    
}

</script>

<style scoped>
 /* it is scoped so all the styling elements are only for the BasepPage 
    and won't influence other pages / components */
    .content-right > h2 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color:#29B7B9;
        font-size: 24px;
    }

    .content-right > h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color:black;
        font-size: 48px;
    }

    .introduction {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color:black;
        font-size: 18px;
    }

    .input {
        margin-top: 42px;
    }
    input {
        margin-bottom: 20px;
    }

    button {
        margin-top: 42px;
    }

    .password_information {
        margin-top: 42px;
        font-size: 14px;
        font-weight: 400;
    }
    .password_reset_link{
        color: black;
        font-weight:700;
    }

    .back_to_login {
        color: black;
        font-weight: 700;
    }

</style>