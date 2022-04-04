import './App.css'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'
import React, { useState } from 'react'

function App() {
  const [elementsOfCanvas, setElementsOfCanvas] = useState([])
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e) {
    //console.log(' -> 0 <-')
    e.preventDefault()
  }

  function dragLeaveHandler(e) {
    //console.log(' -> 1 <-')
  }

  function dragStartHandler(e, el) {
    console.log(' -> 2 <-', el)
    setCurrentItem(el)
  }

  function dragEndHandler(e) {
    console.log(' -> 3 <-')
  }

  function dropHandler(e, el) {
    console.log(' -> 4 <-')
    e.preventDefault()
  }

  function dropCardHandler(e) {
    e.preventDefault();
    console.log(' --- 5 ---', currentItem.mainClass)
    setElementsOfCanvas( elementsOfCanvas => [...elementsOfCanvas, currentItem])
    /*
    if (elementsOfCanvas.length === 0) {
      //console.log(' cur it -> ', currentItem)
      setElementsOfCanvas([currentItem])
      //console.log('-__- arr el ', elementsOfCanvas)
    } else {
      //console.log(' --> arr el: ', elementsOfCanvas)
      //setElementsOfCanvas()
    }
    */
    //console.log(' 01 -> ', elementsOfCanvas)
    //setElementsOfCanvas()
    //console.log(' 02 -> ', elementsOfCanvas)
  }

  return (
    <section className="main">
      <PanelLeft
        dragOverHandler={dragOverHandler}
        dragLeaveHandler={dragLeaveHandler}
        dragStartHandler={dragStartHandler}
        dragEndHandler={dragEndHandler}
        dropHandler={dropHandler}
      />
      <PanelRight
        dragOverHandler={dragOverHandler}
        dropCardHandler={dropCardHandler}
        elementsOfCanvas={elementsOfCanvas}
      />
    </section>
  )
}

export default App;

/*
return (
  <section className="main">
    <PanelLeft/>
    <PanelRight/>
  </section>
)
*/
