import React, { useState } from 'react'
import './PanelLeft.css'
//import Display from './Display/Display'
//import Equal from './Equal/Equal'
//import Numbers from './Numbers/Numbers'
//import Operations from './Operations/Operations'
import { useSelector } from 'react-redux'

import {
  arrayButtons,
} from '../../utils/constants.js'

import PartOfCalc from '../PartOfCalc/PartOfCalc'


function PanelLeft(props) {
  //console.log('PanelLeft ', props)
  //const [leftPanel, setLeftPanel] = useState(arrayButtons)
  const checkState = useSelector( state => state.check)
  //const [copyButtons, setCopyButtons] = useState(arrayButtons)

  arrayButtons.map( i => {
    //console.log('1 i -> > ', i)
  })

  props.items.map( i => {
    //console.log('2 i -> > ', i)
  })
  /*
  copyButtons.map( i => {
    //console.log('3 i -> > ', i)
  })
  */

  React.useEffect( () => {
    //console.log('Left-Panel ', props.leftPanel)
  }, [props.leftPanel])
  /*
  React.useEffect( () => {
    console.log(' ---------> > > > >')
    //console.log('Left-Panel checkState ', checkState)
    arrayButtons.map( element => {
      console.log(' 3 element: ', element.id)
      props.items.map( item => {
        console.log(' 4 it : ', item.id)
        if (item.id === element.id) {
          console.log(element.remove)
          element.remove = true
          console.log(element.remove)
          //return element
        }
      })
    })
  })
  */

  return (
    <>
      <section
        className="panelleft"
      >
        {arrayButtons.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              status={'constructor'}
              remove={el.remove}
              onDragOver={ (e) => {props.dragOverHandler(e)} }
              onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
              onDragStart={ (e) => {props.dragStartHandler(e, props.board, el) }}
              onDragEnd={ (e) => {props.dragEndHandler(e)} }
              onDrop={ (e) => {props.dropHandler(e, props.board, el)} }
            />
          )
        )}
      </section>
    </>
  )
}

export default PanelLeft
/*
<PartOfCalc
  mainClass={el.mainClass}
  secondClass={el.secondClass}
  thirdClass={el.thirdClass}
  buttons={el.buttons}
  key={el.id}
  onDragOver={ (e) => {props.dragOverHandler(e)} }
  onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
  onDragStart={ (e) => {props.dragStartHandler(e, el) }}
  onDragEnd={ (e) => {props.dragEndHandler(e)} }
  onDrop={ (e) => {props.dropHandler(e, el)} }
  status={'constructor'}
  remove={el.remove}
/>
*/

/*
onDragOver={ (e) => {dragOverHandler(e)} }
onDragLeave={ (e) => {dragLeaveHandler(e)} }
onDragStart={ (e) => {dragStartHandler(e, board) }}
onDragEnd={ (e) => {dragEndHandler(e)} }
onDrop={ (e) => {dropHandler(e, board)} }
*/

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

/*
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
*/
