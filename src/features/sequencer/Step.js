import { useDispatch } from 'react-redux'
import { actRow1, deactRow1 } from './sequencerSlice'

const Step = (props) => {
  const dispatch = useDispatch()
  
  return(
    <>
      {props.trig.note ?
        <div className='active step' onClick={() => dispatch(deactRow1([props.index, null]))}>{props.note}</div>
      :
        <div className='step' onClick={() => dispatch(actRow1([props.index, props.note]))}></div>
      }
    </>
  )
}

export default Step
