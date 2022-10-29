<template>
    <!-- This is the login page where a invited startup is known into the platform itself --> 
    <div class="login">
        <start-screen-template-vue> 
            <!-- calling / importing the start screen template vue to use the left image with the aqua background color -->
            <h2>WELKOM</h2>
            <h1>Login</h1>
            <p class="introduction"> Lorem ipsum dolor sit amet, consectetur adipiscing elxit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="input">
                <input placeholder="E-mail" type="text">
                <input placeholder="Wachtwoord" type="text">
            </div>
            <button class="primary">Log in</button>
            <p class="password_information">Wachtwoord vergeten? Geen probleem, <router-link class="password_reset_link" to="/passwordreset" >Klik hier.</router-link></p>
        </start-screen-template-vue>
        
    </div>
</template>



<script>
import StartScreenTemplateVue from '../components/StartScreenTemplate.vue';
// importing the component to use it in within the template//

export default {
    name: 'Login',
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

</style>