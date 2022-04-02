import React from 'react';
import './PanelLeft.css'
import Display from './Display/Display'
import Equal from './Equal/Equal'
import Numbers from './Numbers/Numbers'
import Operations from './Operations/Operations'
import { useSelector } from 'react-redux'

function PanelLeft(props) {
  const checkState = useSelector( state => state.check)

  React.useEffect( () => {
    console.log('Left-Panel checkState ', checkState)
  },[checkState])

  return (
    <>
      <section className="panelleft">
        <Display
          result='0'
        />
        <Operations />
        <Numbers />
        <Equal />
      </section>
    </>
  )
}

export default PanelLeft
