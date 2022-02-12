import React from 'react'
import Clock from './Clock'
export default function ClockList(props) {
  // props.pass.forEach((e)=>{
  //   console.log(e)
  // })
  return (
    <div>{
      // pass.map((vl)=>(
      //   <Clock/>
      // ))
      props.pass.map((e)=> <Clock key={Math.random()} />)
      }</div>
  )
}
