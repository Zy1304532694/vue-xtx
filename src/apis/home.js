import  httpInstance  from "@/utils/http";

// 获取轮播图
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
    method: 'GET'
  })
}

// 获取新鲜好物
export function getNewAPI() {
  return httpInstance({
    url: '/home/new',
    method: 'GET'
  })
}

// 获取热门推荐
export function getHotAPI() {
  return httpInstance({
    url: '/home/hot',
    method: 'GET'
  })
}

