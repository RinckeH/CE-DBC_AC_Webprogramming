<template>

  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /* Here comes the basic / consistent styling for the entire app / startup dashboard platform */
body {
  padding: 0;
  margin: 0
}

#app {
  width: 100vw;
  font-family: 'Lato', sans-serif;
}

input {
  padding: 21px 18px 21px 18px;
  width: 334px;
  height: 22px;
  left: 961px;
  top: 465px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #0000001A;
}

button.primary {
  width: 196px;
  height: 64px;
  background: #29B7B9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 400;
  padding: 21px 27px 21px 27px;
  cursor: pointer;

}

textarea, select, input, button { outline: none; }

.content-block { 
  /* This is the 'head block' of every page within the startup dashboard platform */
  background-image: url('~@/assets/images/BOM-investor_readiness_sessie-2058.jpg');
  background-position: 50% 20%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  width: 995px;
  height: 354px;
  position: relative;
}

.content-block > .overlay {
  background-color: #135B5C;
  opacity: 0.95;
  position: absolute;
  mix-blend-mode: multiply; /* to blend the original picture */
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 20px;
}

</style>
