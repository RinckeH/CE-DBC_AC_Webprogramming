<template> 
<!-- This component is a basic layout for all the sign up / log in / log out proces. -->
    <div class="start-screen-template">
        <div class="left"> 
              <!-- To split the screen into left and right -->
            <div class="overlay"></div>
            <!-- To darken the used image with a green background -->
            <img class="login-photo" src="@/assets/images/BOM-investor_readiness_sessie-2166_cropped.jpeg" alt="">
        </div>
        <div class="right">
            <div class="content-right">
                <slot></slot>
                 <!-- slot = to pass a template fragment to a child component, 
                and let the child component render the fragment within its own template. 
                In other words, if you import the basepage into a template of a page, the new written code will come in the slot area.
                -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartScreenTemplate'
}
</script>

<style scoped>
 /* it is scoped so all the styling elements are only for the BasepPage 
    and won't influence other pages / components */
    .start-screen-template {
        display: flex;
        height: 100vh;
        /* this means: 100% of the viewport height */
        background-color: rgb(41, 183, 185, .3);
    }

    .left {
        flex: 1;
        /* left is 50% and right 50% */
        position: relative;
        
    }

    .right {
        display: flex; /* to make it a flexbox */
        justify-content: center;
        align-items: center;
        flex: 1;

    }

    .login-photo {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        object-position: 40% 100%;
        /* to style the X and Y positon of the background image */
        border-bottom-right-radius: 102px;
        border-top-right-radius: 102px;
    }

    .overlay {
        width: 100%;
        height: 100vh;
        background-color: #135B5C;
        opacity: 0.95;
        position: absolute;
        /* takes the .left  */
        mix-blend-mode: multiply;
        /* to blend / merging the dark green background color with the image. This way te image will keep it original color mixed with green. */
        border-bottom-right-radius: 102px;
        border-top-right-radius: 102px;
    }

    .content-right {

        margin: 0 194px 0 228px
    }

</style>