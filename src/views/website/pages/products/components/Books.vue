
<template>
  
  <div>
      

      <div class="images d-flex">

          <b-img v-for="(image,i) in images" :key="i" :src="image" :class="`image${i} img-item`" :style="{zIndex:i+1 , transform:`perspective(250px) rotateY(25deg) translate3d(${(i+1)*10}px , 0px , ${(i+1)*10}px)`}"></b-img>

      </div>



  </div>
</template>

<script>
export default {
props:['images']
}
</script>

<style>
.images{
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.img-item{
    position: absolute;
    width: 180px;
    height: 250px;
}
</style>