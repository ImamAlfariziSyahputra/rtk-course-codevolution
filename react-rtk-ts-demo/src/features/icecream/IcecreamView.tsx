import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';

export default function IcecreamView() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);

  const numOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button
        onClick={() => dispatch(ordered())}
        style={{ marginBottom: '1rem' }}
      >
        Order ice cream
      </button>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <input
          type="number"
          value={value}
          style={{ height: '32px' }}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(value))}>
          Restock ice creams
        </button>
      </div>
    </div>
  );
}
