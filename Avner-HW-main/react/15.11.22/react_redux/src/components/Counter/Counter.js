import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../../redux/counter/actions'
import Button from '@mui/material/Button';
import "./Counter.css"

export default function Counter() {
   const counter = useSelector((state) => state.counter)

   const dispatch = useDispatch()

   const inputRef = useRef()
   return (
      <div className='counter_container'>
         <input ref={inputRef} placeholder="Enter number" />
         <div className='counter_actions'>
            <Button variant="contained" onClick={() => dispatch(incrementCounterAction(+inputRef.current.value || 1))}>+</Button>
            {counter.count}
            <Button variant="contained" onClick={() => dispatch(decrementCounterAction(+inputRef.current.value || 1))}>-</Button>
         </div>
         <Button variant="contained" onClick={() => dispatch(resetCounterAction())}>Reset</Button>
      </div>
   )
}
