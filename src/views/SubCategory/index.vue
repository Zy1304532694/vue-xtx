<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import GoodsItem from '../Home/components/GoodsItem.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// 获取面包屑导航数据
const route = useRoute()
const categoryData = ref({})
const getSubCategory = async () => {
  const res = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
}
onMounted(() => getSubCategory())

//基础列表数据渲染
const goodsList = ref([])
const reqParams = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime' //  'orderNum'  'evaluateNum'
})
const getGoodsList = async () => {
  const res = await getSubCategoryAPI(reqParams.value)
  goodsList.value = res.result.items
}
onMounted(() => getGoodsList())

//tab切换
const tabChange = () => {
  reqParams.value.page = 1
  getGoodsList()
}

// 加载更多
const disabled = ref(false)
const load = async () => {
  reqParams.value.page++
  const res = await getSubCategoryAPI(reqParams.value)
  // goodsList.value.push(...res.result.items)
  goodsList.value = [...goodsList.value, ...res.result.items]
  // 如果返回的数据为空，则停止加载
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="`/category/${categoryData.parentId}`">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqParams.sortField" @tab-change="getGoodsList">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="item in goodsList" :key="item.id" :good="item" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
