<template>
  <div class="p-3 justify-between hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-dim-300 border-b dark:text-white" 
    :class = "[twitterBorderColor,defaultTransition]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const {twitterBorderColor, defaultTransition} = useUseTailwindConfig()

</script>

<style>

</style>