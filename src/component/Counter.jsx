import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dec_count, inc_count } from '../Features/Counter/action';

export const Counter = () =>
{
    const dispatch = useDispatch()
const count = useSelector((state) =>state.counterState.count)
    return (
        <div>
            <h1>Counter : { count }</h1>
            <button onClick={ () =>
            {
                dispatch(inc_count(1))
            } }>Add+1</button><br />
              <button onClick={ () =>
            {
                dispatch(dec_count(1))
            }}>sub-1</button>
        </div>
    )
}