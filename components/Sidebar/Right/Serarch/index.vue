<template>
  <div> 
    <input type="text" class="rounded-lg overflow-hidden p-2 w-full border-2" :placeholder="placeholder"/>
  </div>
</template>

<script setup>

const props = defineProps({
  placeholder:{
    type:String,
    default:'Search...'
  }
})

</script>

<style>

</style>