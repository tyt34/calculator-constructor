import './App.css'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'
import React, { useState } from 'react'

function App() {
  /*
  const [boards, setBoards] = useState([
    {PanelLeft},
    {PanelRight},
  ])
  */

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

  function dropCardHandler(e) {
    e.preventDefault();
    console.log(' --- 5 ---')
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
