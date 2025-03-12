// 封装banner轮播图相关代码
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router'


export function useCategory() {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  // 获取分类数据
  onMounted(() => getCategory())
  onBeforeRouteUpdate((to) => getCategory(to.params.id))

  return {
    categoryData
  }
}

