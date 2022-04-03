import React, { useState } from 'react'
import './PanelLeft.css'
import Display from './Display/Display'
import Equal from './Equal/Equal'
import Numbers from './Numbers/Numbers'
import Operations from './Operations/Operations'
import { useSelector } from 'react-redux'
import {
  arrayButtons,
} from '../../utils/constants.js'
import PartOfCalc from './PartOfCalc/PartOfCalc'


function PanelLeft(props) {
  const [leftPanel, setLeftPanel] = useState(arrayButtons)
  const checkState = useSelector( state => state.check)

  React.useEffect( () => {
    console.log('Left-Panel checkState ', checkState)
  }, [checkState])

  function dragOverHandler(e) {
    console.log(' -> 0 <-')
    e.preventDefault()
  }

  function dragLeaveHandler(e) {
    console.log(' -> 1 <-')
  }

  function dragStartHandler(e) {
    console.log(' -> 2 <-')
  }

  function dragEndHandler(e) {
    console.log(' -> 3 <-')
  }

  function dropHandler(e) {
    console.log(' -> 4 <-')
    e.preventDefault()
  }

  return (
    <>
      <section className="panelleft">
        {leftPanel.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              onDragOver={ (e) => {dragOverHandler(e)} }
              onDragLeave={ (e) => {dragLeaveHandler(e)} }
              onDragStart={ (e) => {dragStartHandler(e) }}
              onDragEnd={ (e) => {dragEndHandler(e)} }
              onDrop={ (e) => {dropHandler(e)} }
            />
          )
        )}
      </section>
    </>
  )

  /*
  return (
    <>
      <section className="panelleft">
        <Display
          result='0'
          onDragOver={ (e) => {dragOverHandler(e)} }
          onDragLeave={ (e) => {dragLeaveHandler(e)} }
          onDragStart={ (e) => {dragStartHandler(e) }}
          onDragEnd={ (e) => {dragEndHandler(e)} }
          onDrop={ (e) => {dropHandler(e)} }
        />
        <Operations
          onDragOver={ (e) => {dragOverHandler(e)} }
          onDragLeave={ (e) => {dragLeaveHandler(e)} }
          onDragStart={ (e) => {dragStartHandler(e) }}
          onDragEnd={ (e) => {dragEndHandler(e)} }
          onDrop={ (e) => {dropHandler(e)} }
        />
        <Numbers
          onDragOver={ (e) => {dragOverHandler(e)} }
          onDragLeave={ (e) => {dragLeaveHandler(e)} }
          onDragStart={ (e) => {dragStartHandler(e) }}
          onDragEnd={ (e) => {dragEndHandler(e)} }
          onDrop={ (e) => {dropHandler(e)} }
        />
        <Equal
          onDragOver={ (e) => {dragOverHandler(e)} }
          onDragLeave={ (e) => {dragLeaveHandler(e)} }
          onDragStart={ (e) => {dragStartHandler(e) }}
          onDragEnd={ (e) => {dragEndHandler(e)} }
          onDrop={ (e) => {dropHandler(e)} }
        />
      </section>
    </>
  )
  */
}

export default PanelLeft

/*
onDragOver={ (e) => {dragOverHandler(e)} }
onDragLeave={ (e) => {dragLeaveHandler(e)} }
onDragStart={ (e) => {dragStartHandler(e, board) }}
onDragEnd={ (e) => {dragEndHandler(e)} }
onDrop={ (e) => {dropHandler(e, board)} }
*/
