import { userSlice } from './UserSlice';
import { IUser } from './../../models/iUser';
import axios from 'axios';
import { AppDispatch } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.userFetching())
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     dispatch(userSlice.actions.userFetchingSuccess(response.data))
//   } catch (e) {
//     if (e instanceof Error) {
//       dispatch(userSlice.actions.userFetchingError(e.message));
//     }
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      if (!response) {
        throw new Error('uhi');
      }
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
    }
  }
)