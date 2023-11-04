import request from 'request'
import type { Post } from 'type'
const paths = {
  getPost: '/post',
  getThought: '/thought'
}

export function fetchPost<T = any>(id: string) {
  return request.get<T>(`${paths.getPost}/${id}`)
}

export function fetchAllPosts<T = any>() {
  return request.get<T>(paths.getPost)
}

export function fetchThought<T = any>(id: string) {
  return request.get<T>(`${paths.getThought}/${id}`)
}

export function fetchAllThoughts<T = any>() {
  return request.get<T>(paths.getThought)
}
