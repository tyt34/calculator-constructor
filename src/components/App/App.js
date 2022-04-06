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

  cloneArrayButtons.map( i => {
    //console.log('1 i -> > ', i)
  })

  React.useEffect( () => {
    if (currentItem !== null) {
      console.log(' 1: current >', currentItem.mainClass, '< >', currentBoard.id, '<')
    }
  }, [currentItem, currentBoard])

  function dragOverHandler(e) { //просто двигаешь
    //console.log(' -> 0 <-')
    e.preventDefault()
  }

  function dragLeaveHandler(e) { // просто перемещение
    //console.log(' -> 1 <-')
    //e.target.style.background = 'red'
  }

  function dragStartHandler(e, board, el) { // кого схватили
    //console.log(' -> 2 <-', el)
    setCurrentItem(el)
    setCurrentBoard(board)
  }

  function dragEndHandler(e) {
    //console.log(' -> 3 <-')
  }

  //console.log(true || false)

  function dropHandler(e, board, el) {
    e.preventDefault()
    console.log(' -> 4 <-', board.id, ' / ', el.mainClass)
    console.log(' cur bor ', currentBoard.id)
    console.log(' --- bor ', board.id)
    if ((currentBoard.id !== 'left') || (board.id !== 'left')) {
      console.log(' --_--> 4 <--_--')
      const currentIndex = currentBoard.items.indexOf(currentItem)
      //console.log(' 4 1 : ', currentIndex)
      currentBoard.items.splice(currentIndex, 1)
      const dropIndex = board.items.indexOf(el)
      /*
      console.log(' DI/CI ', dropIndex, '/', currentIndex)
      let numForChange
      if (dropIndex >= currentIndex) {
        if (board.id !== currentBoard.id) {
          console.log(' var 1 ')
          numForChange = dropIndex + 1
        } else {
          console.log(' var 2')
          numForChange = dropIndex + 1
        }
      } else {
        console.log(' var 3 ')
        numForChange = dropIndex
      }
      */
      //board.items.splice(numForChange, 0, currentItem)
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
    } else {
      /*
      console.log(' -----------------------------')
      console.log(currentBoard.id !== 'left')
      console.log(board.id !== 'left')
      console.log((currentBoard.id !== 'left') && (board.id !== 'left'))
      */
    }
  }

  function dropCardHandler(e, board) {
    //e.preventDefault()
    console.log(' --- 5 ---', board.id)
    if (board.items.length === 0) {
      //console.log(' 0: get new item')
      board.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)

      setRemove()

      setBoards(boards.map(b => {
        //console.log('b1: ', b.id, ' board: ', board.id)
        if (b.id === board.id) {
          return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      }))
    } else {
      //console.log(' 2: arr not empty ')
      const currentIndex = currentBoard.items.indexOf(currentItem) // номер элемента слева
      //console.log(' b1 bb: ', board.id) // доска куда отправлено
      //console.log(' b2 cur bor: ', currentBoard.id) // доска откуда отправлено
      //console.log(' b3 cur it: ', currentItem.mainClass) // что именно отправлено
      //console.log(' currentIndex ', currentIndex)
      //currentBoard.items.map( i => console.log(' элементы которые были до отправки ', i.mainClass))
      if (board.id !== currentBoard.id) {
        if (currentIndex > -1) {
          console.log(' ---> ', currentBoard.id)
          board.items.push(currentItem)
          //currentBoard
          setRemove()
          currentBoard.items.splice(currentIndex, 1)
          setBoards(boards.map(b => {
            //console.log('b2: ', b)
            if (b.id === board.id) {
              return board
            }
            if (b.id === currentBoard.id) {
              return currentBoard
            }
            return b
          }))
          //console.log(' -____-> ', boards[0].items)
        }
      }
    }
  }

  function setRemove() {
    arrayButtons.map( el => { // чтобы в левой части появилось опасити
      //console.log(' 4: el ', el)
      if (el.id === currentItem.id) {
        //console.log(' FIND ')
        el.remove = false
      }
    })
  }

  function setNotRemove(element) {
    arrayButtons.map( el => { // чтобы в левой части появилось опасити
      //console.log(' 4: el ', el, element)
      if (el.id === element.id) {
        //console.log(' FIND ')
        el.remove = true
      }
    })
  }

  const handleClick = (e, el) => {
    switch (e.detail) {
      case 1:
        console.log("click")
        break
      case 2:
        console.log("double click" , el)
        const currentIndex = boards[1].items.indexOf(el)
        console.log(currentIndex)
        //boards[1].items.splice(currentIndex, 1)
        //boards[0].items.push(el)
        console.log(boards[1].items)
        console.log(boards[0].items)

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
        console.log(boards)
        setNotRemove(el)
        break
      case 3:
        console.log("triple click")
        break
      default:
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
