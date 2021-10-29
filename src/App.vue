<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>


export default {};
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');
body,
* {
font-family: 'Almarai', sans-serif;
}
.selector-for-some-widget {
  box-sizing: content-box;
}
* {
  direction: rtl;
  text-align: right;
}
body,html{
  overflow-x: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2b2b2b;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:  #FFD400;
  border: 1px solid #2b2b2b;
  border-radius: 25px;
 }

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #e7c100;
}




</style>
