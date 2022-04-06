import './App.css'
//import PanelLeft from '../PanelLeft/PanelLeft'
//import PanelRight from '../PanelRight/PanelRight'
import Board from '../Board/Board'
import React, { useState } from 'react'
import {
  arrayButtons,
} from '../../utils/constants.js'

function App() {
  const cloneArrayButtons = [...arrayButtons]
  const [boards, setBoards] = useState([
    {
      id: 'left',
      items: cloneArrayButtons
    },
    {
      id: 'right',
      items: []
    }
  ])
  const [currentItem, setCurrentItem] = useState(null)
  const [currentBoard, setCurrentBoard] = useState(null)

  React.useEffect( () => {
    if (currentItem !== null) {
      console.log(' 1: current >', currentItem.mainClass, '< >', currentBoard.id, '<')
    }
  }, [currentItem, currentBoard])

  function dragOverHandler(e) { //просто двигаешь
    //console.log(' -> 0 <-')
    e.preventDefault()
    //console.log(e.target)
    //console.log(e.currentTarget)
    //console.log(e.target.className)
    //console.log(e.target.children)
    let goodClassArray = [
      'numbers numbers__work',
      'display display__work',
      'operations operations__work',
      'equal equal__work'
    ]
    const coincidence = (el) => {
      //return el === e.target.className
      return el === e.currentTarget.className
    }
    //console.log(goodClassArray.some(coincidence))
    if (currentItem.mainClass !== 'display') {
      if (goodClassArray.some(coincidence)) {
        e.currentTarget.style.boxShadow = '0px 7px 0px -2px #5D5FEF'
        //e.target.style.background = 'blue'
      }
    }

    /*
    подсветка элемента вместо кого он будет установлен
    */
  }

  function dragLeaveHandler(e) { // просто перемещение
    //console.log(' -> 1 <-')
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dragStartHandler(e, board, el) { // кого схватили
    //console.log(' -> 2 <-', el)
    setCurrentItem(el)
    setCurrentBoard(board)
  }

  function dragEndHandler(e) {
    //console.log(' -> 3 <-')
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dropHandler(e, board, el) {
    e.preventDefault()
    console.log(' -> 4 <-', board.id, ' / ', el.mainClass)
    if ((currentBoard.id !== 'left') || (board.id !== 'left')) {
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      const dropIndex = board.items.indexOf(el)
      board.items.splice(dropIndex+1, 0, currentItem)
      setBoards(boards.map(b => {
        if (b.id === board.id) {
          return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      }))
      setRemove()
      displayTop()
    }
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dropCardHandler(e, board) {
    console.log(' --- 5 ---', board.id)
    if (board.items.length === 0) {
      board.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      setRemove()
      setBoards(boards.map(b => {
        if (b.id === board.id) {
          return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      }))
      displayTop()
    } else {
      const currentIndex = currentBoard.items.indexOf(currentItem) // номер элемента слева
      if (board.id !== currentBoard.id) {
        if (currentIndex > -1) {
          board.items.push(currentItem)
          setRemove()
          currentBoard.items.splice(currentIndex, 1)
          setBoards(boards.map(b => {
            if (b.id === board.id) {
              return board
            }
            if (b.id === currentBoard.id) {
              return currentBoard
            }
            return b
          }))
          displayTop()
        }
      }
    }
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function setRemove() {
    arrayButtons.map( el => { // чтобы в левой части появилось опасити
      if (el.id === currentItem.id) {
        el.remove = false
      }
    })
  }

  function setNotRemove(element) {
    arrayButtons.map( el => { // чтобы в левой части появилось опасити
      if (el.id === element.id) {
        el.remove = true
      }
    })
  }



  const handleClick = (e, el) => {
    switch (e.detail) {
      case 1:
        //console.log("click")
        break
      case 2:
        //console.log("double click" , el)
        const currentIndex = boards[1].items.indexOf(el)
        //console.log(currentIndex)
        //boards[1].items.splice(currentIndex, 1)
        //boards[0].items.push(el)
        //console.log(boards[1].items)
        //console.log(boards[0].items)

        setBoards(boards.map(b => {
          //console.log('b2: ', b)
          if (b.id === 'left') {
            boards[0].items.push(el)
            return boards[0]
          }
          if (b.id === 'right') {
            boards[1].items.splice(currentIndex, 1)
            return boards[1]
          }
          //return b
        }))
        //console.log(boards)
        setNotRemove(el)
        displayTop()
        break
      case 3:
        //console.log("triple click")
        break
      default:
    }
  }

  //box-shadow: 0px 7px 0px -2px #5D5FEF;

  function displayTop() {
    let displayInArray
    boards[1].items.map( el => {
      if (el.mainClass === 'display') return displayInArray = true
    })
    if (displayInArray) {
      let newArr = []
      boards[1].items.map( el => {
        if (el.mainClass === 'display') newArr.push(el)
      })
      boards[1].items.map( el => {
        if (el.mainClass !== 'display') newArr.push(el)
      })
      setBoards(boards.map(b => {
        if (b.id === 'left') {
          return b
        }
        if (b.id === 'right') {
          b.items = newArr
          return b
        }
      }))
    }
  }

  return (
    <section className="main">
      {
        boards.map( board =>
          <Board
            boardId={board.id}
            board={board}
            key={board.id}
            items={board.items}
            dragOverHandler={dragOverHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}

            dropCardHandler={dropCardHandler}

            handleClick={handleClick}
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
