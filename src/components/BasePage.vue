<template>
   <div class="basepage">
    <div class="left"> 
        <!-- To split the screen into left and right -->
            <div class="sidebar">
                <div class="profile-image">
                </div>
                <div class="sidebar-content">
                    <router-link class="sidebar-item selected" to="/dashboard">DASHBOARD</router-link> 
                    <router-link class="sidebar-item" to="/programmas" >PROGRAMMAS</router-link>
                    <router-link class="sidebar-item" to="/aanmelden" >AANMELDEN</router-link>
                    <!-- Allows Vue Router to change the URL without reloading the page -->
                </div>
                <div>
                    <button class="logout-button" @click="$router.push('/LogoutConfirmation')"> UITLOGGEN </button>
                    <!-- When using the router. push , it adds a new route to the top of the stack, 
                        This method pushes a new entry into the history stack, so when for example the user clicks the browser back button they will be taken to the previous URL. -->
                </div>

            </div>
          
        </div>


    
        <div class="right">
            <div class="content-right">
                <span class="material-symbols-outlined person">person</span>
                <span class="material-symbols-outlined arrow">arrow_upward</span>
                <!-- 'material-symbols-outlined'is a standard class that can be called to use any icon of the google icons api -->
            </div>
            <slot></slot>
            <!-- slot = to pass a template fragment to a child component, 
                and let the child component render the fragment within its own template. -->
        </div>
    </div>

</template>

<script>


</script>

<style scoped>
    /* it is scoped so all the styling elements are only for the BasepPage 
    and won't influence other pages / components */

.basepage{
    display: flex;
    height: 100vh;
}

.left {
        
        position: relative;
        
    }

.right {
    padding: 64px 150px 0px 450px;
    
}

.sidebar {
    position: fixed; 
    /* An element with position: fixed; is positioned relative to the viewport, 
    which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element. */
    width: 363px;
    height: calc(100vh - 64px - 84px);
    background-color: #29B7B9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-top: 64px;
    padding-bottom: 84px;
    
}

.profile-image {
    width: 259px;
    height: 261px;
    border-radius: 49px;
    background-color: #FFFFFF;

}

.sidebar-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
}

.sidebar-item {
    font-size: 16px;
    color: #FFFFFF;
    padding: 20px 20px 20px 20px;
    width: 211px;
    text-decoration: none;
}

.sidebar-item:hover {
    background-color: #135B5C;
    opacity: 80%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
}

.selected {
    color: #000000;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: -3px 4px 4px rgba(0, 0, 0, 0.25);
}

.logout-button {
    width: 193.67px;
    height: 38.26px;
    color: #29B7B9;
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
}

.person, .arrow { 
    background-color: #135B5C;
    border-radius: 50%;
    padding: 8px;
    color: white;
    font-size: 48px;
    /* these ar the style settings for the Google API icons */
}

.person, .arrow {
    margin: 64px 32px 64px 0px;
}


.content-right {
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}




</style>