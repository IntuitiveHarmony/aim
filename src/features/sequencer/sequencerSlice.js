import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  row1: [
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
    {note: null, vel: 0, delay: 0, synth: ''},
  ]
}

export const sequencerSlice = createSlice({
  name: 'sequencer',
  initialState,
  reducers: {
    actRow1: (state, action) => {
      // let me think about this logic
    },
    deactRow1: (state, action) => {
      // let me think about this logic
    },
  },
})

export const { actRow1, deactRow1 } = sequencerSlice.actions

export default sequencerSlice.reducer
