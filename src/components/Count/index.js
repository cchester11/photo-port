import React, { useState } from 'react';

function Count () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>CLICK</button>
    </div>
  )
}

export default Count;