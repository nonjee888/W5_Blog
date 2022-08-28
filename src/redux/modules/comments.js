import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __getComments = createAsyncThunk(
    "comments/getComments",
    async (payload, thunkAPI) => {
        try {
            const data =  await axios.get("http://localhost:3001/comments");
            return thunkAPI.fulfillWithValue(data.data);
          } catch (error) {
            return thunkAPI.rejectWithValue(error);
          }
    }
  );
export const comments = createSlice({
    name:"comments",
    initialState: {
        comments: [],
        isLoading: false,
        error: null,
      },
    reducers:{
        createComment(state, action){
            state.comments.push(action.payload);
            axios.post("http://localhost:3001/comments",action.payload );
        },
        removeComment(state, action){
            let  index = state.comments.findIndex(comment =>  comment.id === action.payload);
			state.comments.splice(index,1);
            axios.delete(`http://localhost:3001/comments/${action.payload}`);
        },
        updateComment(state, action){
            let  index = state.comments.findIndex(post =>  post.id === action.payload.id);
			state.comments.splice(index, 1, action.payload);
            axios.patch(`http://localhost:3001/comments/${action.payload.id}`, action.payload);
        }
    },
    extraReducers: {
        [__getComments.pending]: (state) => {
          state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [__getComments.fulfilled]: (state, action) => {
          state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
          state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
        },
        [__getComments.rejected]: (state, action) => {
          state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
          state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
      },
})

export let { createComment, removeComment, updateComment} = comments.actions;

export default comments;