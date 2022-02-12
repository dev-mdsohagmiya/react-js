import React from 'react'
import ClockList from './components/ClockList'

export default function App() {
  const array = [1,2,3,4,5,6,7]
  return (
    <div>
      <ClockList pass={array}/>
    </div>
  )
}
