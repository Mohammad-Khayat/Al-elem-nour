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
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}




</style>
