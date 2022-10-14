<template>
    <div class="register">
        <start-screen-template-vue>
            <h2>WELKOM</h2>
            <h1>Aanmelden</h1>
            <p class="introduction"> Lorem ipsum dolor sit amet, consectetur adipiscing elxit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="input">
                <input placeholder="Naam" type="text">
                <input placeholder="Achternaam" type="text">
                <input placeholder="E-mail" type="text">
            </div>
            <button class="primary">Meld mij aan!</button>
            <p class="password_information">Wachtwoord vergeten? Geen probleem, <router-link class="password_reset_link" to="/passwordreset" >Klik hier.</router-link></p>
        </start-screen-template-vue>
        
    </div>
</template>



<script>
import StartScreenTemplateVue from '../components/StartScreenTemplate.vue';

export default {
    name: 'Register',
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