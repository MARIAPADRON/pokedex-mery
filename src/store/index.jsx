import nameSlice from './slices/name.slice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    nameuser: nameSlice
	}
})