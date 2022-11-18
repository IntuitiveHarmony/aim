import { useState } from 'react'
import { useSelector } from 'react-redux'
import { actRow1, deactRow1 } from './sequencerSlice'
import Step from './Step'

const Sequencer = (props) => {
  const row1 = useSelector((state) => state.sequencer.row1)
  const [notes, setNotes] = useState(['D3', 'C3', 'A2', 'G2', 'F2', 'D2', 'C2'])

  return (
    <div className='sequencerContainer'>
      <div className='stepContainer'>
        {row1.map((trig, index) => {
          return (
            <Step key={index} trig={trig} index={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Sequencer
