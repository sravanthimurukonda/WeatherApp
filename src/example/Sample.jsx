
import React from 'react'
import TestComp from './TestComp'
const Mango=()=>{
    return(
        <h2>Mangoes are sweet</h2>
    )
}

const Grapes=()=>{
    return(
        <h3>Grapes are sour</h3>
    )
}

function Sample() {
  return (
    <div>Sample
        <Mango/>
        <Grapes/>
        <TestComp/>
    </div>
  )
}

export default Sample
