import request from 'request'
import type { Post } from 'type'
const paths = {
  getPost: '/post',
  getThought: '/thought'
}

export function fetchPost(title: string) {
  return request.get<Post>(`${paths.getPost}/${title}.md`)
}

export function fetchAllPosts() {
  return request.get<Post[]>(paths.getPost)
}

export function fetchThought(title: string) {
  return request.get<Post>(`${paths.getThought}/${title}.md`)
}

export function fetchAllThoughts() {
  return request.get<Post[]>(paths.getThought)
}
