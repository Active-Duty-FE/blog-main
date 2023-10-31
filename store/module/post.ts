import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchPost } from '@service/post'
type InitialState = {
  post: {
    id: number
    userId: number
    title: string
    contents: string
  } | null
}

const initialState: InitialState = {
  post: null
}
export const fetchPostById = createAsyncThunk('post', async (id: string) => {
  const res = await fetchPost(id)
  return res.data
})
