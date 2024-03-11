<template>
  <NuxtLink to="#" class="flex item-center p-3 w-min hover:bg-gray-200 rounded-full
    dark:hover:bg-dim-200 dark:text-white text-black" 
    :class="{
    'bg-gray-200': props.active,
    [defaultTransition]: true
    }">
    <div class="w-6 h-6 text-dark">
        <slot name="icon"></slot>
    </div>
    <div  class="hidden ml-4 text-xl  xl:block" :class="textClass">
        <slot name="name"></slot>
    </div>
  </NuxtLink>
</template>

<script setup>
const {defaultTransition} = useUseTailwindConfig();
const props = defineProps({
  active:{
    type:Boolean,
    default:false
  }
})
const textClass = computed(()=>props.active ? 'font-semibold': 'font-normal')
</script>

<style>

</style>