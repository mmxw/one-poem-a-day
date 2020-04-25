import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

export default function Testing() {
  const [state, setState] = useState('')
  useEffect(() => {
    axios.get('/api/get/allpoems')
        .then(res => setState(res.data))
  }, [])
  return (
    <div>
      <p>{state}</p>
    </div>
  )
}
