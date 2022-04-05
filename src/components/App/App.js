import './App.css'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'
import Board from '../Board/Board'
import React, { useState } from 'react'
import {
  arrayButtons,
} from '../../utils/constants.js'

function App() {
  const [boards, setBoards] = useState([
    {
      id: 'left',
      items: arrayButtons
    },
    {
      id: 'right',
      items: []
    }
  ])
  const [currentItem, setCurrentItem] = useState(null)
  const [currentBoard, setCurrentBoard] = useState(null)

  function dragOverHandler(e) { //просто двигаешь
    //console.log(' -> 0 <-')
    e.preventDefault()
  }

  function dragLeaveHandler(e) { // просто перемещение
    //console.log(' -> 1 <-')
    //e.target.style.background = 'red'
  }

  function dragStartHandler(e, el) { // кого схватили
    //console.log(' -> 2 <-', el)
    setCurrentItem(el)
  }

  function dragEndHandler(e) {
    //console.log(' -> 3 <-')
  }

  function dropHandler(e, el) {
    e.preventDefault()
    console.log(' -> 4 <-', el)
  }

  function dropCardHandler(e, board) {
    e.preventDefault()
    console.log(' --- 5 ---', board)
  }

  return (
    <section className="main">
      {
        boards.map( board =>
          <Board
            boardId={board.id}
            key={board.id}
            items={board.items}
            dragOverHandler={(e) => {dragOverHandler(e)}}
            dragLeaveHandler={(e) => {dragLeaveHandler(e)} }
            dragStartHandler={ (e) => {dragStartHandler(e, board) }}
            dragEndHandler={(e) => {dragEndHandler(e)}}
            dropHandler={(e) => {dropHandler(e)}}

            dropCardHandler={(e) => {dropCardHandler(e, board)}}
          />
        )
      }
    </section>
  )
}

export default App;
/*
React.useEffect( () => {
  //console.log(' display on top')
  let displayInArray
  elementsOfCanvas.map( el => {
    if (el.mainClass === 'display') return displayInArray = true
  })
  if (displayInArray) {
    let newArr = []
    elementsOfCanvas.map( el => {
      if (el.mainClass === 'display') newArr.push(el)
    })
    elementsOfCanvas.map( el => {
      if (el.mainClass !== 'display') newArr.push(el)
    })
    setElementsOfCanvas(newArr)
  }
  //setElementsOfCanvas(alterCanvas)
}, [leftPanel, alterCanvas])
*/

/*
<PanelLeft
  dragOverHandler={dragOverHandler}
  dragLeaveHandler={dragLeaveHandler}
  dragStartHandler={dragStartHandler}
  dragEndHandler={dragEndHandler}
  dropHandler={dropHandler}
  leftPanel={leftPanel}
/>
<PanelRight
  dragOverHandler={dragOverHandler}
  dropCardHandler={dropCardHandler}
  elementsOfCanvas={elementsOfCanvas}

  dragLeaveHandler={dragLeaveHandler}
  dropHandler={dropHandler}
  dragEndHandler={dragEndHandler}
  dragStartHandler={dragStartHandler}
/>
*/

//setElementsOfCanvas( elementsOfCanvas => [...elementsOfCanvas, currentItem])
/*
  это простой способ запушить новый элемент в массив useState
*/
/*
return (
  <section className="main">
    <PanelLeft/>
    <PanelRight/>
  </section>
)
*/
