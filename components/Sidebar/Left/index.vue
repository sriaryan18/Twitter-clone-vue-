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
      <SidebarLeftTab v-for="(tab,index) in tabs" :active="activeTab === index" :key="tab.name">
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
  DocumentTextIcon,UserIcon,CircleStackIcon} from '@heroicons/vue/24/solid'
const {defaultTransition} = useUseTailwindConfig();
const activeTab = ref(0);
const tabs = [
  {icon:HomeIcon,name:'Home'},
  {icon:HashtagIcon,name:'Explore'},
  {icon:InboxIcon,name:'Messages'},
  {icon:BellIcon,name:'Notification'},
  {icon:BookmarkIcon,name:'Bookmarks'},
  {icon:DocumentTextIcon,name:'Lists'},
  {icon:UserIcon,name:'Profile'},
  {icon:CircleStackIcon,name:'More'}
]
</script>

<style>

</style>