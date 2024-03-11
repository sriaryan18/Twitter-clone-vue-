<template>
  <div class="m-2 border bg-gray-50 rounded-2xl dark:bg-dim-900 overflow-hidden" :class="twitterBorderColor">
    <h1 class="p-3 text-xl font-bold text-gray-900 border-b dark:text-white"  :class="twitterBorderColor">
      {{ props.title }}
    </h1>
    <slot></slot>
    <div class="p-3 text-blue-400 text-sm hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition">
        Show more
    </div>
  </div>
</template>

<script lang="ts" setup>
const {twitterBorderColor, defaultTransition} = useUseTailwindConfig()
const props = defineProps({
  title:{
    type:String,
    required:true
  },
  
})

</script>

<style>

</style>