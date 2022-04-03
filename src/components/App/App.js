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

  return (
    <section className="main">
      <PanelLeft/>
      <PanelRight/>
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
