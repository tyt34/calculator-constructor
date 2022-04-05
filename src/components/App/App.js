import './App.css'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'
import React, { useState } from 'react'
import {
  arrayButtons,
} from '../../utils/constants.js'

function App() {
  const [elementsOfCanvas, setElementsOfCanvas] = useState([])
  const [leftPanel, setLeftPanel] = useState(arrayButtons)
  const [currentItem, setCurrentItem] = useState(null)
  const [alterCanvas, setAlterCanvas] = useState([])
  //const [currentDropIndex, setCurrentDropIndex] = useState(null)

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
    console.log(' -> 4 <-', el.mainClass)
    const dropIndex = elementsOfCanvas.indexOf(el)
    /*
    let numForChange
    if (dropIndex >= currentIndex) {
      if (board.title !== currentBoard.title) {
        numForChange = dropIndex
      } else {
        numForChange = dropIndex + 1
      }
    } else {
      numForChange = dropIndex
    }
    */
    console.log(' drop index ', dropIndex)
    let newStateDrop = []
    elementsOfCanvas.map( i => newStateDrop.push(i))
    newStateDrop.splice(dropIndex + 1, 0, currentItem)
    setAlterCanvas(newStateDrop)
    e.preventDefault()
  }

  function dropCardHandler(e) {
    e.preventDefault();
    console.log(' --- 5 ---', currentItem.mainClass)
    let newState = leftPanel.map( item => {
      if (item.id === currentItem.id) {
        item.remove = false
        return item
      } else {
        return item
      }
    })
    setLeftPanel(newState) // добавление opacity в левую панель
    setElementsOfCanvas( elementsOfCanvas => [...elementsOfCanvas, currentItem])
  }

  React.useEffect( () => {
    //console.log(' - - > ')
    setElementsOfCanvas(alterCanvas)
  }, [alterCanvas])

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

  return (
    <section className="main">
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
    </section>
  )
}

export default App;

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
