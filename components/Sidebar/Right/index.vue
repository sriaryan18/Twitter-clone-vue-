<template>
  <div class="flex flex-col">
    <div class="m-2">
      <SidebarRightSerarch placeholder="Search for People..."/>
    </div>
    

    <!-- Preview card : whats happening  -->
    <SidebarRightPreviewCard title="Whats Happeninig!!">
      <h1 v-if="hPending">Loaing...</h1>
      <SidebarRightPreviewCardItem v-else-if="!hPending" v-for="{title,count} in whatsHappening" :key="title">
               <h2 class="font-bold text-gray-800 text-md dark:text-white"> {{ title }}</h2>
               <p class="text-xs text-gray-400"> {{ count }}</p>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
    <!-- Preview card : Who to follow   -->

    <SidebarRightPreviewCard title="Who to follow!!" >
    
        <SidebarRightPreviewCardItem v-for="{name,id,img,handle} in whoToFollow" :key="id">
          <div class="flex flex-row justify-between p-2">
            <div class="flex flex-row">
              <img class="h-10 w-10 rounded-full" :alt="name" :src="img"/>
              <div class="flex flex-col ml-2">
                <h2 class="font-bold text-gray-900 text-sm dark:text-white"> {{ name }}</h2>
                <p class="text-xs text-gray-400">{{ handle }}</p>
              </div>
            </div>
            <button class="text-white dark:text-dim-100 bg-black rounded-xl p-2 dark:bg-dim-300">Follow</button>
          </div>
         
          
        </SidebarRightPreviewCardItem>
      
    </SidebarRightPreviewCard>

  </div>
</template>

<script lang="ts" setup>
  const {data:whatsHappening,pending:hPending} = await useFetch('/api/whatsHappening');
  const {data:whoToFollow, pending:wPending} = await useFetch('/api/whoToFollow')
</script>

<style>

</style>