<script setup>
import { onMounted } from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()


onMounted(() => {
  categoryStore.getCategory();
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <RouterView />
  <!-- 二级路由出口 使用key 解决二级路由切换时，缓存问题 -->
  <!-- <RouterView :key="$route.fullPath" /> -->

  <LayoutFooter />
</template>
