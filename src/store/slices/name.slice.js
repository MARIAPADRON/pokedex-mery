import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
	name: 'nameuser',
    initialState: "",
    reducers: {
        changeName : (state, action) =>{
            return action.payload
        }
        
    }
})
export const { changeName } = nameSlice.actions;
export default nameSlice.reducer;