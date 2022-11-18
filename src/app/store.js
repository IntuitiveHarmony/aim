import { configureStore } from '@reduxjs/toolkit'
import sequencerReducer from '../features/sequencer/sequencerSlice'

export const store = configureStore({
  reducer: {
    sequencer: sequencerReducer,
  },
})
