import httpInstance from "@/utils/http"
export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    },
    method: 'get'
  })
}


export function getSubCategoryAPI(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: { id }
  })
}
