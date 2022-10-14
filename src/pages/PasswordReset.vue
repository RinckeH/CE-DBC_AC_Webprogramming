<template>
    <div class="passwordreset">
        <start-screen-template-vue>
            <h2>ACCOUNTGEGEVENS</h2>
            <h1>Wachtwoord</h1>
            <p class="introduction"> Verander je wachtwoord hieronder door de velden in te vullen en ontvang een bevestiging van je gewijzigde gegevens. </p>
            <div class="input">
                <input placeholder="Wachtwoord" type="text">
                <input placeholder="Herhaling wachtwoord" type="text">
                <input placeholder="E-mail" type="text">
            </div>
            <button class="primary">Wijzig</button>
            
        </start-screen-template-vue>
        
    </div>
</template>



<script>
import StartScreenTemplateVue from '../components/StartScreenTemplate.vue';

export default {
    name: 'PasswordReset',
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

</style>