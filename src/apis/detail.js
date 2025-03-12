import httpInstance from "@/utils/http";

// 获取商品详情
export const getDetailAPI = (id) => {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}
