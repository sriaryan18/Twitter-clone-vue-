<template>
  <div class="flex flex-col h-screen">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter/>
        </div>
    </NuxtLink>
    </div>
     <div class="mt-2 space-y-3"  >
      <SidebarLeftTab v-for="tab in tabs">
       <template #icon>
        <component :is="tab.icon"/>
       </template>
       <template #name>
          {{ tab.name }}
       </template>
    </SidebarLeftTab>
     </div>
     

  </div>
</template>

<script setup>
import  {HomeIcon,HashtagIcon,BellIcon,InboxIcon,BookmarkIcon,
  DocumentTextIcon,UserIcon} from '@heroicons/vue/24/solid'
const {defaultTransition} = useUseTailwindConfig();
const tabs = [{
  icon:HomeIcon,name:'Home'
},{icon:HashtagIcon,name:'Explore'}]
</script>

<style>

</style>