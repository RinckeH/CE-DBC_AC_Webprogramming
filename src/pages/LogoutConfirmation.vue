<template>
    <div class="logoutconfirmation">
        <start-screen-template-vue>
            <h2>FIJNE DAG VERDER</h2>
            <h1>Je bent uitgelogd</h1>
            <p class="introduction"> Je bent afgemeld bij jouw account. <router-link class="back_to_login" to="/login"> Klik hier </router-link> om terug te keren naar de startpagina of sluit dit webvenster. </p>
        </start-screen-template-vue>
        
    </div>
</template>



<script>
import StartScreenTemplateVue from '../components/StartScreenTemplate.vue';

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